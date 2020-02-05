import {RSAA} from "redux-api-middleware";

export function requestLogin(email, password) {

    return {
        [RSAA]: {
            endpoint: "/login",
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            }),
            types: ["LOGIN_REQUEST", "LOGIN_SUCCESS", "LOGIN_FAILURE"]
        }
    }
}