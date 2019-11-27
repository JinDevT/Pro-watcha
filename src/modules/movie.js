import axios from 'axios';

// Action function
export const GET_ACTION = 'movie/GET_ACTION';
export const GET_COMEDE = 'movie/GET_COMEDE';
export const GET_ROMANCE = 'movie/GET_ROMANCE';
export const GET_ANIMATION = 'movie/GET_ANIMATION';
export const GET_HORROR = 'movie/GET_HORROR';

// Api infomation
const API_KEY = 'a158e2a9424bc69fec449dcaeb82aba8';
const API_URL = `https://api.themoviedb.org/3`;



// Action.
export const getActionData = (data) => {
    return {
        type: GET_ACTION,
        data
    }
};

export const getAction = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`)
        .then(response => {
            dispatch(getActionData(response.data))
        })
        .catch(error => {
            console.log('error');
            throw(error);
        })
    }
};

// Comedy
export const getComedyData = (data) => {
    return {
        type: GET_COMEDE,
        data
    }
};

export const getComedy = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`)
        .then(response => {
            dispatch(getComedyData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
};

// Romance
export const getRomanceData = (data) => {
    return {
        type: GET_ROMANCE,
        data
    }
};

export const getRomance = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`)
        .then(response => {
            dispatch(getRomanceData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
};

// Animation
export const getAnimationData = (data) => {
    return {
        type: GET_ANIMATION,
        data
    }
};

export const getAnimation = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`)
        .then(response => {
            dispatch(getAnimationData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
};

// Horror

export const getHorrorData = (data) => {
    return {
        type: GET_HORROR,
        data
    }
};

export const getHorror = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`)
        .then(response => {
            dispatch(getHorrorData(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
}




