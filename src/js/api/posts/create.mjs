import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action; 
    
    const response = await fetchWithToken( createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

    if ( !response.ok ) {
        alert("oooops. Looks like something went wrong");
    }

   return await response.json();
}


