import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../handlers/storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL =  API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
        
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const { accessToken, ...user } = await response.json();

    storage.save("token", accessToken);

    storage.save("profile", user);

    function loginData(){
        if (response.ok) {
            alert("You are now logged in");
            
            setTimeout(function routeHome() {
                {
                    window.location.replace("/feed/index.html");
               }
               
           },1000);
 
        } else {
            alert("Incorrect email or password")
        }
    }
    loginData();
}
