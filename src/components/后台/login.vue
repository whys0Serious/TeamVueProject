<template>
  <div style="width: 500px;margin-left: 500px;">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row><h3>登陆</h3></el-row>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <div class="regisster">没有账号？请<h3><a href="http://localhost:8080/#/registry" >注册</a></h3></div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')" id="btcode">重置</el-button>
      </el-form-item>  </el-form>
  </div>
</template>
<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElIcon from "../../../node_modules/element-ui/packages/icon/src/icon";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {
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
        ruleForm: {
          pass: '',
          name:''
        },
        user:{
          uname:'',
          pass:'',
        },
//        user:{
//            uname:this.name,
//            email:this.ruleForm.email,
//            sex:this.ruleForm.sex,
//            pass:this.ruleForm.pass,
//        },
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
      submitForm(formName) {
        this.user.uname=this.ruleForm.name
        this.user.pass=this.ruleForm.pass
        console.log(this.user)

        axios.post("api/login",{"uname":this.user.uname,"pass": this.user.pass}) .then(res=>{
          this.$message(res.data)
        })
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

