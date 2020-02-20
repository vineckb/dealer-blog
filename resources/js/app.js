import Vue from 'vue';
import router from './routes';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './components/App';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

export default app;