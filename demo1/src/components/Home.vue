<!-- 此处写页面标题 -->
<template>
<div class='home'>
  <!-- 轮播 -->
<van-swipe :autoplay="3000" :height="100">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Vue from 'vue'
import { Lazyload } from 'vant'
// options 为可选参数，无则不传
Vue.use(Lazyload);
export default {

components: {

},
data() {
//这里存放数据
return {
active: 0,
images: [
        'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/28240/4/5905/189660/5c481ef1E7538590e/c36d9e167a61eca1.jpg!cr_1125x549_0_72!q70.jpg',
        'https://m.360buyimg.com/mobilecms/s750x366_jfs/t26212/77/2213437089/80983/3f1a8fea/5bfbbd15N74992a26.jpg!cr_1125x549_0_72!q70.jpg',
        'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31201/2/721/164696/5c3f9160E77aeba68/08df82b823c8b86b.jpg!cr_1125x549_0_72!q70.jpg'
      ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
this.$store.state.showBottomNav = true
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.van-swipe-item img{
  width: 100%;
  height: 100px;
}

</style>