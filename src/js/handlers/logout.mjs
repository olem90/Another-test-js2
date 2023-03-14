import * as storage from "./storage/index.mjs";

const logoutButton = document.querySelector(".logoutBtn");

const path = location.pathname;

if ( path === "/feed/index.html" || path === "/profile/index.html" ) {
    logoutButton.addEventListener('click', logoutUser);
} 

function logoutUser(){
    const profile = localStorage.profile;
    const token = localStorage.token;

    storage.remove('token');
    storage.remove('profile') ;
};