<template>
  <view class="confirm-box bg-active-color">
    <view class="adress-box" @click="toAddress">
      <u-icon name="map" size="20"></u-icon>
      <view class="address-detail">
        <view class="address-top">
          <text>收货人：{{orderAdress.name}}</text>
          <text>{{orderAdress.phone}}</text>
        </view>
        <view class="address-down">
          <text style="font-size: 26rpx;color: #999999">收货地址：{{orderAdress.site}}</text>
        </view>
      </view>
      <text> ></text>
    </view>

    <view class="detail-box" v-for="(item,index) in orderList" :key="index">
      <view class="shop-storename">出售美女专用店</view>
      <view class="details">
          <image class="shop-img" :src="item.imgUrl"></image>
          <view class="shop-detail">
            <view class="shop-name">{{item.name}}</view>
            <view class="shop-color">商品颜色</view>
            <view class="shop-pri">
              <text style="color: #ff3333">￥{{item.pprice}}.00</text>
              <view>
                <text>*{{item.num}}</text>
              </view>
            </view>
          </view>
      </view>
      <view class="Freight">
        <text>运费</text>
        <text>￥0.00</text>
      </view>
      <view class="Freight">
        <label>留言：</label>
        <input type="text" placeholder-class="line" placeholder="给卖家的留言，140以内" style="border: 1px solid black;margin-left: 10rpx;flex: 1"/>
      </view>
      <view class="total">
        <text>共1件商品 小计
          <text class="red-price">￥144.00</text>
        </text>
      </view>
    </view>
    <view class="sub-car">
        <text>合计: <text class=".f-active-color sum-price ">￥999.00元</text></text>
      <view class="jiaoqian" @click="toPay">提交订单</view>

    </view>
  </view>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
    }
  },
  onLoad(e) {

    if (e.orderList){
      let orderList = JSON.parse(e.orderList)
      this.$store.commit("getOrderList",orderList)
      this.$store.commit("getOrderAdress",this.address)
    }else {
      let address1 = JSON.parse(e.address)
      this.$store.commit("alterOrderAdress",address1)
    }
  },
  computed:{
    ...mapState({
      orderList:state => state.order.orderList,
      address:state => state.adress.siteList,
      orderAdress:state => state.order.address
    }),
  },

  methods: {
    toAddress(){
      let canClick = true
      uni.navigateTo({
        url:`/pagesA/receivingAddress/receivingAddress?canClick=${canClick}`
      })
    },
    toPay(){
      uni.navigateTo({
        url:"/pagesA/confirmPay/confirmPay"
      })
    }
  }
}
</script>

<style scoped lang="scss">
.confirm-box {

  width: 100%;
  height: 100%;
  background-color: #F7F7F7;
  padding-top: 20rpx;

  .adress-box {
    border-bottom: 1px solid red;
    height: auto;
    padding: 20rpx;
    display: flex;
    background-color: #FFFFFF;
    justify-content: space-around;
    justify-items: center;
    align-items: center;

    .address-detail {
      display: flex;
      flex-direction: column;

      .address-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 14rpx;
      }
    }
  }

  .detail-box {
    padding: 20rpx;
    margin-top: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #FFFFFF;

    .shop-storename {
      font-size: 26rpx;
    }

    .details {
      background-color: #F4F4f4;
      height: auto;
      margin: 20rpx auto;
      width: 100%;
      padding: 20rpx;
      border-radius: 10rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .shop-img {
        width: 200rpx;
        height: 200rpx;
        border-radius: 8rpx;
      }

      .shop-detail {
        flex: 1;
padding: 0 20rpx;
        .shop-name {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: #333333;
          word-break: break-all;
        }

        .shop-color {
          font-size: 24rpx;
          color: #474747;
        }

        .shop-pri {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .Freight {
      display: flex;
      justify-content: space-between;
    }

    .total {
      display: flex;
      justify-content: flex-end;
      .red-price{
        color: red;
        font-size: 36rpx;
      }
    }
  }
  .sub-car {
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    border-top: 2rpx solid #000000;
      .sum-price {
        line-height: 100rpx;
        font-size: 34rpx;
      }

      .jiaoqian {
        padding: 0 60rpx;
        background-color: red;
        color: #FFFFFF;
        line-height: 100rpx;
        margin-left: 20rpx;
      }
  }
}
</style>
