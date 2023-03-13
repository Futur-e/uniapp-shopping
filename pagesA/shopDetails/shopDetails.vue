<template>
<view>

  <view>
    <swiperImg :height="360" :swiperList="swiperList"></swiperImg>
  </view>
  <view class="goods-details">
    <view class="price">
       <view class="goods-pprice">￥{{shopDetails.pprice}}.00</view>
       <view class="goods-oprice" style="margin-right: 150px">￥{{shopDetails.oprice}}.00</view>
      <button open-type="share">
        <u-icon name="share" size="24" margin-left="300rpx" @click="share"></u-icon>
      </button>

    </view>
    <view class="goods-name">{{shopDetails.name}}</view>
  </view>
  <!--    商品详情-->
  <view class="goods-img">
    <view  v-for="(item,index) in shopImg" :key="index">
      <image :src="item" mode="widthFix"></image>
    </view>
  </view>
  <!--    遮罩层-->
  <view class="mark-box" v-show="mark" @click="hiddenMark" @touchmove.stop.prevent="">
    <view class="mask"></view>
    <fui-animation :duration="500" :animationType="mode"  :show="mark" >
<!--      <scroll-view scroll-y style="height: 600rpx">-->
        <view class="car-box" >
          <view class="shop-detail">
            <image class="shop-img" src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/17460/details2.jpeg"></image>
            <view class="shop-text">
              <text class="shop-name">Lagogo拉谷谷2022年冬季新款驼色优雅淑女简约风中长款羽绒服女连帽休闲外套</text>
              <text class="shop-price">￥8888.00</text>
            </view>
          </view>
          <view>
            <text>颜色</text>
            <view>
              <fui-tag text="标签二" background="#49BDFB" color="#2d3436" marginLeft="10px" ></fui-tag>
              <fui-tag text="标签二" background="#49BDFB" color="#2d3436" marginLeft="10px" ></fui-tag>
            </view>
          </view>
          <view>
            <text>颜色</text>
            <view>
              <fui-tag text="标签二" background="#49BDFB" color="#2d3436" marginLeft="10px" ></fui-tag>
              <fui-tag text="标签二" background="#49BDFB" color="#2d3436" marginLeft="10px" ></fui-tag>
            </view>
          </view>
          <view>
            <text>颜色</text>
            <view>
              <fui-tag text="标签二" background="#49BDFB" color="#2d3436" marginLeft="10px" ></fui-tag>
              <fui-tag text="标签二" background="#49BDFB" color="#2d3436" marginLeft="10px" ></fui-tag>
            </view>
          </view>
          <view>
            <text>颜色</text>
            <view>
              <fui-tag text="标签二" background="#49BDFB" color="#2d3436" marginLeft="10px" ></fui-tag>
              <fui-tag text="标签二" background="#49BDFB" color="#2d3436" marginLeft="10px" ></fui-tag>
            </view>
          </view>
          <view style="display: flex; justify-content: space-between">
            <text>购买数量</text>
            <u-number-box v-model="shopCount"  bg-color="#49BDFB"></u-number-box>
          </view>
          <u-button type="primary" @click="addCarshop" >加入购物车</u-button>
        </view>

<!--      </scroll-view>-->
    </fui-animation>
  </view>
  <!--    底部-->
  <view style="height: 88rpx"></view>
  <view class="goods-bottom">
    <view class="b-icon">
      <u-icon name="server-fill" size="26"></u-icon>
      <text>客服</text>
    </view>
    <view class="b-icon">
      <u-icon name="home" size="28"></u-icon>
      <text>店铺</text>
    </view>
    <view class="b-icon">
      <u-icon name="shopping-cart-fill" size="28"></u-icon>
      <text>购物车</text>
    </view>
    <view class="b-button">
      <fui-button height="60rpx" width="200rpx" type="danger" @click="addCar">加入购物车</fui-button>
    </view>
    <view class="b-button">
      <fui-button height="60rpx" width="150rpx" type="danger"  >立即购买</fui-button>
    </view>
  </view>
</view>
</template>

<script>
import $http from "@/common/api/request";
import UIcon from "@/uni_modules/uview-ui/components/u-icon/u-icon.vue";
import FuiButton from "@/uni_modules/firstui/fui-button/fui-button.vue";
import UTransition from "@/uni_modules/uview-ui/components/u-transition/u-transition.vue";
import FuiAnimation from "@/uni_modules/firstui/fui-animation/fui-animation.vue";
import FuiTag from "@/uni_modules/firstui/fui-tag/fui-tag.vue";

export default {
  components: {FuiTag, FuiAnimation, UTransition, FuiButton, UIcon},
  data() {
    return {
      shopId: '1',
      mark:false,
      mode: ['slide-bottom'],
      shopImg: [],
      swiperList: [],
      shopDetails:{},
      shopCount:1,
      imgUrl:''
    }
  },
  onLoad(e) {
    this.shopId = e.id
    this.getshopDetail(this.shopId)
  },
  methods: {
    getshopDetail(id) {
      $http.request({
        url: "/index_list/shopdetails",
        data: {
          id: this.shopId
        }
      }).then((res) => {
        this.swiperList = res.result[0].swiperImg.split(',')
        this.shopImg = res.result[0].detailImg.split(',')
        this.imgUrl=this.swiperList[0]
        this.shopDetails = res.result[0]
        console.log(res.result[0])
      }).catch(() => {
        uni.showToast({
          title: "请求失败，请重试",
          icon: 'none'
        })
      })
    },
    addCar(){
      this.mark = true
      console.log(this.mark)
    },
    addCarshop(){
      let cartItem = {storename:'apple专营店',checked:false,shopList:[{...this.shopDetails,checked:false,imgUrl:this.imgUrl,num:this.shopCount}]}
      this.$store.commit("addShop",cartItem)
    },
    ani(mode, mask) {
      setTimeout(() => {
        this.mode = mode;
        this.show = !this.show;
      }, 80);
    },
    hiddenMark(e){
      let height = 0
      uni.getSystemInfo({
        success: (result) => {
          height = result.windowHeight
        }
      })
      let hidden = height - 300
      let tagArea = e.detail.y
      if (tagArea < hidden){
        this.mark = false
      }else {
        return ;
      }
    },
    share(){
      console.log('1111')
    }
  }
}
</script>

<style scoped lang="scss">
.goods-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  .price {
    display: flex;
    width: 100%;
    background-color: #ededed;
    height: 30px;
    border-bottom: 1px solid #757474;
    line-height: 30px;

    .goods-pprice {
      border-radius: 4rpx;
      padding: 2rpx 10rpx;
      font-size: 40rpx;
      color: #ff3333;
    }

    .goods-oprice {
      height: 30px;
      margin-top: 8rpx;
      text-decoration: line-through;
      font-size: 32rpx;
      color: #999999;
      align-items: center;
    }
  }

  .goods-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #333333;
    word-break: break-all;
    padding: 6rpx 20rpx;
    text-align: center;
  }
}

.goods-bottom {
  width: 100%;
  height: 100rpx;
  background-color: #ededed;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  z-index: 998;

  .b-button {
    margin-top: 20rpx;
  }
}
.goods-img{
  margin: auto;
  text-align: center;
}
.mark-box{
  padding: 10px;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .mask{
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    width: 100%;
  }
  .car-box{
    position: absolute;
    padding-bottom: 20rpx;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: 99999;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    .shop-detail{
      display: flex;
      justify-content: left;
      .shop-img{
        width: 400rpx;
        height: 200rpx;
        border-radius: 8rpx;
      }
      .shop-text{
        display: flex;
        flex-direction: column;
        .shop-name{
          margin-top: 40rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          color: #333333;
          word-break: break-all;
          padding: 6rpx 30rpx;
          text-align: center;
          font-size: 32rpx;
        }
        .shop-price{
          margin-top: 20rpx;
          color: #ff3333;
          padding-left: 30rpx;
          font-size: 38rpx;
        }
      }
    }
  }
}
</style>
