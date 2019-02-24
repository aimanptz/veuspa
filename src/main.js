import './styles/style.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

//icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome);

Vue.component('font-awesome-icon', FontAwesomeIcon);

//vuelidate
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
