<template>
  <div>
  <div id="data">
    <div id="top"><a>课程分布图</a></div>
    <div id="foot">
        <div id="foot_left"></div>
        <div id="zhong"></div>
        <div id="foot_right"></div>
    </div>

  </div>
  </div>
</template>

<script>
  import axios from  'axios'
  import echarts from 'echarts'
  export default {
    name: '',
    data () {
      return {
        // xiaoxue:7,
        // chuzhong:11,
        // gaozhong:8,
        list1:[{details:0,cname:''}],
        charts: '',
        opinion:['小学','初中','高中'],
        opinionData:[]
      }
    },
    //调用
    mounted() {
      this.showdata()
      // alert(this.xiaoxue)
      // alert(this.xiaoxue)
    },
    methods:{
      showdata:function f() {

        var url1="api/findAlldata"
        axios.get(url1).then(res=>{
          this.list1=res.data
          console.log(res.data)
          this.ssdad()
        }),


        axios.get("api/findA").then(res=>{
          var xiaoxue = res.data.小学
          var chuzhong = res.data.初中
          var gaozhong = res.data.高中
          console.log(res.data)
          this.opinionData=
          [
            {value:xiaoxue, name:'小学'},
            {value:chuzhong, name:'初中'},
            {value:gaozhong, name:'高中'},
          ]
          this.ssdad()
        })
      },
      ssdad:function(){
        this.$nextTick(function () {
          this.drawRight('foot_right')
        })
        this.$nextTick(function () {
          this.drawPie('foot_left')
        })
      },
      drawPie(id){
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          //标题
          title: {
            text: '分类统计',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#0e0e0e'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:this.opinion     //获取左上角的值
          },
          series: [
            {
              name:'访问来源',
              type:'pie',
              radius:['50%','70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '10',
                    fontWeight: 'blod'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:this.opinionData
            }
          ]
        })
      },

      drawRight(id){
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          title: {
            text: '销售统计',
            left: 'center',
            top: 20,
          },

          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series : [
            {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:[
                {value:this.list1[0].details, name:this.list1[0].cname},
                {value:this.list1[1].details, name:this.list1[1].cname},
                {value:this.list1[2].details, name:this.list1[2].cname},
                {value:this.list1[3].details, name:this.list1[3].cname},
                {value:this.list1[4].details, name:this.list1[4].cname}
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: '#191919'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: '#5a090a'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: '#4987c2',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ],
          color:['red', 'green','yellow','blueviolet','red']
        })
      }

    },
  }
</script>

<style>

  #data{
    width:1360px;
    height: 600px;
    float: left;
    /*background-color: aqua;*/
  }
  #top{
    width:1100px;
    height: 60px;
    float: left;
    background-color: white;
    margin-left: 100px;
    margin-top: 10px;
    box-shadow:0px 0px  10px 1px #aaa;
  }
  #top a{
    font-size: 16px;
    line-height: 60px;
  }
  #foot{
    width:1050px;
    height: 500px;
    float: left;
    background-color: white;
    margin-left: 125px;
    margin-top: 60px;
    box-shadow:0px 0px  10px 1px #aaa;
  }
  #foot_left{
    width: 480px;
    height: 480px;
    float: left;
    /*background-color: aquamarine;*/
    margin-top: 10px;
    margin-left: 8px;
  }
  #foot_right{
    float: left;
    width: 510px;
    height: 480px;
    /*background-color: aquamarine;*/
    margin-top: 10px;
    margin-left: 5px;
  }
  #zhong{
    float: left;
    height: 350px;
    background-color: #958e93;
    width: 1px;
    margin-top: 60px;
    margin-left: 5px;
  }
</style>
