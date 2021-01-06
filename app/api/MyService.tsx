import axios from 'axios'
import { clearAll } from '../redux/action/action1';
import { Constants } from '../util/constants';
import { store } from "../App";

var client =  axios.create({
  baseURL: Constants.getBaseUrl(),
})

const BaseHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

//Setting JWT for next calls
export const setClientToken = token => {
  client.interceptors.request.use(function(config) {
    // config.headers.Authorization = `${token}`;
    config.headers = {...BaseHeaders, ...{ Authorization: token }}
    return config;
  });
};

client.interceptors.response.use(response => {
  return response;
}, error => {
 if (error.response.status === 401) {
  store.dispatch(clearAll())
 }
 return error;
});

export default client;
