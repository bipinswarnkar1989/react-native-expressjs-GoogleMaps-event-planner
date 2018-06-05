import { takeLatest, put, call } from 'redux-saga/effects';
import { GOOGLE_PLACES_API_KEY } from '../../utils/constants';

const requestPlaceDetails = async (placeid) => {
    const resp = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${GOOGLE_PLACES_API_KEY}`);
    const json = await resp.json();
    return json;
}

function *getPlaceDetails(action) {
    try {
        const response = yield call(requestPlaceDetails, action.placeid);
        if (response) {
            yield put({
                type:'SET_PLACE_DETAILS',
                payload:response
            });
        } else{
            yield put({
                type:'FAILED_GET_PLACE_DETAILS',
                payload:{ message:'Network Error' }
            });
        }
    } catch (error) {
        yield put({
            type:'FAILED_GET_PLACE_DETAILS',
            payload:{ message:'Network Error' }
        });
    }
}

export default function *watchGetPlaceDetails(){
   yield takeLatest('REQUEST_GET_PLACE_DETAILS', getPlaceDetails);
}