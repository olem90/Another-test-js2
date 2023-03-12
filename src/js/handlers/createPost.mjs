import { createPost } from "../api/posts/create.mjs";

export function createPostListener() {
    const form =  document.querySelector("#createPost");
    console.log("yoo")
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
           
            //send to api
            createPost(post);
            console.log(post)
            
            setTimeout(function refreshPage() {
                {
                  location.reload();
               }
               
            },3000);
            refreshPage();

        })
    }
};

