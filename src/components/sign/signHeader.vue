<template>
    <div>
        <div class="signheader">
            <span>我的积分:{{Userintegral}}</span><span @click="showPopup">签到规则></span>
        </div>
        <div class="sign-main">
            <input class="circle-shade" disabled v-show="signStatus">
            <span class="circle" @click="signNow()">
                
                <span v-show="!(signStatus)">点击签到</span>
                <span v-show="signStatus">
                    <p>已连续签到{{totalDay}}天</p>
                    <p>积分+{{integral}}</p>
                </span>
            </span>
        </div>
<Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      v-on:isToday="clickToday"
      :markDate="arr"
    >
    </Calendar>
    <van-popup
    v-model="signUp"
    round
    class="signinfo"
    >
    
        <img src="../../assets/right.png">
        <span>签到成功</span>
    
    </van-popup>


    <van-popup
    v-model="show" 
    :overlay="false"
    round
    closeable
    class="dialogStyle"
    >
    <p style="text-align:center">签到规则</p>
    <p class="flex-font"><span>1.</span><span>每天签到可以获得5积分</span></p>
    <p class="flex-font"><span>2.</span><span>当日按未签到，次日签到重新计算连续签到时间</span></p>
    <p class="flex-font"><span>3.</span><span>连续签到7天，额外奖励15积分，连续签到一个月，奖励50积分</span></p>
    <p class="flex-font"><span>4.</span><span>30天为一个月</span></p>
    </van-popup>
    </div>
</template>
<script>
//let arr=[{date:'2018/4/1',className:"mark1"}, {date:'2018/4/13',className:"mark2"}];
import Calendar from 'vue-calendar-component';


export default {
    data(){
        return{
            arr:[ "2019/10/2", "2019/10/3", "2019/10/4"],
            integral:3,
            signStatus:false,//是否签到状态
            totalDay:1,//签到天数
            Userintegral:0,//签到积分
            nowDate:"",
            show:false,//弹窗状态
            signUp:false,
        }
    },
     components: {
    Calendar
  },
  methods:{
      changeDate(date){
          console.log(date);
      },
      clickDay(date){
          console.log(date);
      },
       clickToday(data){
           this.nowDate=data;
           console.log(data)
    },
    signNow(){
        var _this=this
        this.signStatus=true;
        if(this.arr.indexOf(this.nowDate)==-1){
        this.arr.push(this.nowDate);
        }
        this.Userintegral=this.Userintegral+this.integral;
        this.signUp=true;
        setTimeout(function(){_this.signUp=false},2000)
        console.log(this.signUp)
        console.log(this.arr)
    },
     showPopup() {
      this.show = true;
    }
    
  }
}
</script>
<style scoped>
.signheader{
    display: flex;
    justify-content: space-between;
    margin:10px 5px 0 5px;
}
 
  .wh_container >>> .wh_content_all{
    background-color:#ffffff!important;
    border:1px solid #dfe0e6;
    width:100%;
    border-radius: 6px;
  }
     .wh_container{
    margin: 0px!important;
  }

  .wh_container >>> .wh_item_date{
    color:#211d48;

  }
    .wh_container >>> .wh_item_date:hover{
      color:#ffffff;
      background: #136aa7;
      border-radius: 50%;
    }
  .wh_container >>>  .wh_other_dayhide{
    color:#cccccc;
  }

  .wh_container >>> .wh_content_item{
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .wh_container >>> .wh_content{
    color:black;
  }

  .wh_container >>> .wh_top_tag{
    color:black;
  }
  .wh_container >>> .wh_content_li{
    color:#162947;
    font-weight: bold;
  }
  .wh_container >>> .wh_jiantou1{
    border-top: 2px solid #162947;
    border-left: 2px solid #162947;
  }
  .wh_container >>> .wh_jiantou2{
    border-top: 2px solid #162947;
    border-right: 2px solid #162947;
  }

 .wh_container >>> .wh_content_item>.wh_isMark{
    background-color: rgba(19,105,167,0.15);
    background-image: url(../../assets/right.png);
    background-size:100% 100%;
    background-position:  2px 6px;
    /*border-radius: 0px;*/
  }
  .wh_container >>> .wh_content_item .wh_isToday{
    background-color: rgba(19,105,167,1);
    /*border-radius: 0px;*/
    color: #ffffff;
  }
    .wh_container >>> .wh_content_item .wh_chose_day{
      background-color: rgba(19,105,167,1);
      /*border-radius: 0px;*/
      color: #ffffff;
    }



  .sign-main{
      margin:30px 0 ;
      display: flex;
      justify-content: center;
  }
.circle{
    margin: 0 auto 0 auto;
    width: 100px;
    height: 100px;
    border: 1px solid #4cb1ca;
    border-radius: 100px;
    align-items: center;
    display: flex;
    justify-content: center;
    box-shadow: 4px 0px 5px #dedede;
    text-align: center;
}
.circle-shade{
    margin: 0 auto 0 auto;
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 100px;
    z-index: 999;
    opacity: 0;
}
.circle-shade:hover{
    cursor: not-allowed;
}
.circle:hover{
    cursor: pointer;
}
.dialogStyle{
    width:50%;
    height: 32%;
    border: 1px solid #dedede;
    padding: 5%;
    box-shadow: 3px 3px 5px #dedede;
}
.flex-font{
    display: flex;
    justify-content: flex-start;
}
.signinfo{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 30%;
    height: 10%;
    padding-bottom: 2%;
}
.signinfo img{
    background-size: 100%;
    width: 50px;
    margin: auto
}
</style>