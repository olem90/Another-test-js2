import { login } from "../api/auth/login.mjs";

export function loginFormListener() {
    const form =  document.querySelector("#loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());

            setTimeout(function routeHome() {
                {
                   window.location.href = "/src/index.html";
               }
               routeHome();
           },1000);
           
            login(profile);
        })
    }
};
