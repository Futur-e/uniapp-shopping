<template>
  <view :style="{'height': allBarHright + 'px'}" style="z-index: 999">
    <view class="search" :style="{'padding-top': barHeight +  'px'}" @click="$emit('click')">
      <view class="search-box" id="searchbox">
        <u-icon name="search" size="18" color="#ccc"></u-icon>
        <text>搜索社区内容</text>
      </view>
    </view>
  </view>
</template>

<script>


export default {

  data() {
    return {
      barHeight: 0,
      allBarHright:0
    }
  },
  beforeMount() {
    this.getNavBarHeight()
  },
  mounted() {
    const query = uni.createSelectorQuery().in(this);
    query.select('#searchbox').boundingClientRect(data => {
      this.allBarHright = this.barHeight + data.height
      console.log(this.allBarHright)
    }).exec();

  },
  methods: {
    getNavBarHeight() {
      uni.getSystemInfo({
        success: (result) => {
          const isIos = result.system.indexOf('iOS') > -1
          const statusBarHeight = result.statusBarHeight
          if (isIos) {
            this.barHeight = statusBarHeight + 3
          } else {
            this.barHeight = statusBarHeight + 7

          }
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.search {
  position: fixed;
  width: 100%;
  background: #fff;
  padding: 0 31rpx 12rpx;
  z-index: 999;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ccc;

  .search-box {
    display: flex;
    @media screen and (max-width: 320px) {
      width: 50%;
    }
    position: relative;
    width: 60%;
    background: #f3f3f3;
    height: 64rpx;
    border-radius: 32rpx;
    line-height: 64rpx;
    columns: #ccc;
    font-size: 28rpx;
    padding-left: 24rpx;
  }

  .icon {
    position: absolute;
    top: 19rpx;
  }
}


</style>
