<template>
  <div class="contain">
    <div class="inp">
      <!--<el-row><h3>登陆</h3></el-row>-->
    <!--<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
      <!--<el-form-item label="用户名" prop="name">-->
        <!--<el-input v-model="ruleForm.name" @blur="gtepass" placeholder="输入用户名"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="密码" prop="pass">-->
        <!--<el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="输入密码"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-select v-model="quanxian" placeholder="请选择登陆类型">-->
          <!--<el-option value="用户"></el-option>-->
          <!--<el-option value="管理员"></el-option>-->
          <!--<el-option value="superman"></el-option>-->
        <!--</el-select>-->
      <!--</el-form-item>-->
      <!--<el-checkbox v-model="checked" style="margin-left: 60px">记住密码</el-checkbox>-->
      <!--<span class="pwd"><a href="http://localhost:8080/#/foegetpwd">忘记密码</a></span>-->
      <!--<div class="regisster">没有账号？请<h3><el-link href="http://localhost:8080/#/registry"  type="primary">注册</el-link></h3></div>-->
      <!--<el-form-item>-->
        <!--<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
        <!--<el-button @click="resetForm('ruleForm')" id="btcode">重置</el-button>-->
      <!--</el-form-item>  </el-form>-->
        <div class="logina">
          <div style="margin-top: 6%;">
          <el-row><h3>登 陆</h3></el-row>
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
          <div class="regisster">没有账号？请<h3><el-link href="http://localhost:8080/#/registry"  type="primary">注册</el-link></h3></div>
          <el-form-item style="margin-right: 12%">
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')" id="btcode">重置</el-button>
          </el-form-item>  </el-form>
          </div>
        </div>



    </div>



    <!--底部-->
    <div class="clasfoot">
      <img style="width: 100%;height: 300px;" src="http://pylgiouvi.bkt.clouddn.com/htmlfoot.jpg"/>
    </div>
  </div>
</template>
<style>
  .regisster{
    margin-left: 40px;
    margin-top: 40px;
  }
  .pwd{
    margin-left: 130px;
    font-size: 12px;

  }
  .inp{
    margin: auto;
    width: 500px;
    height: 700px;

  }
  .clasfoot{
    width: 100%;
    height: 300px;
    margin-top: 20px;
    background-color: blueviolet;
  }
  .contain{
    /*background-image: url("../image/login.jpeg");*/
    height: 1000px;
    margin-left: auto;
    background-color: #f5f5f5;
  }
  .logina{
    width: 530px;
    height: 550px;
    background-color: white;
    margin-top: 50px;
    float: left;
    box-shadow:0px 0px  10px 1px #aaa;
  }
  .el-input{
    width: 70%;
    margin-right: 60px;
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
          name:'',
          pass: ''
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

