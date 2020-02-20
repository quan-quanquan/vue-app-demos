import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './App'
import BallAnimate from './BallAnimate'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  { path: '/ball-animate', 
    component: BallAnimate 
  }
]

const router = new VueRouter({routes})
export default router
