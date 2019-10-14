<template>
  <div>
    <!--右边展示框-->
    <div id="right">
      <el-table :data="users" style="width: 100%" v-loading="loading">
        <el-table-column prop="cid" label="课程编号" width="120" align="center">
        </el-table-column>
        <el-table-column prop="cname" label="课程名称" width="320" align="center">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>课程名称: {{ scope.row.cname }}</p>
              <p>提示: {{ scope.row.info }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.cname }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="课程售价" width="180" align="center">
        </el-table-column>
        <el-table-column prop="details" label="课程销量" width="180" align="center">
        </el-table-column>
        <el-table-column prop="time" label="日期" width="180" align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课程图片" prop="thpic" width="120" align="center">
          <template   slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.thpic"
              ></el-image>
            <el-upload
              v-loading="loading"
              class="avatar-uploader"
              action="api/uploaduseima"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <i class="el-icon-more" @click="upima(scope.row.cid)"></i>
            </el-upload>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="updateuser(scope.row.cid)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row.cid)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary" round @click="add">添加网课</el-button>
      <el-pagination background layout="prev, pager, next" :page-size="this.params.size" v-on:current-change="changePage" :total="total" :current-page="this.params.page">
      </el-pagination>
    </div>
    <router-view />
  </div>

</template>

<style>
  body {
    margin: 0;
  }
  /*右边展示栏*/
  #right{
    width:1360px;
    height: 600px;
    float: left;
  }
</style>


<script>
  import axios from "axios"
  export default {
    data() {
      return {
        imageUrl:'',
        cid:'',
        users:[],
        total:50,
        params:{
          page:1,
          size:5
        },
        loading: false
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        axios.get("api/upima?id="+this.cid+"&ima="+res).then(res=>{
            this.$message.success("修改图片完成")
          this.query()
        })
        this.loading=false
      },
      upima:function (val) {
       this.cid=val
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
        return /*isJPG && isLt2M*/true;
      },
      updateuser:function(id) {
        this.$router.push({
          path:'/Mannerge/updateCourse/'+id,
        })
      },
      handleDelete:function(id) {
        this.del(id)
      },
      query:function () {
        var url="api/findAll/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          for(var i=0;i<res.data.list.length;i++){
            if(res.data.list[i].time!=null){
              var d=new Date(res.data.list[i].time);
              res.data.list[i].time=d.getFullYear() + '-' + (d.getMonth() + 1)
                + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            }}
          this.users=res.data.list;
          this.total=res.data.total;
        })

      },
      changePage:function (e) {
        this.params.page=e
        this.query();
      },
      add:function(){
        this.$router.push("/Mannerge/addCourse")
      },
      del:function (id) {
        // open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          var url="api/deleteCourse"
          axios.post(url,{cid:id}).then(res=>{
            if (res.data!=null){
              this.query()
            }
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      },

    },
    mounted(){
//      //后台查询
//      var url="http://localhost:8088/findAll"
//      axios.get(url).then(res=>{
//        this.users=res.data;
//
// })
      this.query();
    },
  }
</script>
