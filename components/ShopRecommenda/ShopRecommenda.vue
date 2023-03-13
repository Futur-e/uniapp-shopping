<template>
  <view class="shop">
    <view class="shop-item" v-for="(item,index) in shopList" :key="index">
        <view class="img-big">
          <image :src="item.bigUrl" class="img-big"></image>
        </view>
      <scroll-view scroll-x="true" class="scroll-content">
        <view>
          <showItem
              :dataList="item.shopList"
              :iswrap="nowrap"
              :count=4
              :imgHeight=200
          ></showItem>
        </view>
      </scroll-view>

    </view>
  </view>
</template>

<script>
export default {
  props:{
    shopList: {
      type:Array,
      default:()=>{[]}
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="scss">
.shop {
width: 100%;
  .shop-item{
    .img-big {
      width: 100%;
      height: 350rpx;
    }

    .scroll-content {
      width: 100%;
      white-space: nowrap;
      .scroll-item{
        display: inline-block;

      }
    }
  }
}
</style>
