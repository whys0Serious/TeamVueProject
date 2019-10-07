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
            <img width="800px" height="300px" ref="300px":src="item.pic1"/></h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div v-if="show">
      <div class="title2" >
        <h2 style="float: left">课程精选</h2>
      </div>
    <el-row>
      <el-col :span="5" v-for="(c, index) in course1" :key="index" :offset="1">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div style="padding: 14px;">
          <div class="clearfix">
            <el-tag type="info"effect="dark">小学</el-tag>
          </div>
          <span class="details">{{c.cname}}</span>
          <el-image
            style="width: 100%; height: 200px"
            :src="c.mainpic"></el-image>
          <span class="price">￥{{c.price}}</span>
        </div>
        <!--<template  slot-scope="pic">-->
        <!--<img :src="pic.pic2"  min-width="70" height="70" />-->
        <!--</template>-->
      </el-card>
    </el-col>
    </el-row>
    </div>

    <div v-if="Cshow">
      <div class="title2" >
        <h2 style="float: left">语文</h2>
      </div>
      <el-row>
        <el-col :span="5" v-for="(c, index) in chinese" :key="index" :offset="1">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div style="padding: 14px;">
              <div class="clearfix">
                <el-tag type="info"effect="dark">小学</el-tag>
              </div>
              <span class="details">{{c.cname}}</span>
              <el-image
                style="width: 100%; height: 200px"
                :src="c.mainpic"></el-image>
              <span class="price">￥{{c.price}}</span>
            </div>
            <!--<template  slot-scope="pic">-->
            <!--<img :src="pic.pic2"  min-width="70" height="70" />-->
            <!--</template>-->
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div v-if="Mshow">
      <div class="title2" >
        <h2 style="float: left">数学</h2>
      </div>
      <el-row>
        <el-col :span="5" v-for="(c, index) in math" :key="index" :offset="1">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div style="padding: 14px;">
              <div class="clearfix">
                <el-tag type="info"effect="dark">小学</el-tag>
              </div>
              <span class="details">{{c.cname}}</span>
              <el-image
                style="width: 100%; height: 200px"
                :src="c.mainpic"></el-image>
              <span class="price">￥{{c.price}}</span>
            </div>
            <!--<template  slot-scope="pic">-->
            <!--<img :src="pic.pic2"  min-width="70" height="70" />-->
            <!--</template>-->
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div v-if="Eshow">
      <div class="title2" >
        <h2 style="float: left">英语</h2>
      </div>
      <el-row>
        <el-col :span="5" v-for="(c, index) in English" :key="index" :offset="1">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div style="padding: 14px;">
              <div class="clearfix">
                <el-tag type="info"effect="dark">小学</el-tag>
              </div>
              <span class="details">{{c.cname}}</span>
              <el-image
                style="width: 100%; height: 200px"
                :src="c.mainpic"></el-image>
              <span class="price">￥{{c.price}}</span>
            </div>
            <!--<template  slot-scope="pic">-->
            <!--<img :src="pic.pic2"  min-width="70" height="70" />-->
            <!--</template>-->
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div v-if="showAll">
      <div class="title2" >
        <h2 style="float: left">全部课程</h2>
      </div>
      <el-row>
        <el-col :span="5" v-for="(c, index) in course" :key="index" :offset="1">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div style="padding: 14px;">
              <div class="clearfix">
                <el-tag type="info"effect="dark">小学</el-tag>
              </div>
              <span class="details">{{c.cname}}</span>
              <el-image
                style="width: 100%; height: 200px"
                :src="c.mainpic"></el-image>
              <span class="price">￥{{c.price}}</span>
            </div>
            <!--<template  slot-scope="pic">-->
            <!--<img :src="pic.pic2"  min-width="70" height="70" />-->
            <!--</template>-->
          </el-card>
        </el-col>
      </el-row>
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
      axios.get("api/findShow/sugg/1").then(res=>{
        console.log(res.data)
          this.course1=res.data;
      })
      axios.get("api/findShow/chinese/1").then(res=>{
        console.log(res.data)
        this.chinese=res.data;
      })
      axios.get("api/findShow/math/1").then(res=>{
        console.log(res.data)
        this.math=res.data;
      })
      axios.get("api/findShow/English/1").then(res=>{
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
 .price{
   color: orange;
   font-size: larger;
 }
  #title1{
    height:120px;
    margin-right: 120px;
  }
  .title2{
    margin-left:80px;
    height: 90px;
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


  .el-carousel__item:nth-child(2n) {

  }

  .el-carousel__item:nth-child(2n+1) {

  }
</style>
