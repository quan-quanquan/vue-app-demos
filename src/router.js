import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './App'
import BallAnimate from './BallAnimate'
import Decorator from './Decorator'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  { path: '/ball-animate', 
    component: BallAnimate 
  },
  {
    path: '/decorator',
    component: Decorator
  }
]

const router = new VueRouter({routes})
export default router
