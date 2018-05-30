const initalState = {
    isLoading:false,
    events:null,
    errorMsg:null,
    successMsg:null,
    createEvent:{
        eventLocation:{
            latitude:null,
            longitude:null,
            latitudeDelta: 1,
            longitudeDelta: 1
        }
    }
}

const eventReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'REQUEST_GET_EVENTS':
           return {
               ...state,
               isLoading:true
           }

        case 'SUCCESS_GET_EVENTS':
          return {
              ...state,
              isLoading:false,
              events:action.result.events,
              successMsg:action.result.message
          }

        case 'FAILED_GET_EVENTS':
          return {
              ...state,
              isLoading:false,
              events:null,
              successMsg:null,
              errorMsg:action.message
          }
        case 'ADD_EVENT':
          return {
              ...state,
              isLoading:true
          }

        case 'FAILED_ADD_EVENT':
          return {
              ...state,
              isLoading:false,
              errorMsg:action.payload,
              successMsg:null,
          }
        case 'SUCCESS_ADD_EVENT':
           return {
               ...state,
               isLoading:false,
               successMsg:action.payload.message,
               newEvent:action.payload.event,
               errorMsg:null
           }
       case 'SET_EVENT_LOCATION_ON_MAP':
          return {
              ...state,
              createEvent:{
                eventLocation:{
                    latitude:action.payload.latitude,
                    longitude:action.payload.longitude,
                    latitudeDelta: 1,
                    longitudeDelta: 1
                },
                placesPredictions:null
            }
          }
        default:
            return state;
    }
}

export default eventReducer;