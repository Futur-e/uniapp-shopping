<template>
  <view class="content">

    <topBar @click="toSearch"></topBar>
    <topScroll :topList="topBarList" :indexList="indexList" :status="status"></topScroll>
    <u-loadmore :status="status"/>
    <Tabbar cureentPage="index"></Tabbar>
  </view>
</template>

<script>
import USticky from "@/uni_modules/uview-ui/components/u-sticky/u-sticky.vue";
import $http from "@/common/api/request";

export default {
  components: {USticky},
  data() {
    return {
      topBarList: [],
      indexList: [],
      status: 'loadmore',
      page: 0
    }
  },
  onLoad() {
    $http.request({
      url: "/index_list/data"
    }).then((res) => {
      console.log(res)
      this.topBarList = res.result.topBar
      this.indexList = res.result.indexList
    }).catch(() => {
      uni.showToast({
        title: "请求失败，请重试",
        icon: 'none'
      })
    })/*
     uni.request({
       url:"http://192.168.1.2:3000/api/index_list/data",
       success:({data})=>{
         this.topBarList=data.result.topBar
         this.indexList = data.result.indexList
       }
     })*/
  },
  methods: {
    // 触底回调
    onReachBottom() {
      if (this.page >= 3) return;
      this.status = 'loading';
      this.page = ++this.page;
      console.log("加载完成")
      setTimeout(() => {
        if (this.page >= 3) this.status = 'nomore';
        else
          this.status = 'loading';
      }, 2000)
    },
    toSearch() {
      uni.navigateTo({
        url: '/pagesA/search/search'
      })
    }
  }
}
</script>

<style>

</style>
