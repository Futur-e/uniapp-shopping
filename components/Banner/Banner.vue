<template>
<view class="banner">
  <image :src="bannerImg" class="banner-img"></image>
</view>
</template>

<script>
export default {
  props:{
    bannerImg:{
      type:String,
      default:""
    }
  }
}
</script>

<style scoped lang="scss">
.banner{
  width: 100%;
  height: 320rpx;
  .banner-img{
    width: 100%;
    height: 320rpx;
  }
}
</style>
