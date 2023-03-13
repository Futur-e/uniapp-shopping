//home模块的小仓库
const state = {
    orderList: [],
    address: {}
}
// mutations是唯一修改state的地方
const mutations = {
    getOrderList(state, orderList) {
        state.orderList = orderList
    },
    getOrderAdress(state, address) {
        console.log(address)
        state.address  = address.find(item => item.isDefault = true)
    },
    alterOrderAdress(state, address) {
        console.log(address)
        state.address = address
    }
}
// 用户处理派发action地方的，可以书写异步
const actions = {}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}
