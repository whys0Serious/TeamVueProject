<template>
  <div><h1>das</h1>
    <el-table :data="admin">
      <el-table-column prop="name"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  import axios from 'axios'
export default{
    data(){
        return{
            admin:[]
        }
    },
  mounted(){
        axios.get("api/findalldmin").then(res=>{
            this.admin=res.data
        })
  }
}
</script>
