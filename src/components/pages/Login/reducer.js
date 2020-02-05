import {Map} from "immutable";
import {setSession} from "../../../services/localStorage";

const initState = Map({
    email: "",
    password: "",
    loading: false,
});

function loginReducer(state = initState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            let response = action.payload;
            const { token, user } = response;
            console.log(response);
            setSession(token, user.name);
            return state.set("loading", false).set("user", user);

        case "LOGIN_FAILURE":
            console.log(action.payload);
            return state.set("loading", false);

        case "LOGIN_REQUEST":
            return state.set("loading", true);

        case "SET_LOGIN_EMAIL":
            return state.set("email", action.value);

        case "SET_LOGIN_PASSWORD":
            return state.set("password", action.value);
        default:
            return state;
    }
}

export default loginReducer;