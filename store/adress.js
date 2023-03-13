//home模块的小仓库
const state = {
    siteList:[
        {
            id: 1,
            name: '游X',
            phone: '183****5523',
            site: '广东省深圳市宝安区 自由路66号',
            isDefault:true
        },
        {
            id: 2,
            name: '李XX',
            phone: '183****5555',
            site: '广东省深圳市宝安区 翻身路xx号',
            isDefault:false

        },
        {
            id: 3,
            name: '王YY',
            phone: '153****5555',
            site: '广东省深圳市宝安区 平安路13号',
            isDefault:false
        }
    ]
}
// mutations是唯一修改state的地方
const mutations = {
    addAddress(state,siteItem){
        if (siteItem.isDefault){
            state.siteList.forEach(item=>item.isDefault=false);
            state.siteList.push(siteItem)
        }else {
            state.siteList.push(siteItem)
        }
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
