<template>
  <view class="recommend bg-color">
    <view class="recommend-item">
      <img src="../../static/img/Children.jpg" alt="" class="item-big">
      <view class="item-small">
        <image class="item-img" src="../../static/img/Children1.jpg"></image>
        <image class="item-img" src="../../static/img/Children2.jpg"></image>
        <image class="item-img" src="../../static/img/Children3.jpg"></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Recommend"
}
</script>

<style lang="scss" scoped>
.recommend {
  padding: 20rpx;

  .recommend-item {
    display: flex;
    flex-direction: column;
    border-radius: 20rpx;
    border: 2rpx solid #ccc;
    overflow: hidden;
    margin: 20rpx 0;

    .item-big {
      width: 100%;
      height: 300rpx;
    }
    .item-small{
      width: 100%;
      height: 240rpx;
      .item-img{
        width: 33.33%;
        height: 240rpx;
      }
    }
  }
}
</style>
