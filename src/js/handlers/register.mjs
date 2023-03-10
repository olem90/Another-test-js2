import { register } from "../api/auth/register.mjs";

export function registerFormListener() {
    const form = document.querySelector("#registerForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());
            

            setTimeout(function routeHome() {
                {
                   window.location.href = "/profile/index.html";
               }
               routeHome();
           },1000);
    
            //send to api
           register(profile)
           console.log(profile);
        })
    }
}
