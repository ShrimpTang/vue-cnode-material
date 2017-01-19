import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import store from './store'
import router from './router'
import moment from 'moment'
import { timeAgo } from './utils'
moment.locale('zh_CN');
require('./assets/css/main.css');
require('./assets/css/prettify.css');
require('./assets/js/prettify.js');
Vue.use(VueMaterial);

Vue.filter("timeAgo", function (date) {
  return timeAgo(date)
});

Vue.filter("topicTab", function (tab) {
  //ask share job good
  if (tab === 'ask') {
    return '问答';
  }

  if (tab === 'share') {
    return '分享';
  }

  if (tab === 'job') {
    return '招聘';
  }

  if (tab === 'good') {
    return '精华';
  }

  return '暂无';

});


new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,

})
