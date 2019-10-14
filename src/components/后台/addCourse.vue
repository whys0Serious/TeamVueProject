<template>
  <div>
  <div id="addcouse">
    <el-form :model="course" :rules="rules" ref="course" label-width="100px" class="demo-ruleForm" >
      <!--<el-form ref="form" :model="users" label-width="80px">-->
      <el-form-item label="课程名称" style="width: 20%;margin-left: 35%;padding-top: 1%" prop="cname">
        <el-input v-model="course.cname"></el-input>
      </el-form-item>
      <el-form-item label="上传图片"  style="width: 20%;margin-left: 35%;padding-top: 1%" prop="name">
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
      <el-form-item label="课程售价" style="width: 20%;margin-left: 35%;margin-top: 1%" prop="price">
        <el-input v-model.number="course.price"></el-input>
      </el-form-item>
      <el-form-item label="是否推荐" style="width: 20%;margin-left: 35%;margin-top: 1%" prop="info">
        <el-select v-model="course.info" placeholder="是否暂时强烈推荐">
          <el-option label="推荐" value="推荐"></el-option>
          <el-option label="暂不推荐" value="暂不推荐"></el-option>
          <el-option label="语文" value="语文"></el-option>
          <el-option label="数学" value="数学"></el-option>
          <el-option label="英语" value="英语"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="授课时间" style="width: 22%;margin-left: 35%;margin-top: 1%">
        <el-date-picker v-model="course.time" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="教师名称" style="width: 22%;margin-left: 35%;margin-top: 1%">
        <el-input v-model="course.thname"></el-input>
      </el-form-item>
      <el-form-item label="课时" style="width: 20%;margin-left: 35%;margin-top: 1%" prop="cou_time">
        <el-input v-model.number="course.coutime"></el-input>
      </el-form-item>
      <el-form-item label="年级分类" style="width: 20%;margin-left: 35%;margin-top: 1%" prop="ctid">
        <el-select v-model="course.ctid" placeholder="选择小初高">
          <el-option label="小学" value="1"></el-option>
          <el-option label="初中" value="2"></el-option>
          <el-option label="高中" value="3"></el-option>
        </el-select>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="add()">添加课程</el-button>
        <el-button @click="qx()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  export default {
    components: {ElFormItem},
    data(){
      var checkAge = (rule, value, callback) => { //就是我们的回调函数，需要大家注意的是，这个没有在return的对象中，在data中
        if (!value) {
          return callback(new Error('售价不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          }
          else {
            callback();
          }
        }, 1000);
      };
      var checkKS = (rule, value, callback) => { //就是我们的回调函数，需要大家注意的是，这个没有在return的对象中，在data中
        if (!value) {
          return callback(new Error('课时不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          }
          else {
            callback();
          }
        }, 1000);
      };
      return{
        loading:false,
        course:{
          cname:'',
          price:'',
          info:' ',
          time:'',
          coutime: '',
          thpic:'',
          thname:'',
        },
        rules:{    // 就是我们在el-form中绑定的rules，进行表单的验证
          cname: [   // 我们在el-form-item中绑定的prop，就是这里的name，需要大家注意，这具有唯一性
            { required: true, message: '请输入课程名', trigger: 'blur' },
            // require:是否必填，如不设置，则会根据校验规则自动生成;message:是提示的内容；trigger：是什么事件触发
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            // validator:对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，
            // 并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
          ],
          price: [
            { required: true, validator: checkAge, trigger: 'blur' }
          ],
          cou_time: [
            { required: true, validator: checkKS, trigger: 'blur' }
          ],
          info:[
            {required: true}
          ],
          time:[
            {required: true}
          ],
        }
      }
    },
    methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.course.thpic=res
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
      add:function () {
        var url="api/add";
        axios.post(url,this.course).then(res=>{
          if (res.data!=null) {
            this.$router.push('/Mannerge/selectcou');
          }else {
            alert("添加失败");
          }
        })
      },
      qx:function () {
         this.$router.push('/Mannerge/selectcou');
      }
    }
  }
</script>

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
    margin-right: 140px;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 128px;
    height: 128px;
    line-height: 178px;
    text-align: center;
  }
  #addcouse{
    width:1360px;
    height: 600px;
    float: left;
  }
</style>
