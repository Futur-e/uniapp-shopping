<template>
<view class="hot">
<showItem :dataList="hotList" :count=3 :imgHeight=220></showItem>
</view>
</template>

<script>
export default {
  data(){
    return{
      hotList:[
        {
          id:1,
          imgUrl:'../../static/img/hot1.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:2,
          imgUrl:'../../static/img/hot2.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:3,
          imgUrl:'../../static/img/hot3.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:4,
          imgUrl:'../../static/img/hot2.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:5,
          imgUrl:'../../static/img/hot3.jpg',
          name:'大姨绒毛大款2020年必须买，不买你就不行了，疯抢',
          pprice:'222',
          oprice:'111',
          discount:5.1
        },
        {
          id:6,
          imgUrl:'../../static/img/hot1.jpg',
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

<style scoped>

</style>
