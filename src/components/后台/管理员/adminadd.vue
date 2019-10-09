<template>
  <div style="width: 500px;margin: auto" >
    <el-form :model="admin">
      <el-form-item v-model="admin.name" label="姓名">
        <el-input class="inpuaddmin"></el-input>
      </el-form-item>
      <el-form-item v-model="admin.pass" label="密码">
        <el-input class="inpuaddmin"></el-input>
      </el-form-item>
      <el-form-item v-model="admin.sex" label="性别">
        <el-input class="inpuaddmin"></el-input>
      </el-form-item>
      <el-form-item v-model="admin.email" label="邮箱">
        <el-input class="inpuaddmin"></el-input>
      </el-form-item>
      <el-form-item v-model="admin.birth" label="出生日期">
        <el-input class="inpuaddmin"></el-input>
      </el-form-item>
      <el-form-item v-model="admin.addr" label="住址">
        <el-input class="inpuaddmin"></el-input>
      </el-form-item>
      <el-form-item v-model="admin.self" label="自我描述">
        <el-input class="inpuaddmin"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="add">添加</el-button>
  </div>
</template>
<style>
  .inpuaddmin{
  }
</style>
<script>
  import axios from 'axios'
  import ElInput from "../../../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {
      ElButton,
      ElInput},
    data(){
          return{
              admin:{
                  name:'',
                  pass:'',
                  sex:'',
                  email:'',
                  birth:'',
                  addr:'',
                  self:'',
              }
          }
      },
    methods:{
          add:function () {
              axios.post("api/addadmin",{admin:this.admin}).then(res=>{
                  if(res.data)
                      this.$message.success("添加成功")
              })
          }
    }
  }
</script>
