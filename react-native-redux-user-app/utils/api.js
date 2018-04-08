import { AsyncStorage } from 'react-native';

export default class Api {
     postRequest = async (url, method, body, headers) => {
       try {
         let resp = await fetch(url, {
                method:method,
                body:JSON.stringify(body),
                headers:headers
            });
        let json = await resp.json();
        return json;
       } catch (error) {
           alert(error.message);
           console.log(error);
       }
    }

    getRequest = async (url, method, headers) => {
        try {
          let resp = await fetch(url, {
                 method:method,
                 headers:headers
             });
         let json = await resp.json();
         return json;
        } catch (error) {
            alert(error.message);
            console.log(error);
        }
     }

    setToken = async (token) => {
       await AsyncStorage.setItem('userToken', token);
    }

    getToken = async () => {
        const token =  await AsyncStorage.getItem("userToken");
        return token;
    }

    removeToken = async () => {
        AsyncStorage.removeItem('userToken');
    }
}