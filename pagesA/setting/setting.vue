<template>
  <view class="container">
    <view class="list">
      <view class="title">
        <text>账号设置</text>
      </view>
      <view class="list-item" >
        <image src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/1.png"
                style="width: 60rpx;height: 60rpx;border-radius: 50%"
        ></image>
        <text>编辑个人资料></text>
      </view>
      <view class="list-item" >
        <text>修改密码</text>
        <text>></text>
      </view>
      <view class="list-item" >
        <text>支付设置</text>
        <text>></text>
      </view>
      <view class="list-item">
        <text>绑定手机号</text>
        <text>></text>
      </view>
      <view class="list-item" @click="toAddress">
        <text>地址管理</text>
        <text>></text>
      </view>
      <view class="list-item" >
        <text>绑定第三方账号</text>
        <text>></text>
      </view>
      <view class="title">
        <text>系统设置</text>
      </view>
      <view class="list-item" >
        <text>消息推送</text>
        <text>></text>
      </view>
      <view class="list-item" >
        <text>短信提醒</text>
        <text>></text>
      </view>
      <view class="list-item" >
        <text>模式切换</text>
        <text>></text>
      </view>
      <view class="list-item" >
        <text>图片显示</text>
        <text>智能模式></text>
      </view>
      <view class="list-item" >
        <text>清楚缓存</text>
        <text>4.5MB</text>
      </view>
      <view class="title">
        <text>支持</text>
      </view>
      <view class="list-item" >
        <text>个人信息手机清单</text>
        <text>></text>
      </view>
      <view class="list-item" >
        <text>版本更新</text>
        <text>></text>
      </view>
      <view class="list-item" >
        <text>评价</text>
        <text>></text>
      </view>
      <view class="list-item" >
        <text>关于</text>
        <text>></text>
      </view>
      <view class="btn">
        <u-button type="primary" @click="loginOut">退出登录</u-button>

      </view>
    </view>
  </view>
</template>

<script>
import UButton from "@/uni_modules/uview-ui/components/u-button/u-button.vue";

export default {
  components: {UButton},
  data() {
    return {

    }
  },
  methods: {
    toAddress(){
      uni.navigateTo({
        url:'/pagesA/receivingAddress/receivingAddress'
      })
    },
    loginOut(){
      this.$store.commit('loginOut')
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  position: relative;
  background: #F8F8F8;
}
.list {
  position: absolute;
  width: 100%;
  background: #fff;
  margin-top: 30rpx;
  border-radius: 6rpx;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding-right: 30rpx;
  padding-left: 30rpx;
  box-shadow: 0 0 25rpx rgba(0, 0, 0, 0.15);
}
.title{
  border-bottom: 2rpx solid black;
  margin-bottom: 20rpx;
  margin-top: 40rpx;
}
.list-item {
  height: 75rpx;
  line-height: 75rpx;
  border-bottom: 1rpx solid #EAEAEA;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-item:last-child {
  border-bottom: none;
}
.list-item text:first-child {
  font-size: 30rpx;
  color: #333;
}
.list-item text:last-child {
  font-size: 30rpx;
  color: #999;
}
.btn{
  margin: 50rpx 0;
}
</style>
