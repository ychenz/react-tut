import {RSAA} from "redux-api-middleware";

export function requestRegister(name, email, password) {

    return {
        [RSAA]: {
            endpoint: "/register",
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            }),
            types: ["SIGNUP_REQUEST", "SIGNUP_SUCCESS", "SIGNUP_FAILURE"]
        }
    }
}