//home模块的小仓库
const state = {
    //登陆状态
    loginStatus: false,
    //token状态
    token: null,
    //用户信息
    userData: {
        userName: '请登录',
        imgUrl: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/63fab9f072f8b7ed223cdadddcc194d.png'
    }
}
// mutations是唯一修改state的地方
const mutations = {
    // 小程序打开就执行该操作读取本地存储（localStorage）
    initUser(state) {
        let userInfo = uni.getStorageSync('userData')
        console.log('持久化',userInfo)
         userInfo = JSON.parse(userInfo);
        if (userInfo) {
            state.userData = userInfo;
            state.loginStatus = true;
            state.token = userInfo.token
        }
    },
    getUserData(state, userData) {

        state.userData = userData;
        state.loginStatus = true;
        state.token = userData.token
        //持久化存储
        uni.setStorageSync('userData', JSON.stringify(userData))
    },
    loginOut(state) {
        state.loginStatus = false;
        state.userData = {
            userName: '请登录',
            imgUrl: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/63fab9f072f8b7ed223cdadddcc194d.png'
        };
        state.token = null;
        uni.removeStorageSync('userData')
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
