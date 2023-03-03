import { getPost, updatePost } from "../api/posts/index.mjs";

export async function updatePostListener() {
    const form =  document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const button = form.querySelector("button");
        button.disabled = true;

        const post = await getPost(id);

        form.title.value = post.title;
        form.media.value = post.media;
        form.body.value = post.body;
        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            post.id = id;
           
            console.log("updatePostListener working");
            console.log(post);
            //send to api
            updatePost(post);

             setTimeout(function routeHome() {
                  {
                    window.location.href = "/src/index.html";
                 }
                    routeHome();
            },1000);
        })
    } 
};




