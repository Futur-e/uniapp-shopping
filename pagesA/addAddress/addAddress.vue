<template>
  <view class="wrap">
    <view class="top">
      <view class="item">
        <view class="left">收货人</view>
        <input type="text" placeholder-class="line" placeholder="请填写收货人姓名" v-model="siteItem.name"/>
      </view>
      <view class="item">
        <view class="left">手机号码</view>
        <input type="text" placeholder-class="line" placeholder="请填写收货人手机号" v-model="siteItem.phone"/>
      </view>
      <view class="item" @click="showCityPicker">
        <view class="left">所在地区</view>
        <input disabled type="text" placeholder-class="line" placeholder="省市区县、乡镇等" v-model="siteItem.site"/>
        <mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm"
                           @onCacel="onCancel"></mpvue-city-picker>
      </view>
      <view class="item address">
        <view class="left">详细地址</view>
        <textarea type="text" placeholder-class="line" placeholder="街道、楼牌等" v-model="siteItem.site"/>
      </view>
      <!-- <view class="site-clipboard">
        <textarea placeholder-class="line" value="" placeholder="粘贴文本,可自动识别姓名和地址等" />
        <view class="clipboard">
          地址粘贴板
          <u-icon name="arrow-down" class="icon" :size="20"></u-icon>
        </view>
      </view> -->
    </view>
    <view class="bottom">
      <view class="default">
        <view class="left">
          <view class="set">设置默认地址</view>
          <view class="tips">提醒：每次下单会默认推荐该地址</view>
        </view>

        <view class="right">
          <switch color="red" @change="changeDefault"/>
        </view>
      </view>
    </view>
    <u-button type="primary" @click="addSiteItem">保存</u-button>
    <!--    <view class="bottom">
          <view class="tag">
            <view class="left">标签</view>
            <view class="right">
              <text class="tags">家</text>
              <text class="tags">公司</text>
              <text class="tags">学校</text>
              <view class="tags plus"><u-icon size="20" name="plus"></u-icon></view>
            </view>
          </view>

        </view>-->
  </view>
</template>

<script>
import mpvueCityPicker from '@/uni_modules/mpvue-citypicker/mpvueCityPicker.vue';

export default {
  components: {mpvueCityPicker},
  data() {
    return {
      show: false,
      pickerValueDefault: [0, 0, 1],
      isAlter:false,
      siteItem:
          {
            name: '',
            phone: '',
            site: '',
            isDefault: false,

          }
    };
  },
  onLoad(e) {
    if (e.index) {
      uni.setNavigationBarTitle({title: '修改地址'});
      this.siteItem = this.$store.state.adress.siteList[e.index]
      this.isAlter = true
    }
  },
  methods: {
    showCityPicker() {
      this.$refs.mpvueCityPicker.show();
    },
    onConfirm(e) {
      this.siteItem.site = e.label
      this.$refs.mpvueCityPicker.show();
    },
    onCancel(e) {
      console.log(e)
    },
    // 添加地址到仓库
    addSiteItem() {
      if (this.isAlter){
        uni.navigateTo({
          url: '/pagesA/receivingAddress/receivingAddress'
        })
      }else {
        this.$store.commit("addAddress", this.siteItem)
        uni.showToast({
          title: '添加成功',
          icon: 'success'
        })
        uni.navigateTo({
          url: '/pagesA/receivingAddress/receivingAddress'
        })
        this.siteItem = {name: '', phone: '', site: '', isDefault: false}
      }
    },
    changeDefault(e) {
      this.siteItem.isDefault = e.detail.value
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .line {
  color: $u-light-color;
  font-size: 28rpx;
}

.wrap {
  background-color: #f2f2f2;

  .top {
    background-color: #ffffff;
    border-top: solid 2rpx $u-border-color;
    padding: 22rpx;

    .item {
      margin: 20rpx 0;
      display: flex;
      font-size: 32rpx;
      line-height: 100rpx;
      align-items: center;
      border-bottom: solid 2rpx $u-border-color;

      .left {
        width: 180rpx;
      }

      input {
        text-align: left;
      }
    }

    .address {
      padding: 20rpx 0;

      textarea {
        // width: 100%;
        height: 150rpx;
        background-color: #f7f7f7;
        line-height: 60rpx;
        margin: 40rpx auto;
        padding: 20rpx;
      }
    }

    .site-clipboard {
      padding-right: 40rpx;

      textarea {
        // width: 100%;
        height: 150rpx;
        background-color: #f7f7f7;
        line-height: 60rpx;
        margin: 40rpx auto;
        padding: 20rpx;
      }

      .clipboard {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26rpx;
        color: $u-tips-color;
        height: 80rpx;

        .icon {
          margin-top: 6rpx;
          margin-left: 10rpx;
        }
      }
    }
  }

  .bottom {
    margin-top: 20rpx;
    padding: 40rpx;
    padding-right: 0;
    background-color: #ffffff;
    font-size: 28rpx;

    .tag {
      display: flex;

      .left {
        width: 160rpx;
      }

      .right {
        display: flex;
        flex-wrap: wrap;

        .tags {
          width: 140rpx;
          padding: 16rpx 8rpx;
          border: solid 2rpx $u-border-color;
          text-align: center;
          border-radius: 50rpx;
          margin: 0 10rpx 20rpx;
          display: flex;
          font-size: 28rpx;
          align-items: center;
          justify-content: center;
          color: $u-content-color;
          line-height: 1;
        }

        .plus {
          //padding: 10rpx 0;
        }
      }
    }

    .default {
      margin-top: 50rpx;
      display: flex;
      justify-content: space-between;
      border-bottom: solid 2rpx $u-border-color;
      line-height: 64rpx;

      .tips {
        font-size: 24rpx;
      }

      .right {
      }
    }
  }
}
</style>



