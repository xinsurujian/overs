// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import vueresource from "vue-resource"

//import Home from './components/HelloFromVux'
//路由组件
import Index from './components/index'
import Home from './components/home'
import Dest from './components/dest'
import Enshrine from './components/enshrine'
import Me from './components/me'
import Order from './components/order'
//跳转组件
import Food from './components/food'
import Detail from './components/detail'
import Begin from './components/begin'
import Te from './components/te'
import Message from './components/message'
import regist from './components/regist'
import login from './components/login'
import share from './components/share'
import buy from './components/buy'
import Http from './components/http'
//登陆后跳转的组件
import indexs from './components/indexs'
import enshrine from './components/enshrine2'
import order from './components/order2'
//import map from './components/map'
Vue.use(VueRouter)
Vue.use(vueresource)






const routes = [
{
  path: '/index',
  component: Index,
  redirect:"/index/home",
  children:[
      {path:"dest",component:Dest},
      {path:"enshrine",component:Enshrine},
      {path:"me",component:Me},
      {path:"order",component:Order},
      {path:"home",component:Home}
      
  ]
},
{
  path: '/indexs',
  component: indexs,
  redirect:"/indexs/home",
  children:[
      {path:"dest",component:Dest},
      {path:"enshrine2",component:enshrine},
      {path:"me",component:Me},
      {path:"order2",component:order},
      {path:"home",component:Home}
  ]
},
{
 path:'/food/:id',
 component:Food
},
{
	path:'/detail/:id1/:id2',
	component:Detail
},
{
	path:'/',
	component:Begin
},
{
	path:'/te',
	component:Te
},
{
  path:'/message',
  component:Message
},
{
  path:'/login',
  component:login
},
{
  path:'/regist',
  component:regist
},
{
  path:'/share',
  component:share
},
{
  path:'/buy',
  component:buy
},
/*{
  path:'/map',
  component:map
},*/
{
  path:'/http',
  component:Http
}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
