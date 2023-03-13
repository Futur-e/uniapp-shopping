<template>
  <view class="shoptop">
    <view class="shop-title">
      <view class="shop-item"
            v-for="(item,index) in selctList"
            :key="index"
            @click="clickSelsct(index,item.key)"
      >
        <text :class="current===index?'text-color':''">{{ item.name }}</text>
        <view class="shop-icon" v-if="index!==2">
          <u-icon name="arrow-up" size="8" :color="item.status===1?'#007aff':''"></u-icon>
          <u-icon name="arrow-down" size="8" :color="item.status===2?'#007aff':''"></u-icon>
        </view>
        <view class="shop-icon" v-if="index===2">
          <u-icon name="bag"></u-icon>
        </view>
      </view>
    </view>
    <u-line color="#2d3436" border-style="solid"/>
    <showBox :commodity=" commodity"></showBox>
  </view>
</template>

<script>
import ULine from "@/uni_modules/uview-ui/components/u-line/u-line.vue";
import $http from "@/common/api/request";

export default {
  props: {
    searchVal: {
      type: String
    }
  },
  data() {
    return {
      selctList: [
        {name: '价格', status: 1, key: 'pprice'},
        {name: '折扣', status: 0, key: 'discount'},
        {name: '品牌', status: 0},
      ],
      current: 0,
      commodity: [],
      tag: 'pprice',
      order: 'desc'
    }
  },
  computed: {
    bianhua(){
      return this.order
    }
  },
  mounted() {
    this.getSearch()
  },
  watch:{
    order:function (newData, oldData) {
      this.getSearch()
    },
    tag:function (newData, oldData) {
      this.getSearch()
    }
  },
  methods: {
    clickSelsct(index,name) {
      if (this.current === index) {
        this.selctList[index].status = this.selctList[index].status === 1 ? 2 : 1
        this.order = this.order==="desc"?"asc":"desc"
      } else {
        this.tag= name
        this.selctList[this.current].status = 0
        this.current = index
        this.selctList[index].status = 1
      }
    },
    // 请求搜索数据
    getSearch() {

      $http.request({
        url: '/goods/search',
        data: this.tag==='pprice'?{
          keyword: this.searchVal,
          pprice:this.order
        }:{
          keyword: this.searchVal,
          discount:this.order
        }
      }).then((res) => {
        this.commodity = res.result
      }).catch(() => {
        uni.showToast({
          title: "请求失败",
          icon: 'none'
        })
      })
    }
  }

}
</script>

<style scoped lang="scss">
.text-color {
  color: #007aff;
}

.shoptop {
  .shop-title {
    display: flex;
    height: 60rpx;
    line-height: 60rpx;
    justify-content: space-around;

    .shop-item {
      line-height: 60rpx;
      display: flex;
      justify-content: center;
      align-content: center;

      .shop-icon {
        margin-left: 4rpx;
        margin: auto;
        align-items: center;
        align-content: center;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
