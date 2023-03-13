<template>
  <view class='tabbar'>
    <view
        class='tab'
        v-for="(item,index) in tabbarList"
        :key='index'
        @tap='navigatorTo(item.pagePath)'
    >
      <image v-if=' item.pagePath === cureentPage ' :src="item.selectedIconPath" mode=""></image>
      <image v-else :src="item.iconPath" mode=""></image>
      <view class='text'>{{ item.text }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    cureentPage: {
      type: String,
      default: 'index'
    }
  },
  data() {
    return {
      tabbarList: [
        {
          "pagePath": "index",
          "text": "首页",
          "iconPath": "/static/tabbar/index.png",
          "selectedIconPath": "/static/tabbar/indexSelected.png"
        },
        {
          "pagePath": "sort",
          "text": "分类",
          "iconPath": "/static/tabbar/list.png",
          "selectedIconPath": "/static/tabbar/listSelected.png"
        },
        {
          "pagePath": "shopCar",
          "text": "购物车",
          "iconPath": "/static/tabbar/shop.png",
          "selectedIconPath": "/static/tabbar/shopSelected.png"
        },
        {
          "pagePath": "center",
          "text": "我的",
          "iconPath": "/static/tabbar/my.png",
          "selectedIconPath": "/static/tabbar/mySelected.png"
        }
      ]
    }
  },
  methods: {
    navigatorTo(e) {
      if (e === 'shopCar') {
        this.navigateTo({
          url: `../../pages/${e}/${e}`
        })
      } else {
        uni.redirectTo({
          url: `../../pages/${e}/${e}`
        })
      }
    }
  }
}
</script>

<style scoped>
.tabbar {
  border-top: 2rpx solid #636263;
  background-color: #FFFFFF;
  z-index: 9999;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 120rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.tab {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

image {
  width: 55rpx;
  height: 55rpx;
}

.text {
  padding: 10rpx 0;
  font-size: 24rpx;
}
</style>
