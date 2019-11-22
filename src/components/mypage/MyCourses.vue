<template>
    <van-list
      finished-text="没有更多了"
      @load="onLoad"
      :finished="finished"
    >
      <div v-for="(itm,index) in curriculum.data" :key="index" :title="itm" class="course-main">
        <div class="course-row" >
          <div class='maintop'  ><img  :src="itm.coursecover"></div>
          <div class="main-bottom" >
            <div class="introduce" >{{itm.name}}</div>
            <div style="color:white;background-color:#1d7ad9;width: 20vw; height: 4vh; float: right;display: flex;align-items: center;justify-content: center;border-radius: 7px;font-size: 2vh;">去学习</div>
          </div>
        </div>
      </div>

    </van-list>
</template>

<script>

    import Axios from "axios";

  export default {

      data() {
          return {
              // title: '我的课程',
              curriculum:{
                  data:[]

              },

              finished: false, //没有更多了

          }
      },
      methods: {


      onLoad() {
          // 异步更新数据
          setTimeout(() => {

                  this.finished = true;

          }, 500);

      },

      //下拉刷新


      off() {
          this.$router.push({path: "/MyPage"})
      }

      },

      created() {   //初始化获取列表数据
          Axios.get('/a/u/course/mine?uid=2').then(res=>{

              this.curriculum=res.data;
              console.log(this.curriculum,'kc')
          })

      },



      }



</script>

<style src="./utils/style/Mypage.css" scoped> /*局部*/
</style>
