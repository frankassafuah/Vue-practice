import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import Routes from './routes'

export const bus = new Vue();


Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const router = new VueRouter ({
  routes: Routes,
  mode:'history'
})

Vue.filter('to-uppercase', function(value){
  return value.toUpperCase()
})

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
