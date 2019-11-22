import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import comedyReducer from './comedyReducer';

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
    comedy: comedyReducer
    
})

export default rootReducer;


