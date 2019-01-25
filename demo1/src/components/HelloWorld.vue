<template>
  <div class="hello">
    <van-search placeholder="请输入搜索关键词"  />
      <router-link :to="{name:'Home'}">
        <van-button size="small" type="primary">主要按钮</van-button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
