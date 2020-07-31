import {ADD_FAVORITE, ADD_LISTENED, DEL_FAVORITE, DEL_LISTENED} from "../actions";

const listOperator = (state = [], action) => {
    switch (action.type) {
        case ADD_LISTENED:
            return state.items.push(action.item);
        case DEL_LISTENED:
            return state.items.filter(item => item.title !== action.item.title);
        case ADD_FAVORITE:
            return state.items.push(action.item);
        case DEL_FAVORITE:
            return state.items.filter(item => item.title !== action.item.title);
        default:
            return state;
    }
}

export default listOperator;
