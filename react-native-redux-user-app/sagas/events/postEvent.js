import { takeLatest, put, call, select } from 'redux-saga/effects';
import { eventApi, multipartHeaders } from "../../utils/constants.js";
import Api from "../../utils/api";
const apiObj = new Api();
import * as navActions from '../../actions/navActions';

const requestPost = async (event) => {
    let resp =  await apiObj.postFormData(`${eventApi}`, event, multipartHeaders);
    let json = await resp.json();
    return json;
}

 function *addEvent(action) {
    try {
       // let authHeaders = {'authorization':token};
        const response = yield call(requestPost, action.event);
        //alert(JSON.stringify(response));
        if (response.success) {
            yield put({
                type:'SUCCESS_ADD_EVENT',
                payload:response
            });
            
        }else if(response.message) {
            yield put({
                type:'FAILED_ADD_EVENT',
                payload:response.message
            })
        }
    } catch (error) {
        alert('error: '+ error.message);
    }
}

export default function *watchAddEvent(){
    yield takeLatest('ADD_EVENT', addEvent);
}