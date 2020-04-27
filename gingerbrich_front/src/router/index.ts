import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../components/Register/Register.component.vue";
import Login from "../components/Login/Login.component.vue";
import Dashboard from "../admin/components/dashboard/dashboard.component.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/admin/registration",
    name: "Register",
    component: Register
  },
  {
    path: "/",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
