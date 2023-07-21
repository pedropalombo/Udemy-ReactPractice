//import { useState } from 'react';
import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const data = useActionData(); //getting data sent through 'action' hook from 'Authentication.js'
  const navigation = useNavigation(); //hook to check if a request is being made

  const [searchParams, setSearchParams] = useSearchParams(); //useSearchParams => getting state through URL params
  const isLogin = searchParams.get('mode') === 'login'; //checking if terms after 'mode' matches 'login'
  const isSubmitting = navigation.state === 'submitting'; //cheking if resquest is submitting

  /*//toggles in between 'login' & 'create account'
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  }*/

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>

        {/* showing message if there're errors with the data */}
        {data && data.errors && 
          <ul>
            {Object.values(data.errors).map((err) =>(
              <li key={err}>
                {err}
              </li>
          ))}
          </ul>
        }

        {/* showing message in case 'data' has any */}
        {data && data.message && 
          <p>{data.message}</p>
        }

        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>

          {/* SPA way to toggle between pages */}
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>

          {/* disabling button in case request submission is on-going */}
          <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
