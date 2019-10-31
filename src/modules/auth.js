import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auto/CHANGE_FIELD';
const INITIALIZE_FORM = 'auto/INITIALIZE_FORM';

export const changeField =  createAction(
    CHANGE_FIELD,
    ({ form, key, value }) =>({
        form, //signin, signup
        key, //email, username, passwrod
        value, //실제 바꾸려는값.
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form); //signup
// signin


const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    }
};

const auth = handleActions(
    {
        [CHANGE_FIELD] : (state, { payload: { form, key, value }}) => 
            produce(state, draft => {
                draft[form][key] = value; // state.sign_up.username 을 바꾼다.
            }),
        [INITIALIZE_FORM]: (state, { payload: form}) =>({
            ...state,
            [form]: initialState[form],
        }),
    },
    initialState,
);

export default auth;