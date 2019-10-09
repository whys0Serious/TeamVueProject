<template>
  <div  style="width: 500px;margin-left: 500px;">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row><h3>注册</h3></el-row>
      <el-form-item label="用户头像" prop="name">
        <el-upload
          v-loading="loading"
          class="avatar-uploader"
          action="api/uploaduseima"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="ruleForm.sex" label="男">男</el-radio>
        <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
        <el-button @click="getcode(ruleForm.email)">获取验证码</el-button><span>{{mes}}</span>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" placeholder="验证码区分大小写"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')" id="btcode">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
</style>
<script>
  import axios from 'axios'
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
      }else {
        axios.get("api/checkname?name=" + this.ruleForm.name).then(res => {
          if (res.data == "用户名重复")
            return callback(new Error(res.data));
          else {
            this.$message.success(res.data)
            callback();
          }
        })
      }
      };
      var checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }else {
            axios.get("api/checkmail?mail="+value).then(res=>{
                if(res.data=="邮箱已经被注册"){
                  return callback(new Error('邮箱已经被注册'));
                }else {
                   callback();
                }

            })
        }
      };
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }else {
            axios.get("api/checkemailcode?code="+value+"&mail="+this.ruleForm.email).then(res=>{
                if(res.data=='验证码错误'){
                  return callback(new Error(res.data))
                }else {
                  this.$message.success(res.data)
                  callback();
                }
            },res=>{
              return callback(new Error(res.data))
            })
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        imageUrl: '',
        mes:'',
        ruleForm: {
          pass: '',
          checkPass:'',
          email:'',
          code:'',
          sex:'男',
          name:''
        },
        loading:false,
        user:{
            uname:'',
            email:'',
            pass:'',
            sex:'',
           imageUrl: '',
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
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          code: [
            { validator: checkCode, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ],

        }
      };
    },
    methods: {
        abc:function () {
          alert(this.ruleForm.sex)
        },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.user.imageUrl=res
        this.loading=false
      },
      beforeAvatarUpload(file) {
          this.loading=true
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.user.email=this.ruleForm.email
            this.user.uname=this.ruleForm.name
            this.user.sex=this.ruleForm.sex
            this.user.pass=this.ruleForm.pass
            console.log(this.user)
            axios.post("api/registry1",this.user) .then(res=>{
              this.$message(res.data)
              if(res.data=='注册成功')
                this.$router.push("/login")
            })
          } else {
           this.$message.error('提交失败!!');
            return false;
          }
        });

      },
      getcode:function (mail) {
          if(mail=='')
              this.$message.error("邮箱不能为空")
          else {
           '发送中..'
            axios.get("api/getemailcode?email=" + mail).then(res => {
              if (res.data == "邮箱验证码获取失败"||res.data == "获取验证码出现异常")
                this.mes=res.data
              else{
                this.mes="验证码已经发送(60秒后失效)"
              }
            })
          }
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
    mounted(){
    }
  }
</script>
