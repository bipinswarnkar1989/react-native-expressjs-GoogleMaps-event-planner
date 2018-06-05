import { all } from 'redux-saga/effects';

import watchAddEvent from './events/postEvent';
import watchLocationAutocomplete from './events/locationAutocomplete';
import watchGetPlaceDetails from './events/getSelectedPlaceDetails';

export default function* rootSaga(){
    yield all([
        watchAddEvent(),
        watchLocationAutocomplete(),
        watchGetPlaceDetails(),
    ])
}