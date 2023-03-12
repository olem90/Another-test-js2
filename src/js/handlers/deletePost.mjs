import { getPost, removePost } from "../api/posts/index.mjs";

    export async function removePostListener() {
        const removePostBtn = document.querySelector("#deletePostBtn");
    
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        const post = await getPost(id);
    
            removePostBtn.addEventListener("click", (event) => {
                post.id = id;
                
                //Send to API
                if (removePost) {
                    removePost(id);

                    setTimeout(function routeHome() {
                    {
                        window.location.replace("/feed/index.html");               
                    }          
                    },1000);               
                }                          
            })      
    };
   