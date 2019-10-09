<template>
  <div class="contain">
    <el-page-header @back="goBack" content="忘记密码">
    </el-page-header>
    <div>
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="购买完成"></el-step>
        <el-step title="生成订单"></el-step>
        <el-step title="支付完成"></el-step>
      </el-steps>
    </div>
    <div >
      <div> <el-divider><i class="el-icon-mobile-phone"></i></el-divider></div>
      <h4 >确认订单信息</h4>
    </div>
    <div>
      <div> <el-divider></el-divider>
      </div>    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="课程讲师"
        width="100">
      </el-table-column>
      <el-table-column
        prop="time"
        label="课时总量"
        width="100">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="tips"
        label="优惠方式">
      </el-table-column>
      <el-table-column
        prop="all"
        label="小计">
      </el-table-column>
    </el-table>

    </div>
    <div class="cash">
      付款金额：
      <div><h3>RMB</h3><span style="color: #3b111d;font-size: 30px;margin-left: 20px">{{this.$route.params.price}}.00元</span></div>
    </div>
    <el-button style="float: right;position: relative;left: 160px;top: 160px;text-align: left;background-color: #ffdd70">
      <a href="api/alipay">确认提交订单</a></el-button>
  </div>
</template>
<style>
  .cash{
    width: 150px;
    height: 130px;
    margin-top: 20px;
    box-shadow:0px 0px 5px 0px red;/*增加阴影效果*/
    float: right;
    font-weight: bolder ;
  }
 .contain{
   width: 700px;
   margin: auto;
 }
  span{
    margin-left: 50px;
  }
</style>
<script>
  export default{
      data(){
          return{
            tableData:[{
              name:this.$route.params.thname,
              time:this.$route.params.coutime,
              price:this.$route.params.price,
              all:this.$route.params.price,
              tips:'10元优惠券',
              num:1,
            }]
          }
      },
    methods:{
      goBack() {
        this.$router.push("/")
        console.log('go back');
      },
    },
    mounted(){
    }
  }
</script>
