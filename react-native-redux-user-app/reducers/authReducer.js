const initialAuthState = { 
  isLoggedIn: false,
  user:{} ,
  isAuthenticating: false,
  error:null,
  successMsg:null
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { 
        ...state,
         isLoggedIn: false,
         isAuthenticating:true,
          };
    case 'LOGIN_SUCCESS':
      return {
         ...state,
          isLoggedIn: true,
          isAuthenticating:false,
         };

    case 'LOGIN_FAILED':
    return {
      ...state,
        isLoggedIn: false,
        isAuthenticating:false,
        error:action.message
      };

  case 'VALIDATE_USER_REQUEST':
    return {
      ...state,
      isAuthenticating:true,
    }

  case 'VALIDATE_USER_FAILED':
    return {
      ...state,
      isAuthenticating:false,
      user:{},
      isLoggedIn:false,
      error:action.resp.message
    }

  case 'VALIDATE_USER_SUCCESS':
  return {
      ...state,
       user:action.resp.user,
       isAuthenticating:false
      };

  case 'REGISTER_REQUEST':
    return { 
      ...state,
        isLoggedIn: false,
        isAuthenticating:true,
        };
  case 'REGISTER_SUCCESS':
    return {
        ...state,
        isLoggedIn: true,
        isAuthenticating:false,
        };

  case 'REGISTER_FAILED':
  return {
    ...state,
      isLoggedIn: false,
      isAuthenticating:false,
      error:action.message
    };


    default:
      return state;
  }
}

export default authReducer;