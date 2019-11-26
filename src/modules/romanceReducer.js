import { FETCH_ROMANCE } from './movie';



export default function(state = [], action) {
    switch (action.type) {
        case FETCH_ROMANCE:
            return {
                ...state,
                movies: action.data
            }
        default:
            return state;
    }
}
