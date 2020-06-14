import Vue from "vue";
import Vuex from "vuex";
import addBrandModule from "../admin/components/addBrand/addBrandModule.js";
import addCatalogueModule from "../admin/components/addCatalogue/addCatalogueModule";
import addProductModule from "../admin/components/AddProduct/module/addProductModule";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        addBrandModule,
        addCatalogueModule,
        addProductModule
    }
});
