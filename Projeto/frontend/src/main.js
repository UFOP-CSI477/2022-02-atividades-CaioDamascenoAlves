import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
import router from './router'
import './assets/icons';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/nprogress/nprogress.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.debug = true;
Vue.config.silent = false;


Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
