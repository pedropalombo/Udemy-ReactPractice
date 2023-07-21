import { redirect } from "react-router-dom";

//setting a hook to remove token from localStorage
// PS: official ReactRouter way of doing logouts
export function action() {
    localStorage.removeItem('token');   //token
    localStorage.removeItem('expiration');  //token's expiration time
    
    return redirect('/');   //... then returns user to Home page
}