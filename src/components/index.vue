<template>
  <div >
    <!--导航栏-->
    <div id="daohang">
      <div class="daohang">
        <div class="fenlei"><a href="http://localhost:8080/#/CoursePage">小学</a></div>
        <div class="fenlei"><a href="http://localhost:8080/#/MiddleCourse">初中</a></div>
        <div class="fenlei"><a href="http://localhost:8080/#/HighCourse">高中</a></div>
      </div>
    </div>

    <!--轮播图-->
    <div id="lbt">
      <el-carousel height="450px">
        <el-carousel-item v-for="item in items" :key="item">
          <img style="height: 450px" :src="item.src"/>
        </el-carousel-item>
      </el-carousel>
    </div>


    <!--热门课程-->
    <div id="hotclass">

      <div class="hot_top"><h3>热门课程</h3></div>
      <div id="hot_foot">
        <a href="phone?action=one&bid=<%=phone.getBid() %>">
          <div v-for="cs in course">
          <div class="cardd">
            <div v-if="cs.ctid==1">
              <span class="_8-iAp" >小学</span>
            </div>
            <div v-if="cs.ctid==2">
              <span class="_8-iAp" >初中</span>
            </div>
            <div v-if="cs.ctid==3">
              <span class="_8-iAp" >高中</span>
            </div>
            <h1 class="classname">{{cs.cname}}</h1>
            <div class="classtime">时间:{{cs.time}}<ins>|</ins>{{cs.cou_time}} 课时</div>
            <div class="tcher">
              <img class="tcherimg" src="http://pylgiouvi.bkt.clouddn.com/image%20%282%29.png"/>
              <span>包易正</span>
            </div>
            <div class="foot">
              <div class="buy">
                <span>已有{{cs.details}}人购买</span>
              </div>
              <div class="price">
                <div v-if="cs.price==0">
                  <span class="buyprice">免费</span>
                </div>
                <div v-if="cs.price!=0">
                  <span class="buyprice">{{cs.price}}</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </a>
      </div>
    </div>



    <!--分类展示-->
    <div class="fenleishow">
      <div class="xue">
        <div class="hot_top"><h3>小学</h3></div>
        <div class="classhow">
          <div class="xueimg">
            <img style="width: 575px;height: 272px;" src="http://pylgiouvi.bkt.clouddn.com/%E5%B0%8F%E5%AD%A6.png"/>
          </div>
          <a href="phone?action=one&bid=<%=phone.getBid() %>">
          <div v-for="(h,index) in primary">
            <div v-if="index<6">
            <div v-if="index<2">
            <div class="showcardd">
              <div v-if="h.ctid==1">
                <span class="_8-iAp" >小学</span>
              </div>
              <div v-if="h.ctid==2">
                <span class="_8-iAp" >初中</span>
              </div>
              <div v-if="h.ctid==3">
                <span class="_8-iAp" >高中</span>
              </div>
              <h1 class="classname">{{h.cname}}</h1>
              <div class="classtime">时间:{{h.time}}<ins>|</ins>{{h.cou_time}}课时</div>
              <div class="tcher">
                <img class="tcherimg" src="http://pylgiouvi.bkt.clouddn.com/image%20%282%29.png"/>
                <span>包易正</span>
              </div>
              <div class="foot">
                <div class="buy">
                  <span>已有{{h.details}}人购买</span>
                </div>
                <div class="price">
                  <div v-if="h.price==0">
                    <span class="buyprice">免费</span>
                  </div>
                  <div v-if="h.price!=0">
                    <span class="buyprice">{{h.price}}</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div v-if="index>=2">
              <div class="showcarddfoot">
                <div v-if="h.ctid==1">
                  <span class="_8-iAp" >小学</span>
                </div>
                <div v-if="h.ctid==2">
                  <span class="_8-iAp" >初中</span>
                </div>
                <div v-if="h.ctid==3">
                  <span class="_8-iAp" >高中</span>
                </div>
                <h1 class="classname">{{h.cname}}</h1>
                <div class="classtime">时间:{{h.time}}<ins>|</ins>{{h.cou_time}}课时</div>
                <div class="tcher">
                  <img class="tcherimg" src="http://pylgiouvi.bkt.clouddn.com/image%20%282%29.png"/>
                  <span>包易正</span>
                </div>
                <div class="foot">
                  <div class="buy">
                    <span>已有{{h.details}}人购买</span>
                  </div>
                  <div class="price">
                    <div v-if="h.price==0">
                      <span class="buyprice">免费</span>
                    </div>
                    <div v-if="h.price!=0">
                      <span class="buyprice">{{h.price}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </a>
        </div>
      </div>



      <!--初中-->
      <div class="xue">
        <div class="hot_top"><h3>初中</h3></div>
        <div class="classhow">
          <div class="xueimg">
            <img style="width: 575px;height: 272px;" src="http://pylgiouvi.bkt.clouddn.com/%E5%88%9D%E4%B8%AD.png"/>
          </div>
          <a href="phone?action=one&bid=<%=phone.getBid() %>">
            <div v-for="(jun,index) in junior">
              <div v-if="index<6">
                <div v-if="index<2">
                  <div class="showcardd">
                    <div v-if="jun.ctid==1">
                      <span class="_8-iAp" >小学</span>
                    </div>
                    <div v-if="jun.ctid==2">
                      <span class="_8-iAp" >初中</span>
                    </div>
                    <div v-if="jun.ctid==3">
                      <span class="_8-iAp" >高中</span>
                    </div>
                    <h1 class="classname">{{jun.cname}}</h1>
                    <div class="classtime">时间:{{jun.time}}<ins>|</ins>{{jun.cou_time}}课时</div>
                    <div class="tcher">
                      <img class="tcherimg" src="http://pylgiouvi.bkt.clouddn.com/image%20%282%29.png"/>
                      <span>包易正</span>
                    </div>
                    <div class="foot">
                      <div class="buy">
                        <span>已有{{jun.details}}人购买</span>
                      </div>
                      <div class="price">
                        <div v-if="jun.price==0">
                          <span class="buyprice">免费</span>
                        </div>
                        <div v-if="jun.price!=0">
                          <span class="buyprice">{{jun.price}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="index>=2">
                  <div class="showcarddfoot">
                    <div v-if="jun.ctid==1">
                      <span class="_8-iAp" >小学</span>
                    </div>
                    <div v-if="jun.ctid==2">
                      <span class="_8-iAp" >初中</span>
                    </div>
                    <div v-if="jun.ctid==3">
                      <span class="_8-iAp" >高中</span>
                    </div>
                    <h1 class="classname">{{jun.cname}}</h1>
                    <div class="classtime">时间:{{jun.time}}<ins>|</ins>{{jun.cou_time}}课时</div>
                    <div class="tcher">
                      <img class="tcherimg" src="http://pylgiouvi.bkt.clouddn.com/image%20%282%29.png"/>
                      <span>包易正</span>
                    </div>
                    <div class="foot">
                      <div class="buy">
                        <span>已有{{jun.details}}人购买</span>
                      </div>
                      <div class="price">
                        <div v-if="jun.price==0">
                          <span class="buyprice">免费</span>
                        </div>
                        <div v-if="jun.price!=0">
                          <span class="buyprice">{{jun.price}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>


      <!--高中-->
      <div class="xue">
        <div class="hot_top"><h3>高中</h3></div>
        <div class="classhow">
          <div class="xueimg">
            <img style="width: 575px;height: 272px;" src="http://pylgiouvi.bkt.clouddn.com/%E9%AB%98%E4%B8%AD.png"/>
          </div>
          <a href="phone?action=one&bid=<%=phone.getBid() %>">
            <div v-for="(hig,index) in hightc">
              <div v-if="index<6">
                <div v-if="index<2">
                  <div class="showcardd">
                    <div v-if="hig.ctid==1">
                      <span class="_8-iAp" >小学</span>
                    </div>
                    <div v-if="hig.ctid==2">
                      <span class="_8-iAp" >初中</span>
                    </div>
                    <div v-if="hig.ctid==3">
                      <span class="_8-iAp" >高中</span>
                    </div>
                    <h1 class="classname">{{hig.cname}}</h1>
                    <div class="classtime">时间:{{hig.time}}<ins>|</ins>{{hig.cou_time}}课时</div>
                    <div class="tcher">
                      <img class="tcherimg" src="http://pylgiouvi.bkt.clouddn.com/image%20%282%29.png"/>
                      <span>包易正</span>
                    </div>
                    <div class="foot">
                      <div class="buy">
                        <span>已有{{hig.details}}人购买</span>
                      </div>
                      <div class="price">
                        <div v-if="hig.price==0">
                          <span class="buyprice">免费</span>
                        </div>
                        <div v-if="hig.price!=0">
                          <span class="buyprice">{{hig.price}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="index>=2">
                  <div class="showcarddfoot">
                    <div v-if="hig.ctid==1">
                      <span class="_8-iAp" >小学</span>
                    </div>
                    <div v-if="hig.ctid==2">
                      <span class="_8-iAp" >初中</span>
                    </div>
                    <div v-if="hig.ctid==3">
                      <span class="_8-iAp" >高中</span>
                    </div>
                    <h1 class="classname">{{hig.cname}}</h1>
                    <div class="classtime">时间:{{hig.time}}<ins>|</ins>{{hig.cou_time}}课时</div>
                    <div class="tcher">
                      <img class="tcherimg" src="http://pylgiouvi.bkt.clouddn.com/image%20%282%29.png"/>
                      <span>包易正</span>
                    </div>
                    <div class="foot">
                      <div class="buy">
                        <span>已有{{hig.details}}人购买</span>
                      </div>
                      <div class="price">
                        <div v-if="hig.price==0">
                          <span class="buyprice">免费</span>
                        </div>
                        <div v-if="hig.price!=0">
                          <span class="buyprice">{{hig.price}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>




    <!--底部-->
    <div class="clasfoot">
      <img style="width: 100%;height: 300px;" src="http://pylgiouvi.bkt.clouddn.com/htmlfoot.jpg"/>
    </div>
  </div>

</template>



<script>
  import axios from 'axios'
  export default {
    name: '',
    data(){
      return{
        items:[
          {src:'http://pylgiouvi.bkt.clouddn.com/%E8%BD%AE%E6%92%AD%E5%9B%BE1.png'},
          {src:'http://pylgiouvi.bkt.clouddn.com/%E8%BD%AE%E6%92%AD%E5%9B%BE2.png'},
          {src:'http://pylgiouvi.bkt.clouddn.com/%E8%BD%AE%E6%92%AD%E5%9B%BE3.png'},
          {src:'http://pylgiouvi.bkt.clouddn.com/%E8%BD%AE%E6%92%AD%E5%9B%BE4.png'},
        ],
        course:[], //推荐
        primary:[], //小学
        junior:[], //初中
        hightc:[], //高中
      }
    },
    mounted(){
      axios.get("api/findShow/推荐").then(res=>{
        console.log(res.data)
        this.course=res.data;
      })
      //小学
      axios.get("api/findAllCourse/1").then(res=>{
        console.log(res.data)
        this.primary=res.data;
      })
      //初中
      axios.get("api/findAllCourse/2").then(res=>{
        console.log(res.data)
        this.junior=res.data;
      })
      //高中
      axios.get("api/findAllCourse/3").then(res=>{
        console.log(res.data)
        this.hightc=res.data;
      })
    }
  }
</script>


<style>
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
    margin-right: 23px;
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
    margin-right: 15px;
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
    margin-right: 23px;

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
    float: left;
    margin-right: 23px;
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
</style>
