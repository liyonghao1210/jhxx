<template>
  <div id="app">
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
//import引入的组件需要注入到对象中才能使用
import FooterBar from "./components/footerBar/FooterBar"
export default {
  name: 'App',
  components: {
  FooterBar
}

}
</script>

<style>

</style>
