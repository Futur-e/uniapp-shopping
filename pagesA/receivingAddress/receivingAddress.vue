<template>
  <view>
    <view class="item" v-for="(res, index) in siteList" :key="res.id" @click="toChange(res)">
      <view class="top">
        <view class="name">{{ res.name }}</view>
        <view class="phone">{{ res.phone }}</view>
        <view class="tag" v-if="res.isDefault===true">
          <text :class="{red:res.isDefault===true}">默认</text>
        </view>
      </view>
      <view class="bottom">
        <text>{{ res.site }}</text>
        <u-icon name="edit-pen" :size="30" color="#999999" @click="alterAddress(index)"></u-icon>
      </view>
    </view>
    <view class="addSite" @tap="toAddSite">
      <view class="add">
        <u-icon name="plus" color="#ffffff" class="icon" size="20"></u-icon>
        <text style="font-size: 40rpx">新建收货地址</text>
      </view>
    </view>
  </view>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      canClick: false
    };
  },
  computed: {
    ...mapState({
      siteList: state => state.adress.siteList
    })
  },
  onLoad(e){
    this.canClick = e.canClick
  },
  methods: {

    toAddSite() {
      uni.navigateTo({
        url: "/pagesA/addAddress/addAddress"
      });
    },
    // 修改地址
    alterAddress(index) {
      uni.navigateTo({
        url: `/pagesA/addAddress/addAddress?index=${index}`
      });
    },
    // 确认订单式要修改地址的回调
    toChange(data){
      let address=JSON.stringify(data)
      if (this.canClick){
        uni.navigateTo({
          url:`/pagesA/comfirmOrder/comfirmOrder?address=${address}`
        })
      }else {
        return
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  padding: 40rpx 20rpx;

  .top {
    display: flex;
    font-weight: bold;
    font-size: 34rpx;

    .phone {
      margin-left: 60rpx;
    }

    .tag {
      display: flex;
      font-weight: normal;
      align-items: center;

      text {
        display: block;
        width: 60rpx;
        height: 34rpx;
        line-height: 34rpx;
        color: #ffffff;
        font-size: 20rpx;
        border-radius: 6rpx;
        text-align: center;
        margin-left: 30rpx;
        background-color: rgb(49, 145, 253);
      }

      .red {
        background-color: red
      }
    }
  }

  .bottom {
    display: flex;
    margin-top: 20rpx;
    font-size: 28rpx;
    justify-content: space-between;
    color: #999999;
  }
}

.addSite {
  display: flex;
  justify-content: space-around;
  width: 600rpx;
  line-height: 100rpx;
  position: absolute;
  bottom: 30rpx;
  left: 80rpx;
  background-color: red;
  border-radius: 60rpx;
  font-size: 30rpx;

  .add {
    display: flex;
    align-items: center;
    color: #ffffff;

    .icon {
      margin-right: 10rpx;
    }
  }
}
</style>
