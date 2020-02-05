import {RSAA} from "redux-api-middleware";

export function requestVerify(id) {

    return {
        [RSAA]: {
            endpoint: "/verify",
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            }),
            types: ["VERIFY_REQUEST", "VERIFY_SUCCESS", "VERIFY_FAILURE"]
        }
    }
}