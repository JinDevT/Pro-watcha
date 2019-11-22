import axios from 'axios';

// 액션함수
export const FETCH_ACTION = 'movie/FETCH_ACTION';
export const FETCH_COMEDE = 'movie/FETCH_COMEDE';

const API_KEY = 'a158e2a9424bc69fec449dcaeb82aba8';
const API_URL = `https://api.themoviedb.org/3`;



//액션함수.
export const fetchActionData = (data) => {
    return {
        type: FETCH_ACTION,
        data
    }
};

export const fetchAction = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`)
        .then(response => {
            dispatch(fetchActionData(response.data))
        })
        .catch(error => {
            console.log('error');
            throw(error);
        })
    }
}

export const fetchComedyData = (data) => {
    return {
        type: FETCH_COMEDE,
        data
    }
}

export const fetchComedy = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`)
        .then(response => {
            dispatch(fetchComedyData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
}


//----------------------------------------------------------------

// 리듀서
// export default function(state = initialState, action) {
//     switch (action.type) {
//         case FETCH_ACTION:
//             return {
//                 ...state,
//                 movies: action.data
//             };
//         case FETCH_COMEDE:
//             return {
//                 ...state,
//                 movies: action.data
//             }
//         default:
//             return state;
//     }
// }

