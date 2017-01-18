import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import store from './store'
import router from './router'
import moment from 'moment'
moment.locale('zh_CN');
require('./assets/css/main.css')
Vue.use(VueMaterial);

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
