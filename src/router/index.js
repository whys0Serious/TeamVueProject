import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/后台/login'
import registry from '@/components/后台/registry'
import index from '@/components/后台/index'
import usershow from '@/components/后台/usershow'
import updateuser from '@/components/后台/updateuser'
import selectcou from '@/components/后台/selectcou'
import Mannerge from '@/components/后台/Mannerge'
import cart from '@/components/后台/cart'
import data from '@/components/后台/data'
import teachershow from '@/components/后台/教师管理/teachershow'

import foegetpwd from '@/components/后台/foegetpwd'
import ind from '@/components/index'
import CourseInfo from '@/components/CourseInfo'
import userselect from '@/components/后台/userselect'
import addCourse from '@/components/后台/addCourse'
import ApplyText from '@/components/后台/ApplyText'
import updateCourse from '@/components/后台/updateCourse'
import adminadd from '@/components/后台/管理员/adminadd'
import adminshow from '@/components/后台/管理员/adminshow'
import adminupdate from '@/components/后台/管理员/adminupdate'

import CoursePage from '@/components/CoursePage'
import HighCourse from '@/components/HighCourse'
import MiddleCourse from '@/components/MiddleCourse'
import dingdan from '@/components/dingdan'

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
    {
      path: '/updateuser',
      name: 'updateuser',
      component: updateuser
    },
    {path:'/usershow',
      component:usershow
    },
    {
      path: '/index',
      name: 'index',
      component: index,

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
        {path:'data',name:'data',component:data},
        {
          path: 'teachershow',
          name: 'teachershow',
          component: teachershow
        },
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
      path:'/foegetpwd',
      component:foegetpwd
    },
    {
      path:'/ApplyText',
      component:ApplyText,
      name:'ApplyText'
    },
    {
      path:'/adminshow',
      component:adminshow
    },
    {
      path:'/adminadd',
      component:adminadd
    },
    {
      path:'/adminupdate',
      component:adminupdate
    },
    {
      path:"/dingdan",
      name:'dingdan',
      component:dingdan,
    },
  ]
})
