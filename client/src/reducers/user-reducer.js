import {UPDATE_USER} from '../actions/user-actions';
export default function userReducer(state = "", action){
    const { type, payload } = action;
    switch(type){
        case "UPDATE":
            return payload;
        default:
            return state;
    }
    return state;
};