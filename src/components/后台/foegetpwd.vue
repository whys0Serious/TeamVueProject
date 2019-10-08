<template>
  <div class="top">
    <el-page-header @back="goBack" content="忘记密码">
    </el-page-header>
    <div class="cont">
      <el-form ref="user" :model="user" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="user.name" @blur="suercheck"></el-input>
          <span class="tips">{{tips}}</span>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="user.pass" @blur="suercheck"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="user.code"></el-input>
        </el-form-item>
        <div class="code">
          <span class="code1">{{code1}}</span>
        </div>
        <el-button class="primary" @click="getpwd">提交</el-button>
      </el-form>
    </div>
  </div>
</template>
<style>
  .code1{
    width: 20px;
    height: 20px;
    color: aqua;
    font-size: 40px;
  }
  .cont{
    width: 400px;
    height: 500px;
    margin-top: 100px;
    margin: auto;
  }
  .tips{
    font-size: 12px ;
    color: red;
  }
  .code{
    width: 150px;
    height: 50px;
    text-align:center;
    background-color: antiquewhite;
    margin-left: 300px;
  }
</style>
<script>
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElIcon from "../../../node_modules/element-ui/packages/icon/src/icon";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  import axios from 'axios'
  export default {
    components: {
      ElButton,
      ElIcon,
      ElFormItem,
      ElInput,
      ElForm},
    methods: {
      goBack() {
        this.$router.back()
        console.log('go back');
      },
      suercheck:function () {
        axios.get("api/checkname?name="+this.user.name).then(res=>{
            if(res.data=="用户名重复"){
                this.tips="有用户名正确,请输如验证码"
                axios.get("api/getcodepwd").then(res=>{
                    this.code1=res.data
                })
            }else {
              this.tips="有用户名错误,请重新输入"
              this.code1=""
            }

        })
      },
      getpwd:function () {
        if(this.user.code==this.code1){
          axios.get("api/updatepwd?name="+this.user.name+"$pass="+this.user.pass).then(res=>{

          })
        }else {
            alert("验证码错误")
        }
      }
    },
    data(){
        return{
            user:{
                name:'',
                code:'',
              pass:''
            },
            code1:'',
          tips:'',


        }
    }
  }
</script>
