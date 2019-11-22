import { FETCH_COMEDE } from './movie';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_COMEDE:
            return {
                ...state,
                movies: action.data
            }
        default:
            return state;
    }
}
