<!-- 此处写页面标题 -->
<template>
  <div class="login">
    <div class="logoWrap">
      <img class="logoImg" src="../../assets/logo.png" alt srcset>
    </div>
    <van-cell-group>
      <van-field
        required
        clearable
        label="用户名"
        icon="question-o"
        placeholder="请输入用户名"
        @click-icon="$toast('请输入用户名')"
      />

      <van-field type="password" label="密码" placeholder="请输入密码" required/>
    </van-cell-group>
    <div class="btnWrap">
        <router-link :to="{name:'Home'}">
            <van-button type="primary" size="large">登录</van-button>
        </router-link>
        <van-button size="large">注册</van-button>
    </div>
    <van-loading type="spinner" color="black" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$store.state.showBottomNav = false
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
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.logoWrap {
  text-align: center;
  margin-top: 80px;
}
.logoImg {
  width: 60px;
  height: 60px;
}
.van-cell-group{
    margin: 0px 15px;
    margin-top: 50px;
    margin-bottom: 20px;
}
.btnWrap{
    margin: 10px 15px;
    margin-top: 100px;
}
.van-button--large{
    margin-bottom: 5px;
}
.van-loading--black {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    padding: 10px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>