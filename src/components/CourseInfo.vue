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
    <div class="courseinfo"><span>开课时间：{{course.time|formatTime('yyyy-MM-dd')}}</span></div>
    <div class="courseinfo"><span>已报名：{{course.details}}人</span></div>
    <div class="courseinfo"><span>讲师联系邮箱：{{teacher.themail}}</span></div>
    <div id="button"><el-button style="border-radius:0px;background-color: sandybrown;border: 0px; width: 350px;height: 55px">
      <span style="margin-left: 70px;color: white;font-size: large;font-weight: bold"><router-link
        :to="{name:'cart',params:{thname:teacher.thname,coutime:course.coutime,price:course.price,tips:teacher.themail,
        cname:course.cname
      }}" ><a @click="logininterrept">立即报名</a></router-link></span>
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
          axios.get("api/logininterrept").then(res=>{

          },res=>{
              this.$router.push("/login")
          })
      }
    },
    mounted(){
      //根据课程编号查询课程详情
    axios.post("/api/findCourseInfo",{cid:this.$route.params.cid}).then(res=>{
          this.course=res.data;
    })
      //根据教师编号查询教师详情
      axios.post("/api/findTeacherById",{thid:this.$route.params.thid}).then(res=>{
          this.teacher=res.data;
      })
  }
  }
</script>

<style>
  #mainpic{
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
    background-color: steelblue;
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
    background-color: steelblue;
    color: white;
    text-align: center;
    font-size: larger;
    font-weight: bolder;
    margin-top: 50px;
  }
  .courseinfo{
    width: 430px;
    height:35px;
    text-align: left;
    color: white;
    margin-left: 30px;
  }
  #button{
    margin-top: 20px;
    width: 430px;
    height: 70px;
  }
</style>
