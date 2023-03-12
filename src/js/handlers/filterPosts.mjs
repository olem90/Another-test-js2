import { getPosts } from "../api/posts/read.mjs";
import * as templates from "../templates/index.mjs";

const path = location.pathname;
const searchBar = document.querySelector("#searchPosts");
const homePostsContainer = document.querySelector("#homePosts")



export async function filterPosts(event) {
    event.preventDefault();
    let filterValue = event.target.value.toLowerCase();
    const posts = await getPosts();
    
    const filteredPosts = posts.filter(
        (filteredPost) => 
              
        filteredPost.title.toLowerCase().includes(filterValue)     
    );
   
    homePostsContainer.innerHTML = "";    
    templates.renderPostTemplates( filteredPosts, homePostsContainer )     
    };
    

    if( path === "/feed/index.html") {
        searchBar.addEventListener('keyup', filterPosts);
    };






 
















    