import App from './App'

// #ifndef VUE3

import Vue from 'vue'
import uView from "@/uni_modules/uview-ui";
import store from "@/store";
Vue.use(uView);
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store

// 权限跳转
Vue.prototype.navigateTo = (options)=>{
    if (!store.state.userData.loginStatus){
        uni.showToast({
            title:'请登录',
            icon:'none'
        })
        return uni.navigateTo({
            url:"/pagesA/LoginPage/LoginPage"
        })
    }
    uni.navigateTo(options)
}
const app = new Vue({
    store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
