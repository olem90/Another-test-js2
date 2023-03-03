export function profileTemplate(profileData) {

    const profile = document.createElement("div");
    const editProfileBtn = document.createElement("a");
    const profileImg = document.createElement("img");
    const profileName = document.createElement("span");
    const email = document.createElement("span");
    const banner = document.createElement("img");

    editProfileBtn.innerText = "Edit";
    editProfileBtn.href ="/profile/edit/index.html" + `?name=${profileData.name}`;
    profileName.innerText = `${profileData.name}`;
    email.innerText = "Email: " + `${profileData.email}`;

    profile.classList.add("bg");
    profileName.classList.add("d-flex", "justify-content-center", "fw-bold");
    editProfileBtn.classList.add("d-flex","justify-content-end");

    if (profileData.avatar) {
        profileImg.classList.add("w-100", "profile-post-img");
        profileImg.src = profileData.avatar;
        profile.appendChild(profileImg);
    }

    profile.appendChild(profileName);
    profile.appendChild(email);
    
    if (profileData.banner) {
        banner.classList.add("w-100", "profile-banner");
        banner.src = profileData.banner;
        profile.appendChild(banner);
    }

    profile.appendChild(editProfileBtn);
   
    return profile;
}

export function renderProfileTemplate(profileData, parent) {
    parent.append(profileTemplate(profileData))
    };
 