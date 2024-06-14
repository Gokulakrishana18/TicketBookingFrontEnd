import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/ticketBooking"

const AUTH_REST_API_PERMIT_ALL ="http://localhost:8080";

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_PERMIT_ALL + '/register', registerObj);

export const loginAPICall = (email, password) => axios.post(AUTH_REST_API_PERMIT_ALL + '/users', { email, password});

export const storeToken = (token) => localStorage.setItem("token", token);

export const userName =(user_email)=>localStorage.setItem("user_email",user_email);
 
export const getUserName =()=> localStorage.getItem("user_email");

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (username) => sessionStorage.setItem("authenticatedUser", username);

export const isAuthentication = (isCheck) => sessionStorage.setItem("isAuthentication",isCheck);

export const getAuthentication = () => sessionStorage.getItem("isAuthentication"==="true");




export const isUserLoggedIn = () => {

    const username = sessionStorage.getItem("authenticatedUser");

    if(username == null) {
        return false;
    }    
    else {
        return true;
    }   
}

export const getLoggedInUser = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    console.log(userName);
    return username;
}

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}