import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/后台/login'
import registry from '@/components/后台/registry'
import index from '@/components/后台/index'
import usershow from '@/components/后台/usershow'
import update1 from '@/components/后台/update'
import selectcou from '@/components/后台/selectcou'
import Mannerge from '@/components/后台/Mannerge'
import cash from '@/components/后台/cash'
import cart from '@/components/后台/cart'
import blank from '@/components/后台/blank'
import foegetpwd from '@/components/后台/foegetpwd'
import ind from '@/components/index'
import CourseInfo from '@/components/CourseInfo'
import userselect from '@/components/后台/userselect'
import addCourse from '@/components/后台/addCourse'
import updateCourse from '@/components/后台/updateCourse'

import CoursePage from '@/components/CoursePage'
import HighCourse from '@/components/HighCourse'
import MiddleCourse from '@/components/MiddleCourse'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'ind',
      component: ind
    },
    {path:'/usershow',
      component:usershow
    },
    {
      path:'/update',
      component:update1
    },
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
      path:'/blank',
      component:blank
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
    {
      path:'/CoursePage',
      name:'CoursePage',
      component:CoursePage
    },
    {
      path:'/HighCourse',
      name:'HighCourse',
      component:HighCourse
    },
    {
      path:'/MiddleCourse',
      name:'MiddleCourse',
      component:MiddleCourse
    },
    {
      path:'/Mannerge',
      name:'Mannerge',
      component:Mannerge,
      children:[
        {path:'selectcou',name:'selectcou',component:selectcou},
        {path:'addCourse',name:'addCourse',component:addCourse},
        {path:'updateCourse/:id',name:'updateCourse',component:updateCourse},
        {path:'userselect',name:'userselect',component:userselect},
      ]
    },
    {
      path:"/cart",
      name:'cart',
      component:cart
    },
    {
      path:'/CourseInfo',
      name:'CourseInfo',
      component:CourseInfo
    },
    {
      path:"/cash",
      component:cash
    },
    {
      path:'/foegetpwd',
      component:foegetpwd
    },
  ]
})
