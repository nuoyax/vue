import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "@/views/Login";
import loading from "@/views/TestUnit/TableTest";
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
      path: '/loading',
      name:'loading',
      component:loading

    }
  ]
})
