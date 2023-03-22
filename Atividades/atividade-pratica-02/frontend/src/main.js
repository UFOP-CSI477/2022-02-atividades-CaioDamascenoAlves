import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import './assets/icons';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/nprogress/nprogress.css';
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
