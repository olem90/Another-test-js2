import { updatePost } from "../api/posts/update.mjs";


export function updatePostFormListener() {
    const form =  document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
           
            console.log("postForm listener working");
            console.log(post);
            //send to api
            updatePost (post);
        })
    }
};
updatePostFormListener();