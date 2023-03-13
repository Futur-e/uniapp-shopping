<template>
  <view>
    <view style="width: 80%;margin: 10px auto">
      <u-search
          :height="28"
          :clearabled="true"
          v-model="searchVal"
          placeholder="请输入搜索内容"
          @custom="toResult"
      ></u-search>
    </view>
    <view class="renctly">
      <view class="title">
        <text>最近删除</text>
        <u-icon name="trash-fill" color="red" size="25" @click="deleteHistory"></u-icon>
      </view>
      <view class=".u-text-center" v-if="historyData.length===0">暂无搜索记录</view>
      <view class="tabs" v-else>
        <fui-tag
            v-for="(item,index) in historyData"
            :key="index"
            :text="item"
            background="#f0f0f0"
            color="#2d3436"
            marginLeft="10px"
            @click="selTag(item)"
        ></fui-tag>
      </view>
    </view>
    <view class="renctly">
      <view class="title">
        <text>热门搜索</text>
      </view>
      <view class="tabs">
        <fui-tag text="标签二" background="#f0f0f0" color="#2d3436" marginLeft="10px"></fui-tag>
        <fui-tag text="标签二" background="#f0f0f0" color="#2d3436" marginLeft="10px"></fui-tag>
      </view>
    </view>
  </view>
</template>
<script>

import FuiTag from "@/uni_modules/firstui/fui-tag/fui-tag.vue";

export default {
  components: {FuiTag},
  data() {
    return {
      searchVal: '',
      historyData: [],
      historyList: [],
    }
  },
  onLoad() {
    uni.getStorage({
      key: 'historyData',
      success: (res) => {
        this.historyData = JSON.parse(res.data)
      }
    })
  },
  methods: {
    toResult() {
      if (this.searchVal === '') {
        uni.showToast({title: '搜索内容不能为空', icon: "none"})
      } else {
        uni.navigateTo({
          url: `/pagesA/searchResult/searchResult?searchVal=${this.searchVal}`
        });
        if (this.historyData.includes(this.searchVal)) {
          this.historyData.splice(this.historyData.indexOf(this.searchVal), 1)
          this.historyData.unshift(this.searchVal)
        } else {
          this.historyData.unshift(this.searchVal);
        }
        uni.setStorage({
          key: 'historyData',
          data: JSON.stringify(this.historyData)
        })
      }

    },
    selTag(item) {
      console.log(item)
      this.searchVal = item
      uni.navigateTo({
        url: `/pagesA/searchResult/searchResult?searchVal=${this.searchVal}`
      });
      this.historyData.splice(this.historyData.indexOf(this.searchVal), 1)
      this.historyData.unshift(this.searchVal)
    },
    deleteHistory(){
      uni.showModal({
        title:'提示',
        content:'确定要清空历史搜索？',
        success:(res)=>{
          if (res.confirm){
            this.historyData = []
            uni.setStorage({
              key: 'historyData',
              data: JSON.stringify(this.historyData)
            })
          }else{
            uni.showToast({title:'已取消',icon:'none'})
          }
        }
      })
    },

  }
}
</script>

<style scoped lang="scss">
.renctly {
  padding: 30rpx;

  .title {
    display: flex;
    justify-content: space-between;
  }

  .tags {
    text-align: center;
    padding: 6rpx 10rpx;
    border: 1px solid red;
  }
}

</style>
