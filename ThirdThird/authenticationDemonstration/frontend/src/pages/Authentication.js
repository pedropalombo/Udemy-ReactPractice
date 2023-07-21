import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

//form data retrieved from ReactRouter
// \-> PS: action() -> data manipulation (HTML/HTTP semantics)
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams; //getting info from URL using browser-native methods
  const mode = searchParams.get('mode') || 'login';  //retrieving URL terms after 'mode' | default: 'login'

  //if params match neither auth pages ...
  if(mode !== 'login' && mode !== 'signup') {

    //... throws new error
    // \-> json(message, responseCode)
    throw json(
      {
        message: 'Unsupported mode.'
      },
      {
        status: 422
      }
    )
  }

  const data = await request.formData();  //getting data from forms (authentication fields)

  //assigning data
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  };

  //sending auth data to server
  const response = await fetch('http://localhost:8000/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  //checks response types
  switch(response) {

    //if there was invalid credentials
    case response.status === 422:
      return response;
    
    case response.status === 401:
      return response;
    // -| / |-

    //if the request failed
    case !response.ok:

      //throws error
      throw json(
        {
          message: 'Could not authenticate user.'
        },
        {
          status: 500
        }
      );
      break;

    //otherwise...
    //... request succeeded!
    default:
      const resData = await response.json();  //getting response data
      
      const token = resData.token;  //extracting 'token' data from backend response (auth.js)
      localStorage.setItem('token', token); //setting token in LocalStorage

      const expirationDate = new Date();  //setting expiration timer for the token
      expirationDate.setHours(expirationDate.getHours() + 1); //... as 1h
      localStorage.setItem('expiration', expirationDate.toISOString()); //and setting it on localStorage

      return redirect('/'); //redirects to home
  }
}