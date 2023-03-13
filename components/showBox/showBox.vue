<template>
<view class="commodity-list">
  <showItem :dataList="commodity"></showItem>
</view>
</template>

<script>




export default {
  props:{
    commodity:{
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

<style scoped lang="scss">

</style>
