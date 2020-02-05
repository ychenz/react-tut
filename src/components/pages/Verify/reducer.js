import { Map } from "immutable";

const initState = Map({
    verified: false,
    loading: false,
    email: "",
    errors: false
});

function verifyReducer(state = initState, action) {
    switch (action.type) {
        case "VERIFY_SUCCESS":
            let response = action.payload;
            return state.set("loading", false)
                .set("verified", response.verified)
                .set("email", response.email);

        case "VERIFY_FAILURE":
            console.log(action.payload);
            return state.set("errors", true);

        case "VERIFY_REQUEST":
            return state.set("loading", true);
        default:
            return state;
    }
}

export default verifyReducer;