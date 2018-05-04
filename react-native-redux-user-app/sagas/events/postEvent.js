import { takeLatest, put, call, select } from 'redux-saga/effects';
import { eventApi, jsonHeaders } from "../../utils/constants.js";
import Api from "../../utils/api";
const apiObj = new Api();

const requestPost = async (event) => {
    return await apiObj.postFormData(`${eventApi}`, event, '');
}

 function *addEvent(action) {
    try {
       // let authHeaders = {'authorization':token};
        const response = yield call(requestPost, action.event);
        if (response.success) {
            yield put({
                type:'SUCCESS_ADD_EVENT',
                payload:response
            })
        }else if(response.message) {
            yield put({
                type:'FAILED_ADD_EVENT',
                payload:response.message
            })
        }
    } catch (error) {
        alert(error.message);
    }
}

export default function *watchAddEvent(){
    yield takeLatest('ADD_EVENT', addEvent);
}