<template>
  <div>
    <div id="title1">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"><h2>小学</h2></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-link type="info" :underline="false" @click="searchAll">精选</el-link></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-link type="info" :underline="false" @click="searchChinese">语文</el-link></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-link type="info" :underline="false" @click="searchMath">数学</el-link></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-link type="info" :underline="false" @click="searchEnglish">英语</el-link></div></el-col>
      </el-row>
    </div>
    <div id="showPic">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in pic" :key="pic.pic_num">
          <h3 class="medium">
            <img width="900px" height="300px" ref="300px":src="item.pic1"/></h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div v-if="show" >
      <div class="title2" >
        <h2 style="float: left">课程精选</h2>
      </div>
      <div  v-for="(c,index) in course1">
        <!--携带课程编号，图片编号和教师编号跳转课程详情页发起查询-->
        <a href="#"><router-link :to="{name:'CourseInfo',params:{cid:c.cid,thid:c.thid,pic_num:c.picnum}}">
          <div class="showcarddfoot">
            <div v-if="c.ctid==1">
              <span class="_8-iAp" >小学</span>
            </div>
            <div v-if="c.ctid==2">
              <span class="_8-iAp" >初中</span>
            </div>
            <div v-if="c.ctid==3">
              <span class="_8-iAp" >高中</span>
            </div>
            <h1 class="classname">{{c.cname}}</h1>
            <div class="classtime">时间：{{c.time}} <ins>|</ins> {{c.coutime}}课时</div>
            <div class="tcher">
              <el-image class="tcherimg" :src="c.thpic"></el-image>
              <span>{{c.thname}}</span>
            </div>
            <div class="foot">
              <div class="buy">
                <span>已有{{c.details}}人购买</span>
              </div>
              <div class="price">
                <span class="buyprice">{{c.price}}</span>
              </div>
            </div>
          </div>
        </router-link></a>
      </div>
    </div>

    <div v-if="Cshow">
      <div class="title2" >
        <h2 style="float: left">语文</h2>
      </div>
      <div  v-for="(m,index) in chinese">
        <a href="#"><router-link :to="{name:'CourseInfo',params:{cid:m.cid,thid:m.thid,pic_num:m.picnum}}">
          <div class="showcarddfoot">
            <div v-if="m.ctid==1">
              <span class="_8-iAp" >小学</span>
            </div>
            <div v-if="m.ctid==2">
              <span class="_8-iAp" >初中</span>
            </div>
            <div v-if="m.ctid==3">
              <span class="_8-iAp" >高中</span>
            </div>
            <h1 class="classname">{{m.cname}}</h1>
            <div class="classtime">时间：{{m.time}} <ins>|</ins> {{m.coutime}}课时</div>
            <div class="tcher">
              <el-image class="tcherimg" :src="m.thpic"></el-image>
              <span>{{m.thname}}</span>
            </div>
            <div class="foot">
              <div class="buy">
                <span>已有{{m.details}}人购买</span>
              </div>
              <div class="price">
                <span class="buyprice">{{m.price}}</span>
              </div>
            </div>
          </div>
        </router-link>
        </a>
      </div>

    </div>

    <div v-if="Mshow">
      <div class="title2" >
        <h2 style="float: left">数学</h2>
      </div>
      <div  v-for="(c,index) in math">
        <a href="#"><router-link :to="{name:'CourseInfo',params:{cid:c.cid,thid:c.thid,pic_num:c.picnum}}">
          <div class="showcarddfoot">
            <div v-if="c.ctid==1">
              <span class="_8-iAp" >小学</span>
            </div>
            <div v-if="c.ctid==2">
              <span class="_8-iAp" >初中</span>
            </div>
            <div v-if="c.ctid==3">
              <span class="_8-iAp" >高中</span>
            </div>
            <h1 class="classname">{{c.cname}}</h1>
            <div class="classtime">时间：{{c.time}} <ins>|</ins> {{c.coutime}}课时</div>
            <div class="tcher">
              <el-image class="tcherimg" :src="c.thpic"></el-image>
              <span>{{c.thname}}</span>
            </div>
            <div class="foot">
              <div class="buy">
                <span>已有{{c.details}}人购买</span>
              </div>
              <div class="price">
                <span class="buyprice">{{c.price}}</span>
              </div>
            </div>
          </div>
        </router-link>
        </a>
      </div>

    </div>

    <div v-if="Eshow">
      <div class="title2" >
        <h2 style="float: left">英语</h2>
      </div>
     <div v-for="(e,index) in English">
       <a href="#" ><router-link :to="{name:'CourseInfo',params:{cid:e.cid,thid:e.thid,pic_num:e.picnum}}">
         <div class="showcarddfoot">
           <div v-if="e.ctid==1">
             <span class="_8-iAp" >小学</span>
           </div>
           <div v-if="e.ctid==2">
             <span class="_8-iAp" >初中</span>
           </div>
           <div v-if="e.ctid==3">
             <span class="_8-iAp" >高中</span>
           </div>
           <h1 class="classname">{{e.cname}}</h1>
           <div class="classtime">时间：{{e.time}} <ins>|</ins>{{e.coutime}} 课时</div>
           <div class="tcher">
             <el-image class="tcherimg" :src="e.thpic"></el-image>
             <span>{{e.thname}}</span>
           </div>
           <div class="foot">
             <div class="buy">
               <span>已有{{e.details}}人购买</span>
             </div>
             <div class="price">
               <span class="buyprice">{{e.price}}</span>
             </div>
           </div>
         </div>
       </router-link>
       </a>
     </div>
    </div>

    <div class="four" v-if="showAll">
      <div id="all" >
        <h2 style="float: left">全部课程</h2>
      </div>
      <div  v-for="(c,index) in course">
        <a href="#"><router-link :to="{name:'CourseInfo',params:{cid:c.cid,thid:c.thid,pic_num:c.picnum}}">
          <div class="showcarddfoot">
            <div v-if="c.ctid==1">
              <span class="_8-iAp">小学</span>
            </div>
            <div v-if="c.ctid==2">
              <span class="_8-iAp" >初中</span>
            </div>
            <div v-if="c.ctid==3">
              <span class="_8-iAp" >高中</span>
            </div>
            <h1 class="classname">{{c.cname}}</h1>
            <div class="classtime">时间：{{c.time}} <ins>|</ins>{{c.coutime}}课时</div>
            <div class="tcher">
              <el-image class="tcherimg" :src="c.thpic"></el-image>
              <span>{{c.thname}}</span>
            </div>
            <div class="foot">
              <div class="buy">
                <span>已有{{c.details}}人购买</span>
              </div>
              <div class="price">
                <span class="buyprice">{{c.price}}</span>
              </div>
            </div>
          </div>
        </router-link>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default{
      data(){
          return{
//              course:[{cid:3,pic:"http://pxwjw0muw.bkt.clouddn.com/Fgs2GzDdRoySqC_4wX26Llyb6mNx"},
//                {cid:2,pic:"http://pxwjw0muw.bkt.clouddn.com/FiJm-QzVrWJC5swuj52bzHwPSNm-"}],
                   course:[],
                    course1:[],
                    chinese:[],
                    math:[],
                    English:[],
//                    pic:[{pic_num:1,pic1:"http://pxwjw0muw.bkt.clouddn.com/FiJm-QzVrWJC5swuj52bzHwPSNm-"}]
                      pic:[],
                  show:true,
                  showAll:true,
                  Cshow:false,
                  Mshow:false,
                  Eshow:false
          }
      },
    mounted(){
          axios.get("api/findShowPic/show").then(res=>{
//              console.log(res.data)
              this.pic=res.data;
          })
      axios.get("api/findShow/index/1").then(res=>{
        console.log(res.data)
          this.course1=res.data;
      })
      axios.post("api/findCourseByName",{cname:"语文",ctid:1}).then(res=>{
        console.log(res.data)
        this.chinese=res.data;
      })
      axios.post("api/findCourseByName",{cname:"数学",ctid:1}).then(res=>{
        console.log(res.data)
        this.math=res.data;
      })
      axios.post("api/findCourseByName",{cname:"英语",ctid:1}).then(res=>{
        console.log(res.data)
        this.English=res.data;
      })
      axios.get("api/findAllCourse/1").then(res=>{
        console.log(res.data)
        this.course=res.data;
      })
    },
    methods:{
      searchChinese:function () {
            this.Eshow=false;
            this.Mshow=false;
            this.Cshow=true
            this.showAll=false
            this.show=false
        },
      searchMath:function () {
          this.Cshow=false;
          this.Eshow=false;
        this.Mshow=true
        this.showAll=false
        this.show=false
      },
      searchEnglish:function () {
          this.Cshow=false;
          this.Mshow=false;
          this.Eshow=true
          this.showAll=false
         this.show=false
      },
      searchAll:function () {
        this.showAll=true
        this.show=true
        this.Cshow=false;
        this.Mshow=false;
        this.Eshow=false;
      }
    }

  }
</script>
<style>

  #all{
    width: 1000px;
    height: 100px;
    margin-top: 655px;
    margin-left: 90px;
  }
 .price{
   color: orange;
   font-size: larger;
 }
  #title1{
    height: 100px;
    margin-top: 17px;
  }
  .title2{
    margin-left:64px;
    height: 75px;
  }
  .el-col-6 {
    width: 200px;
  }
  .el-col-offset-0 {
    margin-left: 0%;
  }
  .el-col-offset-1 {
    margin-left: 3%;
  }
  .el-row {
    margin-left: 75px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: white;
  }
  .details{
    font-size:larger ;
    font-weight: bolder;
    /*margin-left: 1px;*/
  }
  .el-link {
    margin-top: 30px;
    font-weight: 500;
    font-size: 16px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

 #daohang{
   width: 1503px;
   height: 60px;
   background-color: #fff;
   box-shadow: 0px 10px 10px -15px #5E5E5E;
 }
 .daohang{
   width: 1180px;
   height: 60px;

   margin: auto;
 }
 .fenlei{
   width: 80px;
   height: 50px;
   text-align: center;
   float: left;
   font-size: 14px;

   line-height: 60px;
 }
 .fenlei a{
   color: #818a92;
   text-decoration: none;
 }
 /*轮播图*/
 .el-carousel__item h3 {
   color: #475669;
   font-size: 14px;
   opacity: 0.75;
   line-height: 150px;
   margin: 0;
 }

 .el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
 }

 .el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
 }
 #lbt{
   width: 1180px;
   height: 450px;
   /*background-color: coral;*/
   margin: auto;
 }
 #hotclass{
   width: 1180px;
   height: 340px;
   margin: auto;
   /*background-color: coral;*/
 }
 .hot_top{
   float: left;
   /*background-color: aqua;*/
   height: 60px;
   text-align: left;
   font-size: 26px;
   width: 1180px;
   line-height: 60px;
 }
 .hot_top h3{
   margin: 0px;
   padding: 0px;
 }
 .cardd{
   float: left;
   margin-right: 30px;
   width: 270px;
   height: 280px;
   border: 1px solid #ebebeb;
 }
 .cardd_right{
   float: right;
   width: 270px;
   height: 280px;
   /*background-color: burlywood;*/
   border: 1px solid #ebebeb;
 }
 /*鼠标经过进行浮动*/
 .cardd:hover{
   position:relative;/*改成相对定位*/
   top:-5px;/*向上挪动5px*/
   box-shadow:0px -3px 0px 0px #2dffc3;/*增加阴影效果*/
   transition:all 500ms/*动画过渡*/
 }

 .cardd_right:hover{
   position:relative;/*改成相对定位*/
   top:-5px;/*向上挪动5px*/
   box-shadow:0px -3px 0px 0px #2dffc3;/*增加阴影效果*/
   transition:all 500ms/*动画过渡*/
 }
 /*推荐模块*/
 ._8-iAp {
   display: block;
   height: 18px;
   width: 60px;
   background: #a7b0b8;
   border-radius: 2px;
   font-size: 12px;
   color: #fff;
   line-height: 18px;
   text-align: center;
   margin-bottom: 10px;
   margin-top: 20px;
   margin-left: 17px;
 }

 /*课程名称*/
 .classname {
   font-size: 18px;
   font-weight: 600;
   color: #31404c;
   line-height: 1.2;
   height: 42px;
   margin-bottom: 5px;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
   margin-top: 10px;
   margin-left: 17px;
   text-align:left;
   width: 240px;
 }
 .classtime{
   font-size: 12px;
   color: #818a92;
   font-weight: 300;
   text-align: left;
   margin-left: 17px;
 }
 .tcher{
   display: inline-block;
   text-align: center;
   margin: 25px 190px 0 0;
 }
 .tcherimg {
   width: 40px;
   height: 40px;
   border-radius: 40px;
   border: 1px solid #f5f5f5;
   margin-bottom: 5px;
 }
 .tcher span {
   display: block;
 }
 .foot, .tcher span {
   font-size: 12px;
   color: #818a92;
 }
 .foot {
   border-top: 1px solid #dbdbdb;
   padding-top: 16px;
   position: relative;
   font-weight: 400;
   margin-top: 20px;
   margin-left: 17px;
   width: 240px;
 }
 .buy{
   overflow: hidden;
 }
 .buy span{
   margin-right: 150px;
 }
 .price{
   position: absolute;
   right: 0;
   bottom: 0;
 }
 .buyprice {
   font-size: 22px;
   color: #ff773a;
 }
 .fenleishow{
   margin: auto;
   width: 1180px;
   /*background: #98def5;*/
   height: 2040px;
 }
 .xue{
   float: left;
   width: 1180px;
   height: 640px;
   /*background-color: burlywood;*/
   margin-top: 30px;
 }
 .classhow{
   float: left;
   width:1180px;
   height: 600px;
   /*background-color: blueviolet;*/
 }
 .xueimg{
   float: left;
   width: 575px;
   height: 272px;
   /*background-color: deeppink;*/
 }
 .xueimg:hover{
   position:relative;/*改成相对定位*/
   top:-5px;/*向上挪动5px*/
   box-shadow:0px 0px 5px 0px #c1b6bd;/*增加阴影效果*/
   transition:all 500ms/*动画过渡*/
 }
 .showcardd{
   float: left;
   margin-left: 30px;
   width: 270px;
   height: 270px;
   border: 1px solid #ebebeb;
 }
 .showcardd:hover{
   position:relative;/*改成相对定位*/
   top:-5px;/*向上挪动5px*/
   box-shadow:0px 0px 5px 0px #c1b6bd;/*增加阴影效果*/
   transition:all 500ms/*动画过渡*/
 }
 .showcarddfoot{
   margin-left: 60px;
   float: left;
   margin-right: 30px;
   margin-top: 20px;
   width: 270px;
   height: 270px;
   border: 1px solid #ebebeb;
 }
 .showcarddfoot:hover{
   position:relative;/*改成相对定位*/
   top:-5px;/*向上挪动5px*/
   box-shadow:0px 0px 5px 0px #c1b6bd;/*增加阴影效果*/
   transition:all 500ms/*动画过渡*/
 }
 .showcarddfoot_right{
   float: left;
   margin-top: 20px;
   width: 270px;
   height: 270px;
   border: 1px solid #ebebeb;
 }
 .showcarddfoot_right:hover{
   position:relative;/*改成相对定位*/
   top:-5px;/*向上挪动5px*/
   box-shadow:0px 0px 5px 0px #c1b6bd;/*增加阴影效果*/
   transition:all 500ms/*动画过渡*/
 }
 .clasfoot{
   width: 100%;
   height: 300px;
   margin-top: 20px;
   background-color: blueviolet;
 }

  .el-carousel__item:nth-child(2n) {

  }

  .el-carousel__item:nth-child(2n+1) {

  }
</style>
