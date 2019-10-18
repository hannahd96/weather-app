import Vue from 'vue';
// import Bootstrap CSS library
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import round from 'vue-round-filter';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  filters: {
    round,
  },
  render: h => h(App),
}).$mount('#app');
