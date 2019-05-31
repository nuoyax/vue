import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "@/views/Login";
import home from "@/views/Home";
import loading from "@/views/TestUnit/TableTest";
import test from "@/views/TestUnit/test";
import test2 from "@/views/TestUnit/test2";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:Login

    },
    {
      path: '/Login',
      name:'Login',
      component:Login

    },
    {
      path: '/home',
      name:'home',
      component:home

    },
    {
      path: '/loading',
      name:'loading',
      component:loading

    },
    {
      path: '/test',
      name:'test',
      component:test

    },
    {
      path: '/test2',
      name:'test2',
      component:test2

    }
  ]
})
