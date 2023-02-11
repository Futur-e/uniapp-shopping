<template>
  <view class="commodity" :style="'flex-wrap:' +wrap+';'">
    <view class="commodity-item"
          v-for="(item,index) in dataList"
          :key="item.id"
          :style="'width:'+width+'rpx;'"
    >
      <image :src="item.imgUrl" class="commodity-img" :style="'height:'+imgHeight+'rpx;'"></image>
      <view class="commodity-content">
        <text class="commodity-name">{{ item.name }}</text>
        <view>
          <text class="pprice">￥{{ item.pprice }}</text>
          <text class="oprice">￥{{ item.oprice }}</text>
        </view>
        <text class="discount">{{ item.discount }}折扣</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "showItem",
  props: {
    dataList: {
      type: Array,
      default: () => ([])
    },
    count: {
      type: Number,
      default: 2
    },
    imgHeight:{
      type:Number,
      default:375
    },
    wrap:{
      type:String,
      default:'wrap'
    },

  },
  computed: {
    width(props) {
      return 720 / props.count
    },
  }
}
</script>

<style scoped lang="scss">

.commodity {
  display: flex;

  justify-content: space-around;

  .commodity-item {
    padding-bottom: 20rpx;
    //border: 1px solid #636363;
    .commodity-img {
      width: 100%;
    }

    .commodity-content {
      text-align: center;

      .commodity-name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        color: #333333;
        word-break: break-all;
        padding: 6rpx 20rpx;
      }

      .oprice {
        text-decoration: line-through;
        font-size: 24rpx;
        color: #999999;
      }

      .discount {
        border-radius: 4rpx;
        border: 1px solid #ff3333;
        padding: 2rpx 10rpx;
        font-size: 20rpx;
        color: #ff3333;
      }
    }
  }
}
</style>
