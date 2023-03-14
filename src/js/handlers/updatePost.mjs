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
           
            //send to api
            if ( updatePost ) {
                updatePost(post);

                setTimeout(function routeBack() {
                {
                    window.location.replace("/feed/index.html");
                }
            },1000);          
            }                
        })
    } 
};





