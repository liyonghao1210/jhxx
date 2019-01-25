<!-- 此处写页面标题 -->
<template>
  <div class="shipWrap">
    <!-- 头部 -->
    <el-row :gutter="10">
      <el-col :span="3">
        <div class="grid-content">
          <div class="ipt1">
            <label for="id1">空舱（MT）</label>
            <el-input id="id1" size="mini" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">
          <div class="ipt1">
            <label for="id2">空舱（MT）</label>
            <el-input id="id2" size="mini" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">
          <div class="ipt1">
            <label for="id3">空舱（MT）</label>
            <el-input id="id3" size="mini" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">
          <div class="ipt1">
            <label for="id4">空舱（MT）</label>
            <el-input id="id4" size="mini" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">
          <div class="ipt1">
            <label for="id5">空舱（MT）</label>
            <el-input id="id5" size="mini" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <el-row type="flex" class="searchBtn" justify="end">
          <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
          <el-button @click="dialogFormVisible = true" type="primary" icon="el-icon-plus" size="small">发布船盘</el-button>
        </el-row>
      </el-col>
    </el-row>
    <!-- 内容 -->
    <!-- 弹窗 -->
    <el-dialog title="发布船盘" :visible.sync="dialogFormVisible">
      <el-form :model="form" size="mini">
        <el-form-item label="发布船盘" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "ship",
  components: {},
  data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
};
</script>
<style scoped>
.shipWrap {
  padding: 10px;
  background: #fff;
}
.el-main {
  direction: horizontal;
  padding-left: 15px;
}
.grid-content {
  background: #fff;
}
.grid-content p {
  font-size: 12px;
}

.ipt1 label {
  font-size: 12px;
}
.searchBtn {
  margin-top: 10px;
}
</style>