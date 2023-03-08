import { getPosts } from "../api/posts/read.mjs";
import * as templates from "../templates/index.mjs"

// Filter posts by date with drop down menu
const profilePostsContainer = document.querySelector("#homePosts")
const SortPostsByNewest = document.querySelector(".newDate");
const SortPostsByOldest = document.querySelector(".oldDate");

export async function sortPostsByDate(event) {
    event.preventDefault();
    const posts = await getPosts();
    const sortedFromOldest = posts.sort(byOldest);
    const sortedFromNewest = posts.sort(byNewest);
    console.log(sortedFromOldest)
    if(sortedFromOldest){
        
        profilePostsContainer.innerHTML = "";    
        templates.renderPostTemplates( sortedFromOldest, profilePostsContainer )
    } else if(sortedFromNewest) {
        profilePostsContainer.innerHTML = "";    
        templates.renderPostTemplates( sortedFromNewest, profilePostsContainer )
    } else {
        return;
    }
    }
    function byOldest(a, b) {
       return new Date(a.created).valueOf() - new Date(b.created).valueOf();
    };
    function byNewest(a, b) {
        return new Date(b.created).valueOf() - new Date(a.created).valueOf();
     };

    
     SortPostsByNewest.addEventListener('click', sortPostsByDate);
     SortPostsByOldest.addEventListener('click', sortPostsByDate);
     

    