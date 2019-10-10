<template>
  <div class="contain">
    <div>
      <el-steps :space="200" :active="3" finish-status="success">
        <el-step title="购买完成"></el-step>
        <el-step title="生成订单"></el-step>
        <el-step title="支付完成"></el-step>
      </el-steps>
    </div>
    <div >
      <div> <el-divider><i class="el-icon-mobile-phone"></i></el-divider></div>
      <h4 >支付成功</h4>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
      data(){
          return{
            message:''
          }
      },
    mounted(){

    }
  }
</script>
