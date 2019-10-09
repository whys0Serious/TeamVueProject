<template>
  <div id="app">
    <!--头部整体-->
    <div class="hadder">
      <!--头部内容整体-->
      <div id="hadder">
        <div id="logo" ><img style=" width: 139px;height: 34px;margin-top: 13px" src="http://pylgiouvi.bkt.clouddn.com/logo.png"/></div>
        <div id="line" ></div>
        <div class="index"><p><a href="">首页</a></p></div>
        <div class="index"><p><a href="">APR下载</a></p></div>
        <div class="index"><p><a href="">同道计划</a></p></div>
        <!--搜索框-->
        <div class="search">

          <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
          <el-button icon="el-icon-search" size="smile" circle></el-button>
          <!--<div id="src"> <img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/32aac580.png"/></div>-->
        </div>
        <!--登陆-->
        <div v-if="flag2" class="login"><p><a href="http://localhost:8080/#/login">登陆</a></p></div>


          <el-dropdown  class="login" style="margin-bottom: 30px;">
            <span v-if="flag==true" class="el-dropdown-link login" >
              <p ><a style="margin-right: 20px" href="http://localhost:8080/#/login">用户:<font color="red">{{msg}}</font></a></p><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
           <div v-if="flag"> <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><a href="#" @click="logout" class="login">注销</a></el-dropdown-item>
              <el-dropdown-item><a href="http://localhost:8088/logout" class="login">详细信息</a></el-dropdown-item>
            </el-dropdown-menu>
           </div>
        </el-dropdown>

      </div>
    </div>
    <router-view/>
  </div>
</template>
<style>

</style>
<script>
  import axios from 'axios'
 export default {
  name: 'App',
  data(){
      return{
          flag:false,
          msg:'',
          flag2:true,
      }
  },
   methods:{
     logout:function () {
       axios.get("api/logout").then(res=>{
           if(res.data=="注销成功")
               this.$router.go(0);
                this.flag=false
       })
     }
   },
  mounted(){
      axios.get("api/getuseradnima").then(res=>{
          this.msg=res.data
          this.flag=true
          this.flag2=false
        if(res.data==""||res.data==null){
          this.flag=false
          this.flag2=true
        }
      },res=>{
        this.flag=false
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-dropdown-link {
  cursor: pointer;
  color: rgba(168, 35, 72, 0.99);
}
.el-icon-arrow-down {
  font-size: 12px;
}
.hadder{
  width: 1510px;
  height: 60px;
  background-image: linear-gradient(-90deg,#00d87d,#00db9d);
}
#hadder{
  width: 1180px;
  height: 60px;

  margin: auto;
  /*background-color: darkblue;*/
}
#logo{
    width: 145px;
    height: 60px;
    /*background-color: aquamarine;*/
    float: left;
}
#line{
    float: left;
    width: 32px;
    height: 34px;
    border-right: #fff 1px solid;
    margin-top: 13px;
  }
.index{
  float: left;
  width: 100px;
  height: 51px;
  margin-top: 3px;
  /*background-color: aqua;*/
  text-align: center;
}
.index a{
  color: #fff;
  text-decoration: none;
}
.search{
  float: left;
  width: 380px;
  height: 51px;
  margin-top: 4px;
  padding-top: 4px;
}
.search .el-input{
  width: 92%;
}
.el-autocomplete{
  margin-left: 0px;
  letter-spacing:0px;
}
#src{
  width: 30px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0);
  float: left;
  margin-top: 8px;
  margin-left: 80px;
}
.login{
  float: right;
  width: 100px;
  height: 51px;
  margin-top: 3px;
  /*background-color: aqua;*/
  text-align: center;
}
.login a{
  color: #fff;
  text-decoration: none;
}

</style>

