<template>
  <view class="center">
    <view class="bg-img">
      <image src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/mybg.png" class="img"></image>
      <view class="setting" @click="toSetting">
        <image src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/config.png"
               class="set-img"></image>
      </view>
      <view class="avtor-box">
        <image @click="toLogin" class="avtor" :src="userData.imgUrl"></image>
        <text>{{ userData.userName }}</text>
      </view>
    </view>
    <!--    我的定展展示区-->
    <view class="order-box">
      <view class="top-text">
        <text style="font-size:34rpx;font-weight: bold ">我的订单</text>
        <text style="color: #8f8f94" @click="toOrder">全部订单&gt;</text>
      </view>
      <view class="bottom-icons">
        <view class="icon-box">
          <image src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/order1.png"
                 class="botton-img"></image>
          <text>待付款</text>
        </view>
        <view class="icon-box">
          <image src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/order3.png"
                 class="botton-img"></image>
          <text>待发货</text>
        </view>
        <view class="icon-box">
          <image src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/order2.png"
                 class="botton-img"></image>
          <text>待收货</text>
        </view>
        <view class="icon-box">
          <image src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/order4.png"
                 class="botton-img"></image>
          <text>待评价</text>
        </view>
        <view class="icon-box">
          <image src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/order1.png"
                 class="botton-img"></image>
          <text>待付款</text>
        </view>
      </view>
    </view>

    <view class="container">
      <view class="list">
        <view class="list-item">
          <text>我的收藏</text>
          <text>></text>
        </view>
        <view class="list-item">
          <text>我的优惠券</text>
          <text>></text>
        </view>
        <view class="list-item">
          <text>我的积分</text>
          <text>></text>
        </view>
        <view class="list-item">
          <text>加入超级VIP</text>
          <text>></text>
        </view>
        <view class="list-item">
          <text>帮助中心</text>
          <text>></text>
        </view>
        <view class="list-item">
          <text>联系客服</text>
          <text>></text>
        </view>
        <view class="list-item">
          <text>商家入驻</text>
          <text>></text>
        </view>
      </view>
    </view>
    <Tabbar cureentPage="center"></Tabbar>
  </view>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      userData: state => state.userData.userData,
      loginStatus: state => state.userData.loginStatus
    })
  },
  methods: {
    toSetting() {
      uni.navigateTo({
        url: "/pagesA/setting/setting"
      })
    },
    toOrder() {
      uni.navigateTo({
        url: "/pagesA/order/order"
      })
    },
    toLogin() {
      if (!this.loginStatus) {
        uni.navigateTo({
          url: "/pagesA/LoginPage/LoginPage"
        })
      } else {
        uni.navigateTo({
          url: "/pagesA/setting/setting"
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.center {
  .bg-img {
    width: 100%;
    height: 480rpx;
    overflow: hidden;
    position: relative;

    .img {
      width: 100%;
      position: absolute;
    }

    .setting {
      position: absolute;
      z-index: 20;
      width: 60rpx;
      height: 60rpx;
      top: 80px;
      right: 40rpx;

      .set-img {
        width: 60rpx;
        height: 60rpx;
      }
    }

    .avtor-box {
      text-align: center;
      position: absolute;
      display: flex;
      flex-direction: column;
      z-index: 20;
      left: 35%;
      top: 150rpx;

      .avtor {
        width: 200rpx;
        height: 200rpx;
        border-radius: 50%;
      }

      text {
        font-size: 36rpx;
        color: #FFFFFF;
      }
    }
  }

  .order-box {
    display: flex;
    flex-direction: column;
    padding: 20rpx 30rpx;
    height: auto;

    .top-text {
      display: flex;
      justify-content: space-between;

    }

    .bottom-icons {
      display: flex;
      justify-content: space-around;
      margin-top: 40rpx;

      .icon-box {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        .botton-img {
          width: 60rpx;
          height: 60rpx;
        }
      }
    }
  }
}

.container {
  width: 100%;
  position: relative;
  background: #F8F8F8;
}

.list {
  position: absolute;
  width: 100%;
  background: #fff;
  margin-top: 30upx;
  border-radius: 6upx;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding-right: 30upx;
  padding-left: 30upx;
  box-shadow: 0 0 25upx rgba(0, 0, 0, 0.15);
}

.list-item {
  height: 75upx;
  line-height: 75upx;
  border-bottom: 1upx solid #EAEAEA;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-item:last-child {
  border-bottom: none;
}

.list-item text:first-child {
  font-size: 30upx;
  color: #333;
}

.list-item text:last-child {
  font-size: 30upx;
  color: #999;
}
</style>

