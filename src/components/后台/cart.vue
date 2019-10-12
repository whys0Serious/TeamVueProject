<template>
  <div class="contain">
    <div style="margin-left: 5px;
    margin-top: 28px;
    margin-bottom: 42px;">
      <el-page-header @back="goBack" content="取消订单" style="color: green">
      </el-page-header>
    </div>

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
        prop="course"
        label="课程名称">
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
        prop="name"
        label="课程讲师"
        width="100">
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
    <button id="button" @click="pay()">提交订单</button>
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
  #button{
    left: 160px;
    top: 160px;
    float: right;
    position: relative;
    border: 0px;
    width: 163px;
    background-color:limegreen;
    color: white;
    height: 40px;
    font-size: large;
  }
</style>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
            tableData:[{
              name:this.$route.query.thname,
              time:this.$route.query.coutime,
              price:this.$route.query.price,
              all:this.$route.query.price,
              course:this.$route.query.cname,
              num:1,
            }]
          }
      },
    methods:{
      goBack() {
        this.$router.push("/")
        console.log('go back');
      },
      pay(){
         axios.post("/api/alipay",{price:this.$route.query.price,cname:this.$route.query.cname}).then(res=> {

            if(res.status==200){
                //重定向
              let routerData = this.$router.resolve({path:'/ApplyText',query:{htmls:res.data}})
         this.htmls = res.data
              window.open(routerData.href,'_blank')
         const div = document.createElement('div');
              div.innerHTML = htmls;
              document.body.appendChild(div);
              document.forms [0] .submit();
            }

         })
      }
    }
  }
</script>
