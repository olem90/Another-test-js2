export function postTemplate(postData) {
    const post = document.createElement("div");
    const postOptions = document.createElement("div");
    const editPost = document.createElement("a");
    const deletePost = document.createElement("a");
    const title = document.createElement("strong");
    const body = document.createElement("p");
    const postImage = document.createElement("img");
    const postCard = document.createElement("div");
    const tags = document.createElement("span");
    
    tags.classList.add("fs-6");
    postCard.classList.add("w-100");
    postImage.classList.add("profile-posts-img");
    title.classList.add("fs-6");
    body.classList.add("text-wrap", "w-100");
    postOptions.classList.add("w-100", "d-flex", "justify-content-end");
    editPost.classList.add("justify-content-end", "me-2");
    deletePost.classList.add("justify-content-end", "text-danger");
    title.innerText = postData.title;
    body.innerText = postData.body;
    editPost.innerText = "Edit";
    editPost.href = "/post/edit/index.html" + `?id=${postData.id}`;
    post.classList.add("shadow", "p-3", "my-3", "d-flex", "flex-column", "home-post");
    tags.innerText = postData.tags;

    postCard.appendChild(post);
    post.appendChild(postOptions);
    postOptions.appendChild(editPost);
    post.appendChild(title);
    post.appendChild(body);
    
    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("profile-post-img");
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        post.append(img);
    }

    post.appendChild(tags);

    return post;
}
export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(data => { 
       return postTemplate(data)
    }))
}


    