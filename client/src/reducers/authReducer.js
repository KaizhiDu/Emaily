import {FETCH_USER} from "../actions/type";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            // if action.payload is '', it will return false
            return action.payload || false;
        default:
            return state;
    }
}