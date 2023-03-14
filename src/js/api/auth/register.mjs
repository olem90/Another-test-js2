import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
    const registerURL =  API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json();

    function registerResponse(){
        if (response.ok) {     
            alert("You are now registered");
            
            setTimeout(function routeHome() {
                {
                    window.location.replace("/profile/login/index.html");
                }              
           },1000);
        } else {
            alert("Something went wrong..");
        }
    }
    registerResponse();
}

