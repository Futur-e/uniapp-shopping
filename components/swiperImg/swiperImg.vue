<template>
  <u-swiper
      :list="list"
      @change="e => current = e.current"
      :autoplay="false"
  >
    <view
        slot="indicator"
        class="indicator"
    >
      <view
          class="indicator__dot"
          v-for="(item, index) in list"
          :key="index"
          :class="[index === current && 'indicator__dot--active']"
      >
      </view>
    </view>
  </u-swiper>
</template>

<script>

export default {
  data() {
    return {
      current:0,
      list: [
        '../../../../static/img/swiper1.jpg',
        '../../../../static/img/swiper2.jpg',
        '../../../../static/img/swiper3.jpg',
      ],
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
    background-color: white;
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
    color: #FFFFFF;
    font-size: 12px;
  }
}
</style>
