export class Api {
     sendRequest = async (url, method, body, headers) => {
       const resp = await fetch(url, {
           method:method,
           body:body,
           headers:headers
       });
       const json = await resp.json();
       return json;
    }
}