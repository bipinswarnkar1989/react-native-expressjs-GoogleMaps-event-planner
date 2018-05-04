const initalState = {
    isLoading:false,
    events:null,
    errorMsg:null,
    successMsg:null
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
    
        default:
            return state;
    }
}

export default eventReducer;