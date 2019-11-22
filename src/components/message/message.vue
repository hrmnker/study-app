<template>
    <div class="message-width">
        <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
        <div class="message-info">
            <div class="message-top">
                
                <span class="message-bell">
                    <span class="message-red" v-if="redStatus"></span>
                </span>
                <span class="message-lesson">高中数学</span>
            </div>
            <div class="message-main">
                勤快的牛炖大大已经为大家准备好高中数学第六次直播课——
                《高中数学-暴力解决平面解析几何》，√打通解题思路的任督二脉
                 √揭秘高考真题的巧解技巧 √get最全知识点+学习资料！3月16日晚2
                 1:30与你不见不散！
            </div>
            <div class="message-bottom">
                <span>
                    2019-9-11
                </span>
                <span>
                    <button class="lookfor"  @click="clickRed()">去看看</button>
                </span>
            </div>
        </div>
       </van-list>
    </div>
</template>
<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
export default {
    data(){
        return{
            info:4,
            //isLoading: false,
            redStatus:true,//小红点状态
            pageSize:4,//页面渲染条数
            list:[],
            loading:false,
            finished:false,
        }
    },
    mounted(){
  

    console.log(1111);

    },
    methods:{
   
    clickRed(){
        this.redStatus=false;
    },
      onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 4);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  
    }
}
</script>
<style>
.messageHeight{
    height: 100vh;
}
.message-width{
    width: 90%;
    margin: 0 auto;
}
.message-bell{
    background-image: url(../../assets/bell.png);
    background-size: 100%;
    width: 50px;
    height: 50px;
    border: 1px solid #999;
    border-radius: 100px;
    position: relative;
}
.message-info{
    padding:5%;
    border: 1px solid #dedede;
    box-shadow: 2px 2px 5px #dedede;
    margin-top: 10%;
}
.message-lesson{
    margin-left: 15px;
    font-size: 18px;
    font-weight: bolder;
}
.message-top{
    display: flex;
    align-items: center;
    
}
.message-bottom{
    display: flex;
    justify-content: space-between;
    
    align-items: center;
    width: 95%;
    margin:20px auto 0 auto;
}
.lookfor{
    width: 75px;
    background-color: black;
    color: white;
    border-radius: 20px;
    line-height: 2
}
.message-main{
    margin-top: 20px;
}
.numberinfo{
    display: flex;
    margin-top: 20px;
}
.numberinfo hr{
    border: none;
    width: 30%;
    height: 1px;
    background-color: rgb(121, 121, 121)
}
.message-red{
    width: 8px;
    height: 8px;
    background-color: red;
    border-radius: 100px;
    position: absolute;
    right: 3px;
    top: 2px;
}
</style>