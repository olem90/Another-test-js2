import { createPost } from "../api/posts/create.mjs";

const path = location.pathname;

export function createPostListener() {
    const form =  document.querySelector("#createPost");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
           
            //send to api
            createPost(post);

            setTimeout(function routeHome() {
                {
                if(path === "/profile/index.html") {
                    window.location.href = "/profile/index.html";
                } 
                if(path === "/src/index.html") {
                    window.location.href = "/src/index.html";
                }
               }
               
               routeHome();
           },1000);
        })
    }
};
createPostListener();