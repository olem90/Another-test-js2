import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/profiles";

export async function getProfiles() {

    const getProfilesURL = `${API_SOCIAL_URL}${action}`
    
    const response = await fetchWithToken( getProfilesURL )
    
    return await response.json();
}

export async function getProfile(name) {
    if (!name) {
        throw new Error("GET requires a name")
    }

    const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;
    
    const response = await fetchWithToken( getProfileURL )

    return await response.json();
}
