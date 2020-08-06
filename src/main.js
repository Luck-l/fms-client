import Vue from 'vue'
import App from './App.vue'
import axios from "./http"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import router from './router'
import store from './store'

Vue.config.productionTip = false
// Vue.config.productionTip = process.env.NODE_ENV==='production'
Vue.use(ElementUI)

// //设置axios为form-data
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = [function (data) {
//   let ret = ''
//   for (let it in data) {
//     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//   }
//   return ret
// }]
// axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
