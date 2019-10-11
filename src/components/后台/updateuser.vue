<template>
  <div style="width: 500px;margin: 30px 300px;float: left">
    <el-page-header content="修改用户" @back="dasds"></el-page-header>
    <el-form
    :model="user"
    >
      <el-form-item prop="name" label="姓名">
        <el-input v-model="user.uname" ></el-input>
      </el-form-item>
      <el-form-item prop="name" label="邮箱">
        <el-input v-model="user.email" ></el-input>
      </el-form-item>
      <el-form-item prop="name" label="密码">
        <el-input v-model="user.pass" ></el-input>
      </el-form-item>
      <el-form-item prop="name" label="性别">
        <el-input v-model="user.sex" ></el-input>
      </el-form-item>
      <el-form-item label="图片"  style="width: 20%;margin-left: 0%;padding-top: 1%" prop="mainpic">
        <el-image
          style="width: 100px; height: 100px"
          :src="user.imageUrl"
          :fit="fit"></el-image>
        <el-upload
          v-loading="loading"
          class="avatar-uploader"
          action="api/uploaduseima"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <i class="el-icon-upload"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-button @click="updateusery">提交</el-button>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  import ElPageHeader from "../../../node_modules/element-ui/packages/page-header/src/main";
  export default{
    components: {
      ElPageHeader,
      ElButton,
      ElInput,
      ElFormItem},
    data(){
          return{
            user:{
                uid:'',
              uname:'',
              email:'',
              pass:'',
              sex:'',
              imageUrl: '',
            },
          }
      },
    mounted(){
          axios.get("api/findById1?id="+this.$route.params.id).then(res=>{
              this.user=res.data
          })
    },
    methods:{
      dasds:function () {
       this.$router.back()
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
      updateusery:function () {
        axios.post("api/updateusery",this.user).then(res=>{
            this.$message.success(res.data)
            this.$router.push("/Mannerge/userselect")
        })
      }
    }
  }
</script>
