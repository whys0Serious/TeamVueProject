<template>
  <div style="width: 500px;float: left; margin: 30px 200px" >
    <el-form :model="teacher" :rules="rules" ref="teacher">
      <el-form-item label="名字" width="100px"><el-input type="text" v-model="teacher.thname"></el-input></el-form-item>
      <el-form-item label="性別" width="100px"><el-radio label="男" v-model="teacher.thsex"></el-radio>
        <el-radio label="女" v-model="teacher.thsex"></el-radio></el-form-item>
      <el-form-item label="邮箱" width="100px"><el-input type="text" v-model="teacher.themail"></el-input></el-form-item>
      <el-form-item label="销量" width="100px"><el-input type="text" v-model="teacher.thdetail"></el-input></el-form-item>
      <el-form-item label="图片" width="100px">
          <el-upload action="api/uploaduseima" :before-upload="beforeupload" :on-success="uploadsuccess"
                     :show-file-list="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar"><div class="hadas">
            <el-icon class="el-icon-upload"></el-icon>
          </div>
      </el-upload></el-form-item>
    </el-form>
    <el-button type="">adsa</el-button>
  </div>
</template>
<style>
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
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
  .hadas{
    width: 30px;
    height: 30px;
    border: solid 1px;
    box-shadow:  inset 2px 2px 2px 1px #48e3ff;
  }
  .hadas:hover{
    position: relative;
    top: -3px;
    transition: 1500ms;
  }

</style>
<script>
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
  import ElIcon from "../../../../node_modules/element-ui/packages/icon/src/icon";
  export default{
    components: {
      ElIcon,
      ElButton},
    data(){
        return{
          imageUrl:'',

            teacher:{
              thname:'',
              thsex:'',
              thdetail:'',
              themail:'',
              thpic:'',
            },
          rules:{
            thname:[
              {required:true,message:'输入名字',trigger:'blur'},
            ],
          },

          }
      },
    methods:{
      uploadsuccess:function (res,file) {
          this.imageUrl=URL.createObjectURL(file.raw)
        this.teacher.thpic=res
      },
      beforeupload:function () {

      }
    }
  }
</script>
