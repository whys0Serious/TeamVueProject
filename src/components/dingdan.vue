<template>
  <div>
    <div id="dingdanbody">
      <div id="left">
        <div id="user">
          <div id="user_img" >
            <el-image style="width:120px;height: 120px;border-radius:60px;" :src="user.imageUrl"></el-image>
          </div>
          <div id="user_name"><p style="font-size: 18px;color: black;">{{user.uname}}</p></div>
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
        <el-table :data="order" style="width: 100%" :row-class-name="tableRowClassName">
          <el-table-column prop="tradcname" label="购买的课程" width="180" align="center">
          </el-table-column>
            <el-table-column prop="tradacount"  label="金额" width="180" align="center">
            </el-table-column>
          <el-table-column prop="tradnum" label="订单号" width="180" align="center">
          </el-table-column>
          <el-table-column prop="tradtime" label="下单时间" width="180" align="center">
          </el-table-column>
           <el-table-column prop="tradstatus" label="状态" width="180" align="center">
            </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

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
        order:[],
        user:'',
        times:''
      }
    },
    mounted(){
      axios.post("/api/findOrderByUid",{uid:this.$route.query.uid}).then(res=>{
        for(var i=0;i<res.data.length;i++){
            if(res.data[i].tradtime!=null){
              var d=new Date(res.data[i].tradtime);
              res.data[i].tradtime=d.getFullYear() + '-' + (d.getMonth() + 1)
                + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            }
        }
            this.order=res.data;
      })

      axios.post("/api/alipay_callback",{app_id:this.$route.query.app_id,
        total_amount:this.$route.query.total_amount,out_trade_no:this.$route.query.out_trade_no}).then(res=>{
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].tradtime!=null){
            var d=new Date(res.data[i].tradtime);
            res.data[i].tradtime=d.getFullYear() + '-' + (d.getMonth() + 1)
              + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
          }
        }
        this.order=res.data;
        window.sessionStorage.setItem("store", this.order);
      })
      axios.get("api/getuseradnima").then(res=>{
          this.user=res.data;
      })
   },
    methods: {
      handleClick(row) {
        axios.post("/api/payback",{tradacount:row.tradacount,tradcname:row.tradcname,tradnum:row.tradnum}).then(res=> {
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
