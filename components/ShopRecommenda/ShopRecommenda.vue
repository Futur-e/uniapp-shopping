<template>
  <view class="shop">
    <view class="shop-item">
        <view class="img-big">
          <image src="../../static/img/shop.jpg" class="img-big"></image>
        </view>
      <scroll-view scroll-x="true" class="scroll-content">
        <view class="scroll-item">
          <showItem
              :dataList="shopList"
              :wrap="nowrap"
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
  data(){
    return{
      shopList:[
        {
          id:1,
          imgUrl:'../../static/img/shop1.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:2,
          imgUrl:'../../static/img/shop2.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:3,
          imgUrl:'../../static/img/hot3.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:4,
          imgUrl:'../../static/img/hot2.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:5,
          imgUrl:'../../static/img/hot3.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:6,
          imgUrl:'../../static/img/hot1.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        }
      ]

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
