<template>
  <view>
    <view style="height: 70rpx">
      <u-tabs
          :list="topList"
          lineWidth="30"
          lineColor="#49BDFB"
          @click="change"
          :current="current"
          :activeStyle="{
						color: '#49BDFB',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}"
          :inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
					}"
          itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
      >
      </u-tabs>
    </view>
    <view v-if="current===0">
      <swiperImg :swiperList="indexList[0].swiperList" :height=160></swiperImg>
      <Recommend :recommendList="indexList[1].recommendList"></Recommend>
      <template>
        <Card cardTitle="猜你喜欢"></Card>
        <showBox :commodity="indexList[2].shopList"></showBox>
        <Card cardTitle="商品列表"></Card>
        <showBox :commodity="indexList[2].shopList"></showBox>
      </template>
    </view>
    <view v-if="current===1">
      <Banner :bannerImg="bannerImg"></Banner>
      <Brand :brand="brand"></Brand>
      <Card cardTitle="热销爆品"></Card>
      <Hot :hotList="hot"></Hot>
      <Card cardTitle="推荐店铺"></Card>
      <ShopRecommenda :shopList="shop"></ShopRecommenda>
      <Card cardTitle="为您推荐"></Card>
      <showBox :commodity="commodity"></showBox>
    </view>
    <view v-if="current===2">
      <Banner :bannerImg="bannerImg"></Banner>
      <Brand :brand="brand"></Brand>
      <Card cardTitle="热销爆品"></Card>
      <Hot :hotList="hot"></Hot>
      <Card cardTitle="推荐店铺"></Card>
      <ShopRecommenda :shopList="shop"></ShopRecommenda>
      <Card cardTitle="为您推荐"></Card>
      <showBox :commodity="commodity"></showBox>
    </view>
  </view>
</template>
<script>
import $http from "../../common/api/request"
export default {
  name: 'topScroll',
  props: {
    topList: {
      type: Array,
      default: () => ([
        {id:1,name:'推荐'},
        {id:2,name:'运动户外'},
        {id:3,name:'服饰内衣'},
        {id:4,name:'鞋靴箱包'},
        {id:5,name:'美妆个护'},
        {id:6,name:'家具数码'},
        {id:7,name:'食品母婴'},
      ])
    },
    indexList: {
      type: Array,
      default: () => ([])
    },
    status:{
      type:String,
      default:"loadmore"
    }
  },
  data() {
    return {
      current: 0,
      page: 0,
      bannerImg: "",
      brand: [],
      hot: [],
      shop: [],
      commodity: [],
      allData:{

      },
      isClick:[0]
    }
  },/*
  watch: {
    status: {
      immediate: true,
      handler (newValue, oldValue) {
        uni.request({
          url: `http://192.168.1.6:3000/api/index_list/${this.current + 1}/data/2`,
          success: ({data}) => {
            console.log("我被调用了，我是第二页")
            let result = data.result
            result.commodity.forEach(item=>{
              this.commodity.push(item)
            })
          }
        })
      }
    },
  },*/
  methods: {
    change(t) {
      const {index} = t
      this.current = index;
      this.current === 0 ? '' : this.getTabList()
      //避免重复请求
     /* if (this.isClick.includes(index)){
        return ""
      }else {
        this.isClick.push(index)
        this.getTabList()
      }*/
    },
    //获取页面数据
    getTabList() {
      let tabId = this.current + 1

      $http.request({
        url:`/index_list/${tabId}/data/1`
      }).then((res)=>{
        this.bannerImg = res.result.bannerList.imgUrl
        this.brand = res.result.brand
        this.hot = res.result.hot
        this.shop = res.result.shop
        this.commodity = res.result.commodity
      }).catch(()=>{
        uni.showToast({
          title:"请求失败，请重试",
          icon:'none'
        })
      })

    },
  }
}
</script>

<style scoped>

</style>
