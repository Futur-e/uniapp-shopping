<template>
<view class="hot">
<showItem :dataList="hotList" :count=3 :imgHeight=220></showItem>
</view>
</template>

<script>
export default {
  props:{
    hotList: {
      type:Array,
      default:()=>{[]}
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
