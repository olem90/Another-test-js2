 import { getPosts } from "../api/posts/read.mjs";

 const searchBar = document.querySelector("#searchPosts");
 const profilePostsContainer = document.querySelector("#profilePost")

 export async function filterPosts(event) {
     event.preventDefault();
     let filterValue = searchBar.value.toLowerCase();
     let posts = await getPosts();
     posts.forEach((post)=> 
     
    
    }

 // Filter for searching posts
 searchBar.addEventListener('keyup', filterPosts);
