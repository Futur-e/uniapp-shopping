//home模块的小仓库
const state = {
    checkedAll: false,
    cartList: [
        {
            checked: false,
            storename: '电竞专业户',
            shopList: [
                {
                    id: 1,
                    checked: false,
                    name: '蛇圣（Holy serpent） 动跑步降噪适用苹果小米通用 【黑色】充电5分钟听歌10小时智能数显',
                    imgUrl: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/7d894de737f7db5a4fa10b8e9e9453a.jpg',
                    pprice: 998,
                    num: 1
                },
                {
                    id: 2,
                    checked: false,
                    name: '蛇圣（Holy serpent） 动跑步降噪适用苹果小米通用 【黑色】充电5分钟听歌10小时智能数显',
                    imgUrl: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/7d894de737f7db5a4fa10b8e9e9453a.jpg',
                    pprice: 998,
                    num: 1
                }
            ]
        },
        {
            storename: '电竞专业户(2)',
            checked: false,
            shopList: [
                {
                    id: 1,
                    checked: false,
                    name: '蛇圣（Holy serpent） 动跑步降噪适用苹果小米通用 【黑色】充电5分钟听歌10小时智能数显',
                    imgUrl: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/7d894de737f7db5a4fa10b8e9e9453a.jpg',
                    pprice: 998,
                    num: 1
                },
                {
                    id: 2,
                    checked: false,
                    name: '蛇圣（Holy serpent） 动跑步降噪适用苹果小米通用 【黑色】充电5分钟听歌10小时智能数显',
                    imgUrl: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/7d894de737f7db5a4fa10b8e9e9453a.jpg',
                    pprice: 998,
                    num: 1
                },
                {
                    id: 3,
                    checked: false,
                    name: '蛇圣（Holy serpent） 动跑步降噪适用苹果小米通用 【黑色】充电5分钟听歌10小时智能数显',
                    imgUrl: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/7d894de737f7db5a4fa10b8e9e9453a.jpg',
                    pprice: 998,
                    num: 1
                }
            ]
        }
    ]
}
// mutations是唯一修改state的地方
const mutations = {
    changeCheck(state, index) {
        state.cartList[index].checked = !state.cartList[index].checked
    },
    // 全选某一店铺的商品
    CheckshopAll(state, index) {
        state.cartList[index].checked = !state.cartList[index].checked
        state.cartList[index].shopList.forEach(item => {
            item.checked = state.cartList[index].checked
        })
    },
    // 全选商品
    CheckAll(state, check) {
        state.checkedAll = check
        state.cartList.forEach(item => {
            item.checked = state.checkedAll
            item.shopList.forEach(list => {
                list.checked = state.checkedAll
            })
        })
    },
    // 删除商品
    deleteShop(state, cartList) {
        cartList.forEach(item => {
            item.shopList.length === 0 ? state.cartList.splice(state.cartList.indexOf(item), 1) : ''
        })
    },
    //添加商品
    addShop(state, cartItem) {
        let addName = false
        state.cartList.forEach(item => {
            addName=false
            item.storename === cartItem.storename ? item.shopList.push(cartItem.shopList[0]) : addName=true
        })
        if (addName){
            state.cartList.push(cartItem)
        }

        console.log(state.cartList)
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
