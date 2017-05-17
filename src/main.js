// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
//const routes=[{path:'/page',component:page}]
/*const router = new router({
	routes
})*/
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

