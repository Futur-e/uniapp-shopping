<template>
<view class="commodity-list">
  <showItem :dataList="commodity"></showItem>
</view>
</template>

<script>




export default {
  name: "showBox",
data(){
    return{
      commodity:[
        {
          id:1,
          imgUrl:'../../static/img/commodity1.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:2,
          imgUrl:'../../static/img/commodity1.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:3,
          imgUrl:'../../static/img/commodity1.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:4,
          imgUrl:'../../static/img/commodity1.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        }
      ]
    }
}
}
</script>

<style scoped lang="scss">

</style>
