import router from "./router.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as profileMethods from "./api/profiles/index.mjs";
import * as templates from "./templates/index.mjs";

router();

 const path = location.pathname;

 if( path === "/profile/index.html") {
     profilePostsTemplate();
     profileInfoTemplate();
    
 } 
 if(path === "/src/index.html") {
    homePostsTemplate();
 }
 
async function profilePostsTemplate() {
    const posts = await postMethods.getPosts();
    const profilePostContainer = document.querySelector("#profilePost");
    templates.renderPostTemplates(posts, profilePostContainer); 
}
async function profileInfoTemplate() {
     const profile = await profileMethods.getProfile("ole_marius90");
     const profileContainer = document.querySelector("#profileInfoCard");
     templates.renderProfileTemplate(profile, profileContainer);
 }
async function homePostsTemplate() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#homePosts");
    templates.renderPostTemplates(posts, container);
}

