<template>
  <view class="pay-box">
    <view class="pay-pprice">
      <text class="pprice">￥999.00</text>
    </view>
    <view class="pay-item" v-for="(item,index) in payList" @click="change(index)">
      <image class="pay-img" :src="item.imgUrl"></image>
      <view class="pay-content">
        <text class="pay-name">{{item.name}}</text>
        <text class="pay-text">{{item.text}}</text>
      </view>
      <radio :checked="item.checked"></radio>
    </view>
    <u-button type="error" class="btn" @click="toPaysuccess">确认付款</u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      payList: [
        {
          id:1,
          imgUrl:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/zfb.png',
          name:"支付宝支付",
          text:"推荐支付宝用户使用",
          checked:false
        },
        {
          id:2,
          imgUrl:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/wxf.png',
          name:"微信支付",
          text:"推荐微信用户使用",
          checked:false
        }
      ]
    }
  },
  methods: {
    change(index){
      this.payList.forEach(item=>{
          item.checked = false
      })
      this.payList[index].checked=true
    },
    toPaysuccess(){
      uni.navigateTo({
        url:'/pagesA/paySuccess/paySuccess'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.pay-box {
  .pay-pprice {
    margin: 60rpx 0;
    text-align: center;

    .pprice {
      font-size: 80rpx;
      color: #ff3333;
    }
  }

  .pay-item {
    padding: 20rpx 30rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;

    .pay-img {
      width: 120rpx;
      height: 120rpx;
      border-radius: 8rpx;
    }

    .pay-content {
      padding-left: 40rpx;
      flex: 1;
      display: flex;
      flex-direction: column;

      .pay-name {
        font-size: 34rpx;
        font-weight: bold;
      }

      .pay-text {
        color: #999999;
      }
    }
  }

  .btn {
    margin: 20rpx;
  }
}
</style>
