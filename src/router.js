import vue from 'vue';
import vueRouter from 'vue-router';
vue.use(vueRouter);

const List = resolve => {
  require.ensure(['./components/list.vue'], () => {
    resolve(require('./components/list.vue'))
  })
}


const Topic = resolve => {
  require.ensure(['./components/topic.vue'], () => {
    resolve(require('./components/topic.vue'))
  })
}

const User  = resolve => {
  require.ensure(['./components/user.vue'], () => {
    resolve(require('./components/user.vue'))
  })
}

export default new vueRouter({
  routes: [
    { path: '/list/:type', component: List },
    { path: '/topic/:id', component: Topic },
    { path: '/user/:loginname', component: User }
  ]
})