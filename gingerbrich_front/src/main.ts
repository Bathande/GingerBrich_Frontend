import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import vuetify from "./plugins/vuetify";
import "./plugins/fontAwesomeIcon"
import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
Vue.use(Vuelidate);
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
