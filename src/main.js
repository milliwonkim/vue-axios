import Vue from "vue"
import App from "./App.vue"
import axios from "axios"

import router from "./router"
import store from "./store"

axios.defaults.baseURL = "https://vuejs-using-axios-49da4.firebaseio.com/"
axios.defaults.headers.common["Authorization"] = "kiwon"
axios.defaults.headers.get["Accepts"] = "application/json"

/**'intercepters' are functions you can define
 * which should get executed on every request that leaves the app
 * or every response that reaches it
 */
const reqIntercepter = axios.interceptors.request.use(config => {
  console.log('config: ', config);
  return config;
})

const resIntercepter = axios.interceptors.response.use(res => {
  console.log('res: ', res);
  return res;
})

/**eject use for removing reqIntercepter, resIntercepter on console */
axios.interceptors.request.eject(reqIntercepter)
axios.interceptors.request.eject(resIntercepter)

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
})