import { axiosApi } from "../../../Apis/axiosDefaultSetting";

const state = {
    name:""
}
const getters = {

}
const actions = {
    addCatelog({ commit }, catelog) {
        axiosApi.post("Categories", catelog)
            .then(res => commit("catelogName", res.data))
            .catch(err => console.log(err));
    }
}
const mutations = {
    catelogName: (state, catelog) => { state.name = catelog }
}

export default {
    state,
    getters,
    actions,
    mutations
}