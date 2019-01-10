<template>
  <div id="app" class="dom">
    <el-container>
      <Asides/>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
         <Foot />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Asides from './components/asides'
import Foot from './components/foot'

export default {
  name: 'App',
  components: {
    Asides,
    Foot
  }
}
</script>

<style>
/* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */

th, td { /* table elements 表格元素 */
margin: 0;
padding: 0;
}
.dom{
    min-height: 100vh;
    display: flex;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
  
  .el-aside {
    background-color: #353544;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
