/*import { getPosts } from "../api/posts/read.mjs";

const searchBar = document.querySelector("#searchPosts").value.toLowerCase();

export async function filterPosts() {
    
    let filterValue = searchBar.value.toLowerCase();
    const posts = await getPosts();
    const postMatch = posts.filter((searchPost)=> {
        searchPost.title.toLowerCase().includes(filterValue)
    })
    console.log(postMatch)
    console.log(filterValue)
    }


// Filter for searching posts
//searchBar.addEventListener('keyup', filterPosts);

console.log("we are connected BABYYY");*/