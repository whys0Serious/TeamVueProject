import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/后台/login'
import registry from '@/components/后台/registry'
import index from '@/components/后台/index'
import usershow from '@/components/后台/usershow'
import update1 from '@/components/后台/update'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {path:'usershow',component:usershow},
        {path:'update',component:update1}
      ]

    },
    {
      path: '/login',
      name: 'login',
      component: login,

    },
    {
      path: '/registry',
      name: 'registry',
      component: registry
    },

  ]
})
