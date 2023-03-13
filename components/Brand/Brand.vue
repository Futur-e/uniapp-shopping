<template>

<view class="brand">
  <view class="brand-item" v-for="(item,index) in brand" :key="index">
    <image class="brand-img" :src="item.imgUrl"></image>
    <text class="f-color">{{item.name}}</text>
  </view>

</view>
</template>

<script>
export default {
  props:{
    brand:{
      type:Array,
      default:()=>{[]}
    }

  }

}
</script>

<style scoped lang="scss">
.brand{
  display: flex;
  flex-wrap: wrap;
  .brand-item{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20rpx;
    .brand-img{
      width: 110rpx;
      height: 110rpx;
    }
  }

}
</style>
