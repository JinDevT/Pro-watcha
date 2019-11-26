import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import comedyReducer from './comedyReducer';
import romanceReducer from './romanceReducer';
import animationReducer from './animationReducer';
import horrorReducer from './horrorReducer';

// import { all } from 'redux-saga/effects';
// import auth, { authSaga } from './auth';
// import loading from './loading';

// const rootReducer = combineReducers({
//     auth,
//     loading,
// });

// export function* rootSaga() {
//     yield all([authSaga()]);
// }

const rootReducer = combineReducers({
    action: actionReducer,
    comedy: comedyReducer,
    romance: romanceReducer,
    animation: animationReducer,
    horror: horrorReducer

    
})

export default rootReducer;


