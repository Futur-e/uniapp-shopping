<template>
  <view class="recommend bg-color">
    <view class="recommend-item" v-for="(item,index) in recommendList" :key="index">
      <img :src="item.bigUrl" alt="" class="item-big">
      <view class="item-small">
        <block v-for="(list,index) in item.smallImg">
          <image class="item-img" :src="list"></image>
        </block>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props:{
    recommendList:{
      type:Array,
      default:()=>([
        {
          "bigUrl": "../../static/img/Children.jpg",
          "smallImg": [
            {
              "imgUrl": "../../static/img/Children1.jpg"
            },
            {
              "imgUrl": "../../static/img/Children2.jpg"
            },
            {
              "imgUrl": "../../static/img/Children3.jpg"
            }
          ]
        }
      ])
    }
  }
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
