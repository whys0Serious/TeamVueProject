<template>
  <div id="app">
    <!--头部整体-->
    <div class="hadder">
      <!--头部内容整体-->
      <div id="hadder">
        <div style="float: left;margin-top: 20px"><el-page-header @back="dasd"></el-page-header></div>
        <div id="logo" ><img style=" width: 139px;height: 34px;margin-top: 13px" src="http://pylgiouvi.bkt.clouddn.com/logo.png"/></div>
        <div id="line" ></div>
        <div class="index"><p><a href="">首页</a></p></div>
        <div class="index"><p><a href="">APR下载</a></p></div>
        <div class="index"><p><a href="">同道计划</a></p></div>
        <!--搜索框-->
        <div class="search">

          <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @keydown.enter="handleSelect" ></el-autocomplete>
          <el-button icon="el-icon-search" size="smile" circle @click="handleSelect"></el-button>
          <!--<div id="src"> <img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/32aac580.png"/></div>-->
        </div>
        <div>

        </div>
        <!--登陆-->
        <div v-if="flag==false">
        <div class="login"><p><a href="http://localhost:8082/#/login">登陆</a></p></div>
        </div>


        <div v-if="flag">
          <el-dropdown>
            <span class="el-dropdown-link" >
              <div>
              {{msg}}
              <el-popover trigger="click" placement="right">
                <span>单机展开</span>
                <div slot="reference">
                   <i class="el-icon-arrow-down" ></i>
                </div>
              </el-popover>
                </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><a href="#" @click="logout" class="login">注销</a></el-dropdown-item>
              <el-dropdown-item><router-link class="login" :to="{name:'dingdan',query:{uid:this.user.uid}}">详细信息</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-image style="width: 50px; height: 50px;border-radius:25px;margin-left: 30px" :src="image" ></el-image>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<style>

</style>
<script>
  import axios from 'axios'
  import ElPopover from "../node_modules/element-ui/packages/popover/src/main";
  import ElPageHeader from "../node_modules/element-ui/packages/page-header/src/main";
  export default {
    components: {
      ElPageHeader,
      ElPopover},
    name: 'App',
    data(){
      return{
        flag:false,
        msg:'',
        image:'',
        user:'',
        state:''
      }
    },
    methods:{
      dasd:function () {
        this.$router.back()
      },
      logout:function () {
        axios.get("api/logout").then(res=>{
          if(res.data=="注销成功")
            this.$router.go(0);
          this.flag=false
        })
      },
      handleSelect:function () {
          axios.get("api/findbycname?cname="+this.state).then(res=>{
            this.$router.push({name:'CourseInfo',params:{cid:res.data.cid,thid:res.data.thid}})
          }).catch((error)=>{
              console.log(error)
          })

      },
      querySearchAsync:function (str,callback) {
        var list=[{}]
        console.log(str)
          axios.get("api/findbyclike?like="+str).then(res=>{
              for(let i of res.data){
                  i.value=i.cname;
              }
              list=res.data
            callback(list)
          }).catch((error)=>{
              console.log(error)
          })
      }
    },
    mounted(){
      axios.get("api/getuseradnima").then(res=>{
        this.msg=res.data.uname
        this.user=res.data;
        this.image=res.data.imageUrl
        this.flag=true
        if(res.data==""||res.data==null){
          this.flag=false
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
    color: rgba(67, 119, 168, 0.99);
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

