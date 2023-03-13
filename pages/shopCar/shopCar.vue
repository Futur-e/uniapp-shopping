<template>
  <view class="car">
    <template v-if="cartListLength>0">
      <view style="height: 80px">
        <u-navbar :is-back="false">
          <template #left>
            <text style="font-weight: bold">购物车</text>
          </template>
          <template #right>
            <text style="margin-right: 120px" @click="chengeEdit" v-if="editShow">编辑</text>
            <text style="margin-right: 120px" @click="chengeEdit" v-else>完成</text>
          </template>
        </u-navbar>
      </view>
      <view class="car-card" v-for="(item,index1) in cartList" :key="index1">
        <view class="store-name">
          <radio value="" color="#ff3333" :checked="item.checked" @click="CheckshopAll(index1)"/>
          <text style="font-weight: bold">{{ item.storename }}&gt;</text>
        </view>
        <view class="shop-car" v-for="(shopitem,index) in item.shopList">
          <label class="radio">
            <radio value="" color="#ff3333" :checked="shopitem.checked" @click="changeCheck(index,index1)"></radio>
            <text></text>
          </label>
          <image class="shop-img" :src="shopitem.imgUrl"></image>
          <view class="shop-detail">
            <view class="shop-name">{{ shopitem.name }}</view>
            <view class="shop-color">商品颜色</view>
            <view class="shop-pri">
              <text>￥{{ shopitem.pprice }}.00</text>
              <view>
                <u-number-box v-model="shopitem.num" bg-color="#49BDFB" input-height="26rpx"></u-number-box>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="zhanwei"></view>
      <view class="sub-car" v-if="editShow">
        <label class="radio">
          <radio value="" color="#ff3333" @click="CheckAll" :checked="checkedAll"/>
          <text style="font-weight: bold">全选</text>
        </label>
        <view class="sun-jiaoqian">
          <view class="sum-price">合计:</view>
          <view class=".f-active-color sum-price">￥{{ sum }}.00元</view>
          <view class="jiaoqian" @click="toConfirmOrder">结算({{ sum }}.00)</view>
        </view>
      </view>
      <view class="sub-car" v-else>
        <label class="radio">
          <radio value="" color="#ff3333" @click="CheckAll" :checked="checkedAll"/>
          <text style="font-weight: bold">全选</text>
        </label>
        <view class="sun-jiaoqian">
          <view class="jiaoqian1">移入收藏</view>
          <view class="jiaoqian1" @click="deleteShop">删除</view>
        </view>
      </view>
    </template>
    <template v-else>
      <view class="empty">
        <view style="margin: auto">
          <view style="width: 120px;margin: auto">
            <u-icon name="shopping-cart" size="120" margin="auto"></u-icon>
          </view>
          <view>购物车为空</view>
        </view>
      </view>
    </template>
    <Tabbar cureentPage="shopCar"></Tabbar>
  </view>
</template>


<script>
import {mapState} from "vuex";
import UNavbar from "@/uni_modules/uview-ui/components/u-navbar/u-navbar.vue";


export default {
  components: {UNavbar},
  data() {
    return {
      shopCount: 1,
      editShow: true,
      checkedAll: false,
      sum: 0,
      buyshop: []
    }
  },
  computed: {
    ...mapState({
      cartList: state => state.cart.cartList,
      cartListLength: state => state.cart.cartList.length,
    }),
    isCount() {
      return this.$store.state.cart.cartList
    }
  },
  watch: {
    isCount: {
      handler(newVal, oldVal) {
        this.countPrice()
      },
      deep: true
    },
    buyshop: {
      handler(newVal, oldVal) {
        this.sum = 0
        this.buyshop.forEach(item => {
          this.sum += item.pprice * item.num
        })
      },
      deep: true
    }
  },
  methods: {
    chengeEdit() {
      this.editShow = !this.editShow
    },
    changeCheck(index, index1) {
      this.cartList[index1].shopList[index].checked = !this.cartList[index1].shopList[index].checked
    },
    CheckshopAll(index) {
      this.$store.commit("CheckshopAll", index)
    },
    CheckAll() {
      this.checkedAll = !this.checkedAll
      this.$store.commit("CheckAll", this.checkedAll)
    },
    // 计算总价
    countPrice() {
      this.cartList.forEach(item => {
        item.shopList.forEach(item => {
          if (item.checked) {
            if (!this.buyshop.includes(item)) {
              this.buyshop.push(item)
            }
          } else {
            if (this.buyshop.includes(item)) {
              this.buyshop.splice(this.buyshop.indexOf(item), 1)
            }
          }
        })
      })
    },
    deleteShop() {
      this.cartList.forEach(item1 => {
        this.buyshop.forEach(item => {
          item1.shopList.includes(item) ? item1.shopList.splice(item1.shopList.indexOf(item), 1) : ''
        })
      })
      console.log(this.$store.state.cart.cartList)
      this.$store.commit("deleteShop",this.cartList)
    },
    // 确认订单页面
    toConfirmOrder(){
      if (this.buyshop.length!==0){
        let orderList = JSON.stringify(this.buyshop)
        uni.navigateTo({
          url:`/pagesA/comfirmOrder/comfirmOrder?orderList=${orderList}`
        })
      }else {
        uni.showToast({
          title:'请选择商品',
          icon:'error'
        })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.empty {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.car {
  height: 100%;
  //底部占位
  .zhanwei {
    height: 110rpx;
  }

  .car-card {
    width: 100%;
    margin: 40rpx 0;
    padding-bottom: 10rpx;
    background-color: #f8f8f8;
    box-shadow: 0 10px 5px -4px rgba(167, 159, 159, 0.8),
    10px 0px 5px -4px rgba(167, 159, 159, 0.8), /*左边阴影  绿色*/

    -10px 0px 5px -4px rgba(167, 159, 159, 0.8), /*右边阴影  蓝色*/

    0 -10px 5px -4px rgba(167, 159, 159, 0.8); /*下边阴影  黄色*/
    .store-name {
      padding-left: 20rpx;
    }

    .shop-car {
      height: auto;
      margin: 20rpx auto;
      width: 90%;
      padding: 20rpx;
      border-radius: 10rpx;
      background-color: #ffffff;
      display: flex;
      align-items: center;

      .shop-img {
        width: 200rpx;
        height: 200rpx;
        border-radius: 8rpx;
      }

      .shop-detail {
        flex: 1;
        margin-left: 30rpx;

        .shop-name {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: #333333;
          word-break: break-all;
          padding: 0 20rpx;
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
  }

  .sub-car {
    z-index: 999;
    position: fixed;
    bottom: 120rpx;
    left: 0;
    width: 100%;
    height: 100rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    border-top: 2rpx solid #000000;

    .radio {
      padding-left: 20rpx;
    }

    .sun-jiaoqian {
      display: flex;

      .sum-price {
        line-height: 100rpx;
      }

      .jiaoqian {
        padding: 0 60rpx;
        background-color: #49BDFB;
        color: #FFFFFF;
        line-height: 100rpx;
        margin-left: 20rpx;
      }

      .jiaoqian1 {
        height: 70rpx;
        padding: 0 30rpx;
        background-color: #fb0000;
        color: #FFFFFF;
        line-height: 70rpx;
        margin-right: 20rpx;
        border: 1px solid red;
        border-radius: 35rpx;
      }
    }
  }
}
</style>
