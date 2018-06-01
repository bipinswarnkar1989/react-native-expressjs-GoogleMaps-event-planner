import { takeLatest, put, call, select } from 'redux-saga/effects';
const GOOGLE_PLACES_API_KEY = 'AIzaSyDhPHD3lGTDQe1mOwo7L-SD7dmpKsDPUsE';

const requestPlaces = async () => {
    const resp =  await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=${GOOGLE_PLACES_API_KEY}`);
    const json = await resp.json();
    return json;
}

function *getAutoComplete(action) {
    try {
        const response = yield call(requestPlaces, action.event);
        if (response) {
            yield put({
                type:'SET_PLACES_PREDICTIONS',
                payload:response
            });
        } else {
            yield put({
                type:'FAILED_PLACES_AUTO_COMPLETE',
                payload:{ message:'Network Error' }
            });
        }
    } catch (error) {
        yield put({
            type:'FAILED_PLACES_AUTO_COMPLETE',
            payload:{ message:error.message }
        });
    }
}

export default function *watchLocationAutocomplete(){
    yield takeLatest('REQUEST_PLACES_AUTO_COMPLETE', getAutoComplete)
}