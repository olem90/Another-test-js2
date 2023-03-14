import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
    if ( !postData.id ) {
        throw new Error("Updates requires a postID")
    }

    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
    
    const response = await fetchWithToken( updatePostURL, {
        method,
        body: JSON.stringify(postData)
        
    })

    function updatePostResponse () {
        if (response.ok) {
            alert("Post has been updated");
        } else {
            alert("You cannot update other users posts");
        }
    } 
    updatePostResponse();
    
    return await response.json();
}


