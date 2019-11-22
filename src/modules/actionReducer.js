import { FETCH_ACTION } from './movie';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_ACTION:
            return {
                ...state,
                movies: action.data
            };
        default:
            return state;
    }
}