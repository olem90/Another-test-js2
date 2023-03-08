import { getPosts } from "../api/posts/read.mjs";
import * as templates from "../templates/index.mjs";

const path = location.pathname;
const searchBar = document.querySelector("#searchPosts");
const profilePostsContainer = document.querySelector("#homePosts")


if( path === "/src/index.html") {
    searchBar.addEventListener('keyup', filterPosts);
}

export async function filterPosts(event) {
    event.preventDefault();
    let filterValue = event.target.value.toLowerCase();
    const posts = await getPosts();
    
    const filteredPosts = posts.filter(
        (filteredPost) => 
        filteredPost.body.toLowerCase().includes(filterValue) ||
        filteredPost.title.toLowerCase().includes(filterValue)     
    )

    profilePostsContainer.innerHTML = "";    
    templates.renderPostTemplates( filteredPosts, profilePostsContainer )     
    }






 
















    