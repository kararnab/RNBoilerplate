import axios from 'axios'
import { clearAll } from '../redux/action/action1';
import { Constants } from '../util/constants'

var client =  axios.create({
  baseURL: Constants.getBaseUrl(),
})

client.interceptors.response.use(response => {
  return response;
}, error => {
 if (error.response.status === 401) {
  //place your reentry code
  //TODO:
  AppContainer.dispatch(clearAll())
 }
 return error;
});

export default client;