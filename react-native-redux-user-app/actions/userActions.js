import { userApi, jsonHeaders } from '../utils/constants';
import Api from '../utils/api';
const apiObj = new Api();
import * as navActions from '../actions/navActions';


export const Login = (credentials) => {
    return (dispatch) => {
       dispatch(loginRequest());
       return apiObj.postRequest(`${userApi}/auth`, credentials, jsonHeaders)
                    .then((result) => {
                      if (result && result.success) {
                          apiObj.setToken(result.token);
                          dispatch(loginSuccess(result));
                          dispatch(navActions.navigate('Home'))
                          
                      }else if(result && result.message){
                          dispatch(loginFailed(result.message));
                      }
                    })
    }
}

export const loginRequest = () => {
    return {
        type:'LOGIN_REQUEST'
    }
}

export const loginSuccess =  (resp) => {
    return {
        type:'LOGIN_SUCCESS',
        resp
    }
}

export const loginFailed = (message) => {
    return {
        type:'LOGIN_FAILED',
        message
    }
}

export const validateUser =  (token,routeName) => {
    return (dispatch) => {
        let authHeaders = {'authorization':token};
       dispatch(validateUserRequest());
       return apiObj.getRequest(`${userApi}/validate`, (authHeaders))
                    .then((result) => {
                      if (result && result.success) {
                          dispatch(validateUserSuccess(result));
                          if (routeName === 'Login') {
                              dispatch(navActions.navigate('Home'));
                          }
                          
                      }else{
                          dispatch(validateUserFailed(result));
                          dispatch(navActions.navigate('Login'));
                      }
                    })
                    .catch(error => {
                        alert('Some error');
                    })
    }
}

export const validateUserRequest = () => {
    return {
        type:'VALIDATE_USER_REQUEST'
    }
}

export const validateUserSuccess = (resp) => {
    return {
        type:'VALIDATE_USER_SUCCESS',
        resp
    }
}

export const validateUserFailed = (resp) => {
    return {
        type:'VALIDATE_USER_FAILED',
        resp
    }
}

export const Register = (credentials) => {
    return (dispatch) => {
        dispatch(registerRequest());
        return apiObj.postRequest(`${userApi}/`, credentials, jsonHeaders)
                     .then(result => {
                         if (result && result.success) {
                            apiObj.setToken(result.token);
                            dispatch(registerSuccess(result));
                            dispatch(navActions.navigate('Home'));   
                         }else if(result && result.message){
                             dispatch(registerFailed(result.message));
                         }
                     })
    }
}

export const registerRequest = () => {
    return {
        type:'REGISTER_REQUEST'
    }
}

export const registerSuccess = (resp) => {
    return {
        type:'REGISTER_SUCCESS',
        resp
    }
}

export const registerFailed = (message) => {
    return {
        type:'REGISTER_FAILED',
        message
    }
}

export const logOut = () => {
    return {
        type:'LOGOUT'
    }
}


