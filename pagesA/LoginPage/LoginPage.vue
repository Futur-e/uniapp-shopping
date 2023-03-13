<template>
  <view class="wrap">
    <view class="top"></view>
    <view class="content">
      <view class="title">请登录</view>
      <input class="u-border-bottom" type="number" v-model="userPhone" placeholder="请输入手机号"/>
      <view  v-if="!isPwd" class="code-box">
        <input class="u-border-bottom" type="number" v-model="code" placeholder="请输入验证码"/>
        <text style="color: #007AFF" v-if="!sendcode" @click="sendCode">发送</text>
        <text v-else> <text style="color: #007AFF" >{{second}}</text>s后可重发</text>
      </view>
      <input v-else class="u-border-bottom" type="number" v-model="userPwd" placeholder="请输入密码"/>
      <button @tap="codeSubmit" :style="[inputStyle]" class="getCaptcha" v-if="!isPwd">注册/登录</button>
      <button @tap="pwdSubmit" :style="[inputStyle]" class="getCaptcha" v-else>登录</button>
      <view class="alternative">
        <view class="password" @click="changePwd" v-if="!isPwd">密码登录</view>
        <view class="password" @click="changePwd" v-else>验证码登录</view>
        <view class="issue">遇到问题</view>
      </view>
    </view>
    <view class="buttom">
      <view class="loginType">
        <view class="wechat item">
          <view class="icon">
            <u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon>
          </view>
          微信
        </view>
        <view class="QQ item">
          <view class="icon">
            <u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon>
          </view>
          QQ
        </view>
      </view>
      <view class="hint">
        登录代表同意
        <text class="link">美团点评用户协议、隐私政策，</text>
        并授权使用您的美团点评账号信息（如昵称、头像、收获地址）以便您统一管理
      </view>
    </view>
  </view>
</template>

<script>
import $http from "@/common/api/request";

export default {
  data() {
    return {
      userPhone: '',
      isPwd: false,
      userPwd: '',
      code:'',
      userCode:'',
      sendcode:false,
      second: 60,
    }
  },
  computed: {
    inputStyle() {
      let style = {};
      if (this.userPhone) {
        style.color = "#fff";
        style.backgroundColor = this.$u.color['warning'];
      }
      return style;
    }
  },
  methods: {
    codeSubmit() {
      // 判断验证码是否正确
if (this.code === this.userCode && this.userCode !==''){
  uni.navigateTo({
    url: "/pagesA/LoginCode/LoginCode"
  })
}else {
  uni.showToast({
    title:'验证码格式不正确',
    icon:'error'
  })
}
    },
    pwdSubmit() {
      $http.request({
        url: "/login",
        method: 'POST',
        data: {
          userPhone:this.userPhone,
          userPwd:this.userPwd
        }
      }).then((res)=>{
        uni.showToast({
          title:res.result.msg,
          icon:'error'
        })
        if (res.result.msg==='登录成功'){
          this.$store.commit("getUserData",res.result.userData)
          uni.navigateBack({
            delta:1
          })
        }
      }).catch((err)=>{
        uni.showToast({
          title:'请求失败',
          icon:'error'
        })
      })
    },
    changePwd() {
      this.isPwd = !this.isPwd
    },
    sendCode(){
      $http.request({
        url:'/login/code',
        method:"POST",
        data:{
          userPhone:this.userPhone,
        }
      }).then((res)=>{
        uni.showToast({
          title:res.result.msg,
          icon:'error'
        })
        if (res.result.msg ==='验证码已发送'){
          this.userCode =res.result.userCode
          this.sendcode = true
          this.startTiming()
        }
        console.log('验证码',res.result)
      }).catch((err)=>{
        uni.showToast({
          title:'请求失败',
          icon:'error'
        })
      })
    },
    startTiming(){
      let interval = setInterval(() => {
        this.second--;
        if (this.second <= 0) {
          this.show = true;
          clearInterval(interval);
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  font-size: 28rpx;

  .content {
    width: 600rpx;
    margin: 80rpx auto 0;

    .title {
      text-align: left;
      font-size: 60rpx;
      font-weight: 500;
      margin-bottom: 100rpx;
    }
    .code-box{
      display: flex;
      justify-content: space-between;
    }

    input {
      text-align: left;
      margin-bottom: 10rpx;
      padding-bottom: 6rpx;
    }

    .tips {
      color: #909399;
      margin-bottom: 60rpx;
      margin-top: 8rpx;
    }

    .getCaptcha {
      background-color: rgb(253, 243, 208);
      color: #909399;
      border: none;
      font-size: 30rpx;
      padding: 12rpx 0;

      &::after {
        border: none;
      }
    }

    .alternative {
      color: #909399;
      display: flex;
      justify-content: space-between;
      margin-top: 30rpx;
    }
  }

  .buttom {
    .loginType {
      display: flex;
      padding: 350rpx 150rpx 150rpx 150rpx;
      justify-content: space-between;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #606266;
        font-size: 28rpx;
      }
    }

    .hint {
      padding: 20rpx 40rpx;
      font-size: 20rpx;
      color: #909399;

      .link {
        color: #ff9900;
      }
    }
  }
}
</style>
