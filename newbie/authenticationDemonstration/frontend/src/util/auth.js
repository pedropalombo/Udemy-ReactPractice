import { redirect } from "react-router-dom";

//checking if token hasn't expired yet
export function getTokenDuration() {
    const storedExpirationData = localStorage.getItem('expiration');    //getting it from localStorage
    const expirationDate = new Date(storedExpirationData);  //transforming it into formated Date()
    const now = new Date(); //getting present time
    const duration = expirationDate.getTime() - now.getTime();  //and verifying if it's not expired (+ == true | - == false)

    return duration;
}

//getting token from localStorage
export function getAuthToken() {
    const token = localStorage.getItem('token');

    //checks if token exists at first
    if (!token) {
        return null;

    }

    //then sees if it's expired or not
    const tokenDuration = getTokenDuration();   //getting token expiration status

    //if it's expired
    if (tokenDuration < 0) {
        return 'EXPIRED';

    } else {
        return token;
    }

}

//exporting token
export function tokenLoader() {
    return getAuthToken();
}

//route protection in case user tries to access a page without being logged-in
export function checkAuthLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }

    return null;    //loaders must return something (null)
}