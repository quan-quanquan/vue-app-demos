import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.directive('test-directive', () => {
  console.log('execute test-directive')
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

