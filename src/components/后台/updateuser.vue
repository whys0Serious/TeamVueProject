<template>
  <div style="width: 500px;margin: auto">
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
      <el-form-item prop="name" label="图片">
        <el-input v-model="user.imageUrl" ></el-input>
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
  export default{
    components: {
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
      updateusery:function () {
        axios.post("api/updateusery",this.user).then(res=>{
            this.$message.success(res.data)
            this.$router.push("/Mannerge/userselect")
        })
      }
    }
  }
</script>
