const search = document.querySelector("#searchPosts");

export function filterPosts() {
    let filterValue = search.value.toLowerCase();

    const posts = document.querySelectorAll(".home-post");
    posts.forEach(post => {
        console.log(post.querySelector("strong").innerText.toLowerCase().includes(filterValue) 
        ? post.style.display = "none" 
        : post.style.display = "")

    })
}

// Filter for searching posts
search.addEventListener('keyup', filterPosts);

console.log("we are connected BABYYY");

/*
if(post.innerText.toLowerCase().indexOf(filterValue) > -1) {
    post.style.display = "";
} else {
    post.style.display = "none";

}
*/