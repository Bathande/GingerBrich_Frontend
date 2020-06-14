import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../components/Register/Register.component.vue";
import Login from "../components/Login/Login.component.vue";
import Dashboard from "../admin/components/dashboard/dashboard.component.vue";
import addBrand from "../admin/components/addBrand/addBrand.component.vue";
import addCatalogue from "../admin/components/addCatalogue/addCatalogue.component.vue";
import AddProduct from "../admin/components/AddProduct/AddProduct.component.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/admin/registration",
    name: "Register",
    component: Register
  },
  {
    path: "/register",
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
  },
  {
    path: "/addBrand",
    name: "addBrand",
    component: addBrand
  },
  {
    path: "/addCatalogue",
    name: "addCatalogue",
    component: addCatalogue
  },
  {
    path: "/addProduct",
    name: "addProduct",
    component: AddProduct
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
