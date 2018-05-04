import { all } from 'redux-saga/effects';

import watchAddEvent from './events/postEvent';

export default function* rootSaga(){
    yield all([
        watchAddEvent(),
    ])
}