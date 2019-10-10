<template>
  <div id="right" style="float: inherit;width: 700px;">
    <div id="from">
    <el-table
      :data="user"
      border
      style="width: 80%;">
      <el-table-column
        label="头像"
        prop="imageUrl"
        fixed
        width="220">
        <template   slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.imageUrl"
            ></el-image>
          <el-upload
            class="avatar-uploader"
            action="api/uploaduseima"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i class="el-icon-more" @click="upusima(scope.row.uid)"></i>
          </el-upload>
        </template>
      </el-table-column>
      <el-table-column
        prop="uname"
        label="姓名"
        fixed
        width="220">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="220">
      </el-table-column>
      <el-table-column
        prop="pass"
        label="密码"
        width="220">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮编"
        width="220">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle  @click="updateuseradd(scope.row)" ></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteuser(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
  </div>
</template>

<style>
  #keysearch{
    width: 480px;
    background-color: antiquewhite;
  }
  #from{
    width: 1700px;
  }
  #right{
    float: left;
    height: 800px;
  }
  #add{
    float: left;
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
          uid:'',
        imageUrl:'',
        keysearch:'',
        currentPage: 1,
        page:1,
        size:5,
        user:[],
        total:50
      }
    },
    methods:{
      updateuseradd:function (val) {
          this.$router.push({name:"updateuser",params:{id:val.uid}})
      },
      imageURL123:function (val) {
        alert(val)
      },
      upusima:function (val) {
        this.uid=val
      },
      handleClick:function(val){

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
          axios.get("api/upuserima?id="+this.uid+"&ima="+res).then(res=>{
            this.$message.success("修改图片完成")
            this.query()
          })
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
        this.$router.push({name:'useradd',params:{id:val.uid}})
      }

    },
    mounted(){
      this.query();
    }


  }
</script>

