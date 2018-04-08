import { AsyncStorage } from 'react-native';

export default class Api {
     postRequest = async (url, body, headers) => {
       try {
         let resp = await fetch(url, {
                method:'post',
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

    getRequest = async (url, headers) => {
        try {
          let resp = await fetch(url, {
                 method:'get',
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