import router from "./router.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as profileMethods from "./api/profiles/index.mjs";
import * as templates from "./templates/index.mjs";
import * as storage from "./handlers/storage/index.mjs";

router();

const profileName = storage.load("profile");

 const path = location.pathname;

 if( path === "/profile/index.html") {
     profilePostsTemplate();
     profileInfoTemplate();
    
 } 
 if(path === "/feed/index.html") {
    homePostsTemplate();
 };

async function profilePostsTemplate() {
    const posts = await postMethods.getPosts();
    const profilePostContainer = document.querySelector("#profilePost");
    templates.renderPostTemplates(posts, profilePostContainer); 
};
async function profileInfoTemplate() {
    const profile = await profileMethods.getProfile(profileName.name);
    const profileContainer = document.querySelector("#profileInfoCard");
    templates.renderProfileTemplate(profile, profileContainer);
 };
async function homePostsTemplate() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#homePosts");
    templates.renderPostTemplates(posts, container);
};


