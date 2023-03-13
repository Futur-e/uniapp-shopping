<template>
  <view class="pay-success">
    <view class="icon-box"><u-icon name="checkmark-circle" size="160" color="#1aa034"></u-icon></view>
    <text class="success">支付成功</text>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.pay-success{
  margin: 60rpx 0;
  text-align: center;
  .icon-box{
    width: 160px;
    height: 160px;
    margin: auto;
  }
  .success{
    font-size: 40rpx;
    color: #ff3333;
  }
}
</style>
