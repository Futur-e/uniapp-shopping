<template>
  <view class="wrap">
    <view class="key-input">
      <input class="u-border-bottom" type="number" v-model="userPhone" placeholder="手机号"/>
      <input class="u-border-bottom" type="number" v-model="userName" placeholder="用户名"/>
      <input class="u-border-bottom" type="number" v-model="imgUrl" placeholder="上传头像"/>
      <input class="u-border-bottom" type="number" v-model="userPwd" placeholder="密码"/>
      <u-button type="primary" @click="registered">注册</u-button>
    </view>
  </view>
</template>

<script>
import $http from "@/common/api/request";

export default {
  data() {
    return {
      maxlength: 4,
      value: '',

      show: false,
      error: false,
      userPhone:'',
      userPwd:'',
      userName:'',
      imgUrl:''
    };
  },
  computed: {},
  onLoad() {
    // this.getCaptcha()

  },
  methods: {
    // 收不到验证码选择时的选择
    noCaptcha() {
      uni.showActionSheet({
        itemList: ['重新获取验证码', '接听语音验证码'],
        success: function(res) {

        },
        fail: function(res) {

        }
      });
    },
    // change事件侦听
    change(value) {
      // console.log('change', value);
    },
    // 输入完验证码最后一位执行
    finish(value) {
      // console.log('finish', value);
    },
    registered(){
      $http.request({
        url: "/registe",
        method: 'POST',
        data: {
          userPhone:this.userPhone,
          userPwd:this.userPwd,
          imgUrl:this.imgUrl,
          userName:this.userName
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 80rpx;
}

.box {
  margin: 30rpx 0;
  font-size: 30rpx;
  color: #555;
}

.key-input {
  padding: 30rpx 0;
  text {
    display: none;
  }
  .error {
    display: block;
    color: red;
    font-size: 30rpx;
    margin: 20rpx 0;
  }
}

.title {
  font-size: 50rpx;
  color: #333;
}

.key-input .tips {
  font-size: 30rpx;
  color: #333;
  margin-top: 20rpx;
  margin-bottom: 60rpx;
}
.captcha {
  color: red;
  font-size: 30rpx;
  margin-top: 40rpx;
  .noCaptcha {
    display: block;
  }
  .regain {
    display: block;
  }
}
</style>
