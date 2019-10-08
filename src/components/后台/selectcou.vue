<template>
  <div>
    <!--右边展示框-->
    <div id="right">
      <el-table
        :data="users"
        style="width: 100%">

        <el-table-column
          prop="cid"
          label="课程编号"
          width="120" align="center">
        </el-table-column>
        <el-table-column
          prop="cname"
          label="课程名称"
          width="320" align="center">
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
        <el-table-column
          prop="price"
          label="课程售价"
          width="180" align="center">
        </el-table-column>
        <el-table-column
          prop="details"
          label="课程销量"
          width="180" align="center">
        </el-table-column>
        <el-table-column
          prop="time"
          label="日期"
          width="180" align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="课程图片"
          prop="mainpic"
          width="120" align="center">
          <template   slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.mainpic"
            ></el-image>
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
        <!--<el-table-column-->
        <!--prop="mainpic"-->
        <!--label="课程图片"-->
        <!--width="200">-->
        <!--</el-table-column>-->
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="this.params.size"
        v-on:current-change="changePage"
        :total="total" :current-page="this.params.page">
      </el-pagination>
    </div>
    <router-view />
  </div>

</template>

<style>
  /*右边展示栏*/
  #right{
    background-color: honeydew;
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
        users:[],
        total:50,
        params:{
          page:1,
          size:5
        }
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      query:function () {
        var url="api/findAll/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.users=res.data.list;
          this.total=res.data.total;
        })
      },
      changePage:function (e) {
        this.params.page=e
        this.query();
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
