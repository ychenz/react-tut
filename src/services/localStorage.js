export function setLocalStorage(key, value){
    localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
    return localStorage.getItem(key);
}

export function setSession(token, userName) {
    localStorage.setItem("user_token", token);
    localStorage.setItem("user_name", userName);
}

export function clearSession() {
    localStorage.clear();
}

export function isLoggedIn() {
    return localStorage.getItem("user_token") !== null;
}

export function deleteLocalStorage(key) {
    localStorage.removeItem(key);
}