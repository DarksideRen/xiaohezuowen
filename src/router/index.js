import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index2 from '../views/Index2.vue'
// import H5 from '../views/H5.vue'
// import ClassList from '../views/ClassList.vue'
// import ClassDetail from '../views/ClassDetail'
// import Teacher from '../views/Teacher'
// import Customer from '../views/Customer'
// import Admin from '../views/Admin'
// import Buy from '../views/Buy'
// import TeacherList from '../views/TeacherList'
// import ClassOrder from '../views/ClassOrder'
// import ShopCar from '../views/ShopCar'

// import Discovery from '../views/Discovery.vue'
// import Course from '../views/Course.vue'
// import Schedule from '../views/Schedule.vue'
// import Article from '../views/Article.vue'
// import Detail from '../views/Detail.vue'

// import Coinmall from '../views/Coinmall.vue'
// import Recharge from '../views/Recharge.vue'
// import Pdetails from '../views/Pdetails.vue'
// import Order from '../views/Order.vue'
// import Editaddress from '../views/Editaddress.vue'

import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'
import Index from '../views/Index.vue'
// import Update from '../views/Update.vue'
// import UpdateInfo from '../views/UpdateInfo.vue'
// import UpdateRealName from '../views/UpdateRealName.vue'
// import Emptys from '../views/Emptys.vue'
// import My from '../views/My.vue'

import { NavBar } from 'vant';
import { Grid, GridItem } from 'vant';
import { Toast } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Empty } from 'vant';
import { NoticeBar } from 'vant';
import { Cascader } from 'vant';
import { ActionSheet } from 'vant';
import { Uploader } from 'vant';

Vue.use(Uploader);
Vue.use(ActionSheet);
Vue.use(Cascader);
Vue.use(NoticeBar);
Vue.use(Empty);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Toast);
Vue.use(Grid);
Vue.use(GridItem);

Vue.use(NavBar);
Vue.use(VueRouter)

const routes = [

  //Index为首页
  //about暂时保留为懒加载参考

  {
    path: '/index2',
    name: 'Index2',
    component:() => import(/* webpackChunkName: "about" */ '../views/Index2.vue'),

  },
  {
    path: '/h5',
    name: 'H5',
    component:() => import(/* webpackChunkName: "about" */ '../views/H5.vue'),
  },
  {
    path : '/classlist',
    name : 'ClassList',
    component:() => import(/* webpackChunkName: "about" */ '../views/ClassList.vue'),
  },
  {
    path : '/teacher/:tid',
    name : 'Teacher',
    component:() => import(/* webpackChunkName: "about" */ '../views/Teacher.vue'),
    props:true
  },
  {
    path : '/classdetail/:cid',
    name : 'ClassDetail',
    component:() => import(/* webpackChunkName: "about" */ '../views/ClassDetail.vue'),
    props : true
  },
  {
    path : '/customer',
    name : 'Customer',
    component:() => import(/* webpackChunkName: "about" */ '../views/Customer.vue'),

  },
  {
    path : '/admin',
    name : 'Admin',
    component:() => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),

  },
  {
    path : '/buy/:cid',
    name : 'Buy',
    component:() => import(/* webpackChunkName: "about" */ '../views/Buy.vue'),
    props : true
  },
  {
    path : '/teacherlist',
    name : '/TeacherList',
    component:() => import(/* webpackChunkName: "about" */ '../views/TeacherList.vue')

  },
  {
    path : '/classorder',
    name : '/ClassOrder',
    component:() => import(/* webpackChunkName: "about" */ '../views/ClassOrder.vue')
  },
  {
    path : '/shopcar',
    name : '/ShopCar',
    component:() => import(/* webpackChunkName: "about" */ '../views/ShopCar.vue')
  },
  //fz
  {
    path: '/discovery',
    name: 'Discovery',
    component:() => import(/* webpackChunkName: "about" */ '../views/Discovery.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component:() => import(/* webpackChunkName: "about" */ '../views/Course.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component:() => import(/* webpackChunkName: "about" */ '../views/Schedule.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component:() => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component:() => import(/* webpackChunkName: "about" */ '../views/Detail.vue')

  },
  //ryy
  {
    path: '/coinmall',
    name: 'Coinmall',
    component:() => import(/* webpackChunkName: "about" */ '../views/Coinmall.vue')
  },
  {
    path: '/editaddress',
    name: 'Editaddress',
    component:() => import(/* webpackChunkName: "about" */ '../views/Editaddress.vue')
  },
  {
    path: '/pdetails',
    name: 'Pdetails',
    component:() => import(/* webpackChunkName: "about" */ '../views/Pdetails.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component:() => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/recharge',
    name: 'Recharge',
    component:() => import(/* webpackChunkName: "about" */ '../views/Recharge.vue')
  },
  //dyy
  {
    path : '/',
    name : 'Index',
    component : Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component:() => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/my',
    name: 'My',
    component:() => import(/* webpackChunkName: "about" */ '../views/My.vue')
},
{
    path: '/update',
    name: 'Update',
    component:() => import(/* webpackChunkName: "about" */ '../views/Update.vue')
},
{
  path: '/updaterealname',
  name: 'UpdateRealName',
  component:() => import(/* webpackChunkName: "about" */ '../views/UpdateRealName.vue')
},
{
  path: '/emptys',
  name: 'Emptys',
  component:() => import(/* webpackChunkName: "about" */ '../views/Emptys.vue')

},
{
  path: '/updateinfo',
  name: 'UpdateInfo',
  component: () => import(/* webpackChunkName: "about" */ '../views/UpdateInfo.vue')
},
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

]

const router = new VueRouter({
  routes
})

export default router
