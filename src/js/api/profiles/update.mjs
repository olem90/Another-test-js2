import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
    if ( !profileData.name ) {
        throw new Error("Updates requires a name")
    }

    const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;
    
    const response = await fetchWithToken( updateProfileURL, {
        method,
        body: JSON.stringify(profileData)
    })
    
    function updateProfileResponse () {
        if (response.ok) {
            alert("Profile has been updated");
        } else {
            alert("Oooops, there seems like an error has occured. Try again");
        }
    } 
    updateProfileResponse();

    return await response.json();
}