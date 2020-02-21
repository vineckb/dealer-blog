import Vue from 'vue';
import router from './routes';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './components/App';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

export default app;