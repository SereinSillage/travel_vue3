import Vuex from "vuex";

export default Vuex.createStore({
    state: {
        city: localStorage.city || "上海",
    },
    mutations: {
        changeCity(state, city) {
            state.city = city;
            localStorage.city = city;
        },
    },
    // actions: {
    //     changeCity(context, city) {
    //         console.log(city);
    //         context.commit("changeCity", city);
    //     },
    // },
    // 可以包含异步操作
    // context 是一个与 store 实例具有相同方法和属性的 context 对象
});