import axios from 'axios';

// 액션함수
const FETCH_ACTION = 'movie/FETCH_ACTION';

const API_KEY = 'a158e2a9424bc69fec449dcaeb82aba8';
const API_URL = `https://api.themoviedb.org/3`;

// 초기값


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
        .catch(e => {
            console.log('error');
            throw(e);

        })
    }
}

//
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

