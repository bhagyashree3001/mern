export default function productsReducer(state =[], action){
    const { type, payload } = action;
    switch(type){
        case "ADD":
            return payload.name;
        default:
            return state;
    }
    return state;
};