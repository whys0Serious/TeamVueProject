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
           <el-popover trigger="hover" placement="top">
             <p>点击修改图片</p>
             <div slot="reference" class="name-wrapper">
               <el-tag size="medium"> <i class="el-icon-edit" style="width: 40px" @click="upima(scope.row.thid)">
               </i></el-tag>
             </div>
           </el-popover>
         </el-upload>
       </template>
     </el-table-column>

     <el-table-column label="操作" width="100px" fixed="right">
       <template slot-scope="scope">
         <el-icon class="el-icon-edit" @click="upima"></el-icon>
         <el-icon class="el-icon-delete" style="margin-left: 30px"></el-icon>
       </template>
     </el-table-column>

   </el-table>
  </div>
</template>
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
        thid:''
          return{
              teacher:[],
          }
      },
    methods:{
      handleimg:function (res,file) {
        axios.get("api/upthima?id="+this.thid+"&img="+res).then(res=>{
            this.query();
        })
      },
      upima:function (res) {
        this.thid=res
      },
          query:function () {
            axios.get("api/finallteacher").then(res=>{
              this.teacher=res.data
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
