import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import adress from "@/store/adress";
import order from "@/store/order";
import userData from "@/store/userData";
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        cart,
        adress,
        order,
        userData
    }
})
