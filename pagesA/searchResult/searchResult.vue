<template>
  <view>
    <view class="search_result" >
      <view style="width: 90%;margin:0 auto">
        <u-search
            :height="28"
            :clearabled="true"
            bg-color="#ffffff"
            v-model="searchVal"
            placeholder="请输入搜索内容"
            @custom="toResult"
        ></u-search>
      </view>
    </view>
    <shopList :searchVal="searchVal"></shopList>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchVal:''
    }
  },
  onLoad(e){
    this.searchVal=e.searchVal
  },
  methods: {

  }
}
</script>

<style scoped>
.search_result{
  width: 100%;
  height: 32px;
  background-color: #007AFF;
  padding: 4px 10px;
}
</style>
