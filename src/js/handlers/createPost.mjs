import { createPost } from "../api/posts/create.mjs";

export function createPostListener() {
    const form =  document.querySelector("#createPost");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
           
            //send to api
            
            if (createPost) {
                createPost(post);
                setTimeout(function routeHome() {
                {
                    window.location.replace("/feed/index.html");                  
                }          
                },1000);
            }
        })
    }
};

