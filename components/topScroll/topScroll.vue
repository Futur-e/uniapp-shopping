<template>
    <view>
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
      <swiper @change="onChangeTab" :current="topBarIndex" style="height: 3000px">
        <swiper-item v-for="(item,index) in topList" :key="index">
          <view v-if="index===0">
            <swiperImg></swiperImg>
            <Recommend></Recommend>
            <Card cardTitle="猜你喜欢"></Card>
            <showBox></showBox>
            <Card cardTitle="商品列表"></Card>
            <showBox></showBox>
          </view>
          <view v-if="index===1">
            <Banner></Banner>
            <Brand></Brand>
            <Card cardTitle="热销爆品"></Card>
            <Hot></Hot>
            <Card cardTitle="推荐店铺"></Card>
            <ShopRecommenda></ShopRecommenda>
            <Card cardTitle="为您推荐"></Card>
            <showBox></showBox>
          </view>
          <view v-if="index===2">
            <swiperImg></swiperImg>
            <Recommend></Recommend>
            <Card cardTitle="猜你喜欢"></Card>
            <showBox></showBox>
            <Card cardTitle="商品列表"></Card>
            <showBox></showBox>
          </view>
        </swiper-item>
      </swiper>
    </view>
</template>
<script>
export default {
  name:'topScroll',
  data() {
    return {
      topList: [
        {
          name: '推荐'
        },
        {
          name: '运动户外'
        },
        {
          name: '服饰内衣'
        },
        {
          name: '鞋靴箱包'
        },
        {
          name: '美妆个护'
        },
        {
          name: '加剧数码'
        },
        {
          name: '食品母婴'
        },
        ],
      current: 0,
      topBarIndex:0
    }
  },
  methods: {
    change(t) {
      const {index} = t
      this.current = t;
      this.topBarIndex = index
    },
    onChangeTab(e){
      this.change(e.detail.current)
    }
  }
}
</script>

<style scoped>

</style>
