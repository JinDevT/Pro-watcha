import axios from 'axios';

export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';

const API_KEY = 'a158e2a9424bc69fec449dcaeb82aba8';
const API_URL = `https://api.themoviedb.org/3`;

export const fetchActionData = (data) => {
    return {
        type: FETCH_ACTION_MOVIES,
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
            throw(e);
        })
    }
}