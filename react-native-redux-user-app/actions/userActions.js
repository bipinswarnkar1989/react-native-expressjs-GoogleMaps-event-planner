import { userApi, jsonHeaders } from '../utils/constants';
import Api from '../utils/api';
const apiObj = new Api();
import * as navActions from '../actions/navActions';


export const Login = (credentials) => {
    return (dispatch) => {
       dispatch(loginRequest());
       return apiObj.postRequest(`${userApi}/auth`, 'post', credentials, jsonHeaders)
                    .then((result) => {
                      if (result && result.success) {
                          apiObj.setToken(result.token);
                          dispatch(loginSuccess(result));
                          dispatch(navActions.navigate('Home'))
                          
                      }else{
                          dispatch(loginFailed(result));
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

export const loginFailed = (resp) => {
    return {
        type:'LOGIN_FAILED',
        resp
    }
}

export const validateUser =  (token,routeName) => {
    return (dispatch) => {
        let authHeaders = {'authorization':token};
       dispatch(validateUserRequest());
       return apiObj.getRequest(`${userApi}/validate`, 'get', (authHeaders))
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


