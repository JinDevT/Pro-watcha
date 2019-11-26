import axios from 'axios';

// 액션함수
export const FETCH_ACTION = 'movie/FETCH_ACTION';
export const FETCH_COMEDE = 'movie/FETCH_COMEDE';
export const FETCH_ROMANCE = 'movie/FETCH_ROMANCE';
export const FETCH_ANIMATION = 'movie/FETCH_ANIMATION'

const API_KEY = 'a158e2a9424bc69fec449dcaeb82aba8';
const API_URL = `https://api.themoviedb.org/3`;



// Action.
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

// Comedy
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

// Romance
export const fetchRomanceData = (data) => {
    return {
        type: FETCH_ROMANCE,
        data
    }
}

export const fetchRomance = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`)
        .then(response => {
            dispatch(fetchRomanceData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
}

// Animation
export const fetchAnimationData = (data) => {
    return {
        type: FETCH_ANIMATION,
        data
    }
}

export const fetchAnimation = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`)
        .then(response => {
            dispatch(fetchAnimationData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
}




