<template>
  <div>
    <el-input v-model="keysearch"  id="keysearch"  />
    <el-button type="primary" icon="el-icon-search" @click="keysearchadd">搜索</el-button>
  <el-table
    :data="user"
    border
    style="width: 80%;">
    <el-table-column
      label="图片"
      prop="imageUrl"
      fixed
      width="120">
      <template   slot-scope="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imageUrl"
          :fit="fit"></el-image>
        <el-upload
          class="avatar-uploader"
          action="api/uploaduseima"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i class="el-icon-more"></i>
        </el-upload>
      </template>
    </el-table-column>
    <el-table-column
      prop="uname"
      label="姓名"
      fixed
      width="120">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="pass"
      label="密码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="deleteuser(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<style>
  #keysearch{
    width: 480px;
    background-color: antiquewhite;
  }
</style>
<script>
  import axios from 'axios'
  import ElRow from "element-ui/packages/row/src/row";
  import ElContainer from "../../../node_modules/element-ui/packages/container/src/main";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElImage from "../../../node_modules/element-ui/packages/image/src/main";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {
      ElButton,
      ElImage,
      ElInput,
      ElContainer,
      ElRow},
    data() {
      return {
        imageUrl:'',
        keysearch:'',
        currentPage4: 4,
        page:1,
        size:10,
        user:[],
        total:50
      }
    },
    methods:{
      imageURL123:function (val) {
        alert(val)
      },
      handleClick:function(val){
        location.href.val.imageUrl
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.size=val
        this.query()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page=val
        this.query()
      },
      handleAvatarSuccess(res, file) {
        alert(file.row.uid)
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
      query:function () {
        axios.get("/api/findAlluserBypage?page="+this.page+"&size="+this.size).then(res=>{
          this.user=res.data.list
          this.total=res.data.total
        },res=>{
            this.$messagee.error(res.data)
        })
      },
      keysearchadd:function () {
        axios.get("api/findBykeysearch?keysearch="+this.keysearch+"&page="+this.page+"&size="+this.size).then(res=>{
          this.user=res.data.list
          this.total=res.data.total
        },res=>{
          this.$messagee.error(res.data.mess)
        })
      },
      deleteuser:function (val) {
        axios.get("api/deleteuser?id="+val.uid).then(res=>{
            this.query()
          this.$message.success("delete success")
        },res=>{
            this.$message.error("delete error")
        })
      },
      handleClick:function (val) {
        alert(val.uid)
      }

    },
    mounted(){
      this.query();
    }


  }
</script>
