import * as listeners from "./handlers/index.mjs";

export default function router() {

}

const path = location.pathname;

switch (path) {
    case '/profile/login/index.html':
        listeners.loginFormListener()
        break;
    case '/profile/register/index.html':
        listeners.registerFormListener()
        break;
    case '/profile/index.html':
        listeners.createPostListener()
        break;
    case '/post/edit/index.html':
        listeners.updatePostListener()
        listeners.removePostListener()
        break;
    case '/feed/index.html':
        listeners.createPostListener();
    case '/profile/edit/index.html':
        listeners.updateProfileListener()
        break;
}




