

export function postTemplate(postData) {
    const post = document.createElement("div");
    const title = document.createElement("strong");
    const body = document.createElement("p");
    const postImage = document.createElement("img");
    const postCard = document.createElement("div");
    const tags = document.createElement("span");
    tags.classList.add("fs-6");
    postCard.classList.add("home-posts");
    postImage.classList.add("home-post-img");
    title.classList.add("fs-6");
    body.classList.add("bg")
    title.innerText = postData.title;
    body.innerText = postData.body;
    post.classList.add("shadow", "p-3", "my-3");
    postCard.appendChild(post);
    post.appendChild(title);
    post.appendChild(body);
    post.appendChild(tags);
    
    return post;
}

export function renderPostTemplate(postData, parent) {
   // parent.innerHTML += postTemplateA(postData)
   parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplateB))
   
}


