import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../components/Register/Register.component.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Register",
    component: Register
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
