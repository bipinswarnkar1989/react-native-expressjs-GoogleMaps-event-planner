import { eventApi, jsonHeaders } from "../utils/constants";
import Api from "../utils/api";
const apiObj = new Api();
import { call, put } from 'redux-saga/effects';

export const getEvents = (user,page,limit) => {
    return (dispatch) => {
        dispatch(requestGetEvents());
        return apiObj.getRequest(`${eventApi}/${page}/${limit}`,jsonHeaders).then(result => {
            if (result && result.success) {
                dispatch(successGetEvents(result));
            } else if(result.message){
               dispatch(failedGetEvents(result.message));
            }
        })
        .catch(e => {
            console.log(e);
            dispatch(failedGetEvents(e.message));
        })
    }
}

export const requestGetEvents = () => {
    return {
        type:'REQUEST_GET_EVENTS'
    }
}

export const successGetEvents = (result) => {
    return {
        type:'SUCCESS_GET_EVENTS',
        result
    }
}

export const failedGetEvents = (message) => {
    return {
        type:'FAILED_GET_EVENTS',
        message
    }
}

export const addEvent = (event) => {
    return {
        type:'ADD_EVENT',
        event
    }
}

export const setEventLocationOnMap = (payload) => {
    return {
        type:'SET_EVENT_LOCATION_ON_MAP',
        payload
    }
}

export const setPlacesPredictions = (input) => {
    return {
        type:'REQUEST_PLACES_AUTO_COMPLETE',
        input
    }
}
