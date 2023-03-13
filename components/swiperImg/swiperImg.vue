<template>
  <u-swiper
      :height=height
      :list="swiperList"
      @change="e => current = e.current"
      :autoplay="false"
  >
    <view
        slot="indicator"
        class="indicator"
    >
      <view
          class="indicator__dot"
          v-for="(item, index) in swiperList"
          :key="index"
          :class="[index === current && 'indicator__dot--active']"
      >
      </view>
    </view>
  </u-swiper>
</template>

<script>

export default {
  props:{
    swiperList:{
      type:Array,
      default:()=>(['../../static/img/Furnishing1.jpg'])
    },
    height:{
      type:Number
    }
  },
  data() {
    return {
      current:0,

    }
  },
  methods: {
    change(e) {
      // console.log('change', e);
    },
    click(e) {
      console.log('click', e);
    }
  },
}
</script>

<style lang="scss" scoped>
.indicator {
  @include flex(row);
  justify-content: center;

  &__dot {
    height: 6px;
    width: 6px;
    border-radius: 100px;
    background-color: #8d8d8d;
    margin: 0 5px;
    transition: background-color 0.3s;

    &--active {
      background-color: #120b0b;
    }
  }
}

.indicator-num {
  padding: 2px 0;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 100px;
  width: 35px;
  @include flex;
  justify-content: center;

  &__text {
    color: #8a8a8a;
    font-size: 12px;
  }
}
</style>
