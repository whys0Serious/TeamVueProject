<template>
  <div class="contain">
    <div class="inp">
      <el-row><h3>登陆</h3></el-row>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" @blur="gtepass" placeholder="输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="quanxian" placeholder="请选择登陆类型">
          <el-option value="用户"></el-option>
          <el-option value="管理员"></el-option>
          <el-option value="superman"></el-option>
        </el-select>
      </el-form-item>
      <el-checkbox v-model="checked" style="margin-left: 60px">记住密码</el-checkbox>
      <span class="pwd"><a href="http://localhost:8080/#/foegetpwd">忘记密码</a></span>
      <div class="regisster">没有账号？请<h3><a href="http://localhost:8080/#/registry" >注册</a></h3></div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')" id="btcode">重置</el-button>
      </el-form-item>  </el-form>
    </div>
  </div>
</template>
<style>
  .regisster{
    margin-left: 90px;
    margin-top: 40px;
  }
  .pwd{
    margin-left: 300px;
    font-size: 12px;

  }
  .inp{
    margin: auto;
    width: 500px;
    height: 400px;
  }
  .contain{
    /*background-image: url("../image/login.jpeg");*/
    height: 650px;
    margin-left: auto;
    background-color: aliceblue;
  }
</style>
<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElIcon from "../../../node_modules/element-ui/packages/icon/src/icon";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  import axios from 'axios'
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  export default {
    components: {
      ElOption,
      ElFormItem,
      ElCheckbox,
      ElButton,
      ElIcon,
      ElRow},
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        quanxian:'',
        checked:true,
        ruleForm: {
          pass: '',
          name:''
        },
        user:{
          uname:'',
          pass:'',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ],

        }
      };
    },
    methods: {
      gtepass:function () {
        axios.get("api/gtepasswod?name="+this.ruleForm.name).then(res=>{
            this.ruleForm.pass=res.data
        })
      },
      submitForm(formName) {
        this.user.uname=this.ruleForm.name
        this.user.pass=this.ruleForm.pass
        console.log(this.user)
        if(this.quanxian=="用户"){
          axios.post("api/login",{"uname":this.user.uname,"pass": this.user.pass}) .then(res=>{
            this.$message(res.data)
            if(res.data=="登陆成功"){
              if(this.checked){
                axios.get("api/rememberme?name="+this.user.uname+"&pass="+this.user.pass,) .then(res=>{
                })
              }
              this.$router.push("/")
              this.$router.go(0);
            }
          })
        }else if(this.quanxian=="管理员"){
          axios.post("api/login",{"uname":this.user.uname+"管理员",pass: this.user.pass}) .then(res=>{
            this.$message(res.data)
            if(res.data=="登陆成功"){
              if(this.checked){
                axios.get("api/rememberme?name="+this.user.uname+"&pass="+this.user.pass,) .then(res=>{
                })
              }
              this.$router.push("/Mannerge")
              this.$router.go(0);
            }
          })
        }else if(this.quanxian=="superman"){
          axios.post("api/login",{uname:this.user.uname+"superman","pass": this.user.pass}) .then(res=>{
            this.$message(res.data)
            if(res.data=="登陆成功"){
              if(this.checked){
                axios.get("api/rememberme?name="+this.user.uname+"&pass="+this.user.pass,) .then(res=>{
                })
              }
              this.$router.push("/Mannerge")
              this.$router.go(0);
            }
          })
        }

        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message.error('提交成功!!');
          } else {
            this.$message.error('提交失败!!');
            return false;
          }
        });

      },
      getcode:function (mail) {
        if(mail=='')
          this.$message.error("邮箱不能为空")
        else
          axios.get("api/getemailcode?email="+mail).then(res=>{
            alert(res.data)
          })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

