import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../template/welcome/welcome'
import Homepage from '../template/homegage/homepage'
import Login from '../template/login/login'
import Payment from '../template/payment/payment'
import ApplyStay from '../template/applyStay/applyStay'
import AddCost from '../template/addCost/addCost'
import BreakDown from '../template/breakDown/breakDown'
import BreakDown1 from '../template/breakDown1/breakDown1'
import AddCost1 from '../template/addCost1/addCost1'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/ApplyStay',
      name: 'ApplyStay',
      component: ApplyStay
    },
    {
      path: '/BreakDown',
      name: 'BreakDown',
      component: BreakDown
    },
    {
      path: '/BreakDown1',
      name: 'BreakDown1',
      component: BreakDown1
    },
    {
      path: '/AddCost',
      name: 'AddCost',
      component: AddCost
    },
    {
      path: '/AddCost1',
      name: 'AddCost1',
      component: AddCost1
    }
  ]
})
