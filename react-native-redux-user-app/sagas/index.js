import { all } from 'redux-saga/effects';

import watchAddEvent from './events/postEvent';
import watchLocationAutocomplete from './events/locationAutocomplete';

export default function* rootSaga(){
    yield all([
        watchAddEvent(),
        watchLocationAutocomplete(),
    ])
}