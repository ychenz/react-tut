import { Map } from "immutable";

const initState = Map({
    email: "",
    password: "",
    name: "",
    completed: false,
    errors: false
});

function signupReducer(state = initState, action) {
    switch (action.type) {
        case "SET_SIGNUP_NAME":
            return state.set("name", action.value);
        case "SET_SIGNUP_EMAIL":
            return state.set("email", action.value);
        case "SET_SIGNUP_PASSWORD":
            return state.set("password", action.value);

        case "SIGNUP_SUCCESS":
            return state.set("loading", false).set("completed", true);

        case "SIGNUP_FAILURE":
            console.log(action.payload);
            state = state.set("errors", true);
            state = state.set("loading", false);
            state = state.set("completed", false);
            return state;

        case "SIGNUP_REQUEST":
            return state.set("loading", true);
        default:
            return state;
    }
}

export default signupReducer;