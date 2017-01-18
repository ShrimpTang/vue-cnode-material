import vue from 'vue';
import vueRouter from 'vue-router';
vue.use(vueRouter);
//const List = resolve => require(['./components/list.vue'], resolve)
//import Li from './components/list.vue'

const List = resolve => {
  require.ensure(['./components/list.vue'], () => {
    resolve(require('./components/list.vue'))
  })
}

export default new vueRouter({
    routes: [
        { path: '/list/:type', component:  List }
    ]
})