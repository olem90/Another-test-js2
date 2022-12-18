import { login } from "../api/auth/login.mjs";

export function loginFormListener() {
    const form =  document.querySelector("#loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());
           
            console.log(profile);
            //send to api
            login (profile)
        })
    }
};
console.log("I am connected to login page");