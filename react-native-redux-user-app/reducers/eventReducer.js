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
                }
            },
            placesPredictions:null
          }

      case 'REQUEST_PLACES_AUTO_COMPLETE':
        return {
            ...state,
            isLoading:true,
            errorMsg:null,
            successMsg:null,
        }
    
      case 'FAILED_PLACES_AUTO_COMPLETE':
        return {
            ...state,
            isLoading:false,
            errorMsg:action.payload.message,
            successMsg:null,
        }

      case 'SET_PLACES_PREDICTIONS':
        return {
            ...state,
            createEvent:state.createEvent,
            placesPredictions:action.payload.predictions,
            isLoading:false,
            errorMsg:null,
            successMsg:null,
        }

     case 'REQUEST_GET_PLACE_DETAILS':
        return {
            ...state,
            isLoading:true,
            errorMsg:null,
            successMsg:null,
        }

     case 'SET_PLACE_DETAILS':
        return {
        ...state,
        isLoading:false,
        errorMsg:null,
        successMsg:'Place Details Fetched Successfully',
        createEvent:{
          eventLocation:{
              latitude:action.payload.result.geometry.location.lat,
              longitude:action.payload.result.geometry.location.lng,
              latitudeDelta: 1,
              longitudeDelta: 1
          }
      },
      placesPredictions:null
    }

    case 'FAILED_GET_PLACE_DETAILS':
        return {
            ...state,
            isLoading:false,
            errorMsg:action.payload.message,
            successMsg:null,
        }
        
        default:
            return state;
    }
}

export default eventReducer;