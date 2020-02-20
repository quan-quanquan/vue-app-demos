import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('test-directive', () => {
  console.log('execute test-directive')
})

new Vue({
  render: h => h(App),
}).$mount('#app')

