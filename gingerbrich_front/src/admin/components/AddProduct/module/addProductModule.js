import { axiosApi } from "../../../../Apis/axiosDefaultSetting";
const state = {
    brandName: "",
    size: "",
    color: "",
    stockLeft: "",
    discription: "",
    data: {}
}
const getters = {
    getdata: (state) => { state.data }
}
const actions = {
    getProductData({ commit }) {
        axiosApi.get("Products/getProductsData")
            .then(res => commit("getData", res.data))
            .catch(err => console.error(err))
    }
}
const mutations = {
    getData: (state, data) => { state.data = data }
}

export default {
    state,
    getters,
    mutations,
    actions
}
