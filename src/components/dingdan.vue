<template>
  <div>
    <div id="dingdanbody">
      <div id="left">
        <div id="user">
          <div id="user_img" ><img style="width:120px;height: 120px;border-radius:60px;" src="http://pylgiouvi.bkt.clouddn.com/image%20%286%29.png"/></div>
          <div id="user_name"><p style="font-size: 18px;color: black;">张三</p></div>
        </div>
        <div class="nav">
           <div class="nav_1">
             <a class="el-icon-user-solid" href="">我的课程</a>
           </div>
          <div class="nav_1">
            <a class="el-icon-s-data" href="">我的订单</a>
          </div>
          <div class="nav_1">
            <a class="el-icon-s-goods" href="">我的账户</a>
          </div>
        </div>
      </div>



      <!---->
      <div id="right" >
        <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column prop="date" label="购买的课程" width="180" align="center">
          </el-table-column>
          <el-table-column prop="price" label="金额" width="180" align="center">
          </el-table-column>
          <el-table-column prop="dingdanid" label="订单号" width="180" align="center">
          </el-table-column>
          <el-table-column prop="xiadan" label="下单时间" width="180" align="center">
          </el-table-column>
          <el-table-column prop="address" label="状态" width="180" align="center">
          </el-table-column>

        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          date: '高考自然地理难点精析高考自然地理难点精析',
          price: '20',
          address: '支付成功',
          dingdanid:'12135451321545',
          xiadan:'2019-12-32'
        }, {
          date: '高考自然地理难点精析高考自然地理难点精析',
          price: '20',
          address: '支付成功',
          dingdanid:'12135451321545',
          xiadan:'2019-12-32'
        }, {
          date: '高考自然地理难点精析高考自然地理难点精析',
          price: '20',
          address: '支付成功',
          dingdanid:'12135451321545',
          xiadan:'2019-12-32'
        }, {
          date: '高考自然地理难点精析高考自然地理难点精析',
          price: '20',
          address: '支付成功',
          dingdanid:'12135451321545',
          xiadan:'2019-12-32'
        }]
      }
    }
  }

</script>








<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  #dingdanbody{
    margin: auto;
    width: 1200px;
    height: 800px;
    /*background-color: burlywood;*/
  }
  #left{
    float: left;
    width: 150px;
    height: 450px;
    /*background-color: #80de74;*/
    border: 1px solid #DADADA;
  }
  #user{
    height: 200px;
    /*background-color: aqua;*/
  }
  #user_img{
    width:120px;
    height: 120px;
    border-radius:60px;
    margin-left: 15px;
    padding-top: 10px;
  }
  .nav {
    border-top: 1px solid #DADADA;
    position: relative;
  }
  .nav_1{
    height: 42px;
    background-color: aqua;
  }
  .nav a {
    color: #6c6c6c;
    font-size: 16px;
    width: 100%;
    height: 42px;
    line-height: 42px;
    background: #FDFDFD;
  }
  a, a:hover {
    text-decoration: none;
  }


  #right{
    float: right;
    width: 980px;
    height: 650px;
    /*background-color: #76de88;*/
  }
</style>
