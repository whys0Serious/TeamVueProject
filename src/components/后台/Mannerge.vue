<template>

  <div id="big">

    <!--左边侧边栏-->
    <div id="left"style="float: left;">
      <el-row class="tac">
        <el-col :span="20">
          <h5>后台查询</h5>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>菜单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1"><router-link to="/Mannerge/selectcou">商品查询</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/Mannerge/userselect">用户查询</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/Mannerge/teachershow">教师查询</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/Mannerge/data">数据查询</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <router-view />
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      methods:{
        handleOpen:function () {
  },
        handleClose:function () {

        }
      },
    mounted(){
          axios.get("api/getuseradnima").then(res=>{
              if(res.data==null||res.data==""){
                  this.$router.push("/login")
              }
          })
          axios.get("api/logininterrept").then(res=>{
          },(error)=>{
              if(error.response.status==401){
                this.$message.error("没有权限...~")
                this.$router.back()
              }

          })
    }

  }
</script>
<style>
  /*总的div*/
  #big{
    /*background-color: #fefff9;*/
    width:1510px;
    height: 900px;
  }
  /*左边菜单*/
  #left{
    background-color:linen;
    width: 150px;
    height: 815px;
    float: left;
  }
  /*左边菜单宽度*/
  .el-col-20{
    width: 100%;
  }
</style>


