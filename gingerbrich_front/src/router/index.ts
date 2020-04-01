import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../components/Register/Register.component.vue";
import Login from "../components/Login/Login.component.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Register",
    component: Register
  },
  {
    path: "/",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
