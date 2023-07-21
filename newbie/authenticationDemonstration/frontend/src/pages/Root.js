import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();

  //getting token from App.js loader
  const token = useLoaderData();

  //submit hook for sending log-out requests
  const submit = useSubmit();

  //checking if user has a valid token, so it may be logged-out automatically in case token expires
  useEffect(() => {

    if(!token) {
      return;

    } 

    if(token === 'EXPIRED') {
      submit(null, {action: '/logout', method: 'post'});  //sending a logout request if the token is expired
      
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {

      submit(null, {action: '/logout', method: 'post'});  //sending a logout request when the timer runs out

    }, tokenDuration); //... after 1h (hour * minutes * seconds * milliseconds) || based on token's existant duration


  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
