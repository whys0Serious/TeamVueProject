<template>
  <div>
<div id="mainpic">
  <div id="left">
    <el-image  :src="teacher.thpic"></el-image>
  </div>
  <div id="right">
    <div id="coursetitle"><span>{{course.cname}}</span></div>
    <div class="courseinfo"><span>主讲老师：{{teacher.thname}}</span></div>
    <div class="courseinfo"><span>课程时长：{{course.coutime}}</span></div>
    <div class="courseinfo"><span>开课时间：{{course.time}}</span></div>
    <div class="courseinfo"><span>已报名：{{course.details}}人</span></div>
    <div class="courseinfo"><span>讲师联系邮箱：{{teacher.themail}}</span></div>
    <div id="button"><el-button style="border-radius:0px;background-color: sandybrown;border: 0px; width: 350px;height: 55px">
      <span style="margin-left: 80px;color: white;font-size: large;font-weight: bold"><router-link
        :to="{name:'cart',query:{thname:teacher.thname,coutime:course.coutime,price:course.price,tips:teacher.themail,
        cname:course.cname
      }}" ><a @click="logininterrept" style="color:white;" class="a">立即报名</a></router-link></span>
      <span style="color:yellow;font-weight: bolder;margin-left:70px;font-size: large">￥{{course.price}}</span></el-button></div>
  </div>
</div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
            course:{cid:'',cname:'',price:'',details:'',
            info:'',time:'',mainpic:'',coutime:''},
            teacher:{thid:'',thname:'',thsex:'',themail:'',
              thdetail:'',thpic:''}
          }
      },
    methods:{
      logininterrept:function () {
          axios.get("api/logininterrept1").then(res=>{

          },res=>{
              this.$router.push("/login")
          })
      }
    },
    mounted(){
      //根据课程编号查询课程详情
    axios.post("/api/findCourseInfo",{cid:this.$route.query.cid}).then(res=>{
      var d=new Date(res.data.time);
      res.data.time=d.getFullYear() + '-' + (d.getMonth() + 1)
        + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
          this.course=res.data;
    })
      //根据教师编号查询教师详情
      axios.post("/api/findTeacherById",{thid:this.$route.query.thid}).then(res=>{
          this.teacher=res.data;
      })
  }
  }
</script>

<style scoped>
  .a{
    text-decoration: none;
  }
  #mainpic{
    margin-top: 30px;
    width: 1510px;
    height: 500px;
    background-color: white;
    box-shadow: 0px 10px 10px -15px #5E5E5E;
  }

  #left{
    width: 1080px;
    height:500px;
    float: left;
    background-color: blue;
  }
  #right{
    width: 430px;
    height: 500px;
    float: left;
    background-color: #00d87d;
  }
  .el-image {
    float: left;
    display: inline-block;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  #coursetitle{
    width: 430px;
    height: 130px;
    background-color: #00d87d;
    color: white;
    text-align: center;
    font-size: x-large;
    margin-top: 50px;
  }
  .courseinfo{
    width: 430px;
    height:35px;
    text-align: left;
    font-size: medium;
    color: white;
    margin-left: 30px;
  }
  #button{
    margin-top: 20px;
    width: 430px;
    height: 60px;
  }
</style>
