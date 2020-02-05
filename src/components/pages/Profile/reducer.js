import {Map} from "immutable";

const initState = Map({
    loading: false,
    profileData: {}
});

function profileReducer(state = initState, action) {
    
    switch (action.type) {
        case "SET_FORM_FIELD":
            const {key, value} = action.payload;
            return state.update('profileData', obj => Map(obj).update(key, _ => value).toJS())
            
        case "PROFILE_SUCCESS":
            let response = action.payload;
            console.log(response);
            return state.set("loading", false).set("profileData", response);

        case "PROFILE_FAILURE":
            console.log(action.payload);
            return state.set("loading", false);

        case "PROFILE_REQUEST":
            return state.set("loading", true);

        default:
            return state;
    }
}

export default profileReducer;