import {RSAA} from "redux-api-middleware";

export function requestProfile() {

    return {
        [RSAA]: {
            endpoint: "/profile",
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.user_token,
                'Content-Type': 'application/json'
            },
            types: ["PROFILE_REQUEST", "PROFILE_SUCCESS", "PROFILE_FAILURE"]
        }
    }

}

export function updateFormField(key, value) {

    return {
        type: 'SET_FORM_FIELD',
        payload: {
            key,
            value
        }
    }

}