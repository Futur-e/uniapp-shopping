<script>
	export default {
		onLaunch: function() {
      this.$store.commit("initUser")
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
  @import "@/uni_modules/uview-ui/index.scss";
  @import './common/uni.css';
  @import './common/iconfont.css';
  @import 'common/common.scss';
</style>
