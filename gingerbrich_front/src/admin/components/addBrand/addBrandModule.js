import { addBrandApi } from "../constants/Apis";
import router from "../../../router/index";
const state = {
    brand: {
        name: "",
        est: "",
        slogan: ""
    }
}
const getters = {
    brand: (state) => state.brand,
}

const actions = {
    addbrand({ commit }, brand) {
        commit("brand", addBrandApi(brand));
        console.log("we are here");
        router.push("/dashboard");
    }
}
const mutations = {
    brand: (state, data) => { return (state.brand = data) },

}

export default {
    state,
    getters,
    mutations,
    actions
}
