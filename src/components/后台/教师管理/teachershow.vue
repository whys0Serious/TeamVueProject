<template>
  <div style="float: left; width: 80%" >
   <el-table :data="teacher" stripe border>
     <el-table-column label="教师名字" prop="thname"></el-table-column>
     <el-table-column label="教师性别" prop="thsex" width="60px"></el-table-column>
     <el-table-column label="教师邮箱" prop="themail"></el-table-column>
     <el-table-column label="教师详细" prop="thdetail"></el-table-column>
     <el-table-column label="教师图片" prop="thpic">
       <template slot-scope="scope">
         <el-image :src="scope.row.thpic" style="width: 80px" ></el-image>
         <el-upload action="api/uploaduseima" :on-success="handleimg" :show-file-list="false">
           <el-popover trigger="hover" placement="left">
             <span >点击修改图片</span>
             <div slot="reference" class="name-wrapper">
               <el-tag size="medium"> <i class="el-icon-edit" style="width: 40px" @click="upima(scope.row.thid)">
               </i></el-tag>
             </div>
           </el-popover>
         </el-upload>
       </template>
     </el-table-column>
     <el-table-column label="操作" width="200px" fixed="right">
       <template slot-scope="scope">
           <el-popover trigger="hover" placement="left" >
             <span style="color: orange">点击修改这条记录</span>
             <div slot="reference" style="color: orange">
               <div class="icon">
                 <i class="el-icon-edit" @click="upth(scope.row.thid)" ></i>
               </div>
             </div>
         </el-popover>
          <el-popover trigger="hover" placement="left">
            <span style="color: red">单击删除</span>
            <div slot="reference" style="color: red">
              <div class="icon">
               <i class="el-icon-delete"  @click="del(scope.row.thid)" style="margin-left: 30px;margin-right: 30px" ></i>
              </div>
            </div>
          </el-popover>
         <el-popover trigger="hover" placement="left">
           <span>单击添加一条记录</span>
           <div slot="reference" style="color: blue">
             <div class="icon">
                <i class="el-icon-document-add"  @click="add()"></i>
             </div>
           </div>
         </el-popover>
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
</template>
<style>
  .icon{
    float: left;
  }
</style>
<script>
  import axios from 'axios'
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
  import ElIcon from "../../../../node_modules/element-ui/packages/icon/src/icon";
  import ElImage from "../../../../node_modules/element-ui/packages/image/src/main";
  import ElUpload from "../../../../node_modules/element-ui/packages/upload/src/index";
  import ElPopover from "../../../../node_modules/element-ui/packages/popover/src/main";
  export default{
    components: {
      ElPopover,
      ElUpload,
      ElImage,
      ElIcon,
      ElButton},
    data(){


          return{
            currentPage:1,
            total:100,
            size:5,
            page:1,
            thid:'',
              teacher:[],
          }
      },

    methods:{
      handleSizeChange:function (val) {
        this.size=val
        this.query();
      },
      handleCurrentChange:function (val) {
          this.page=val
        this.query();
      },
      handleimg:function (res,file) {
        axios.get("api/upthima?id="+this.thid+"&img="+res).then(res=>{
            this.query();
        })
      },
      upth:function (val) {
        this.$router.push({
          path:'/Mannerge/techerupdate/'+val,
        })
      },
      add:function (){
        this.$router.push("/Mannerge/teacheradd")
      },
      del:function (id) {
        // open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          var url="api/deleteteacher"
          axios.post(url,{thid:id}).then(res=>{
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
      upima:function (res) {
        this.thid=res
      },
          query:function () {
            axios.get("api/finallteacher?page="+this.page+'&size='+this.size).then(res=>{
              this.teacher=res.data.list
              this.total=res.data.total
            }).catch((error)=>{
              console.log(error)
            })
          }
    },
    mounted(){
      this.query()
    }

  }
</script>
