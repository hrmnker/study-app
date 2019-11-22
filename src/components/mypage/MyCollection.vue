<template>

      <van-list
        finished-text="没有更多了"
        @load="onLoad"
        :finished="finished"
      >
        <div v-for="item in list.data" :key="item" :title="item"   class="course-main">
          <div class="course-row" >
            <div class='maintop'  ><img  :src="item.coursecover"></div>
            <div class="main-bottom" >
              <div class="introduce" >{{item.content}}</div>
              <div class="element">￥{{item.price}}</div>
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
                list: {
                    data:[]
                },
                // loading: false,
                finished: false, //没有更多了
                // isLoading: false

            }
        },
        methods: {
            // onRefresh() {
            //     setTimeout(() => {
            //         // this.$toast('刷新成功');
            //         // this.isLoading = false;
            //         this.count++;
            //         for (let i = 0; i < 3; i++) {
            //             this.list.push(this.list.length + 1);
            //         }
            //     }, 500);
            // },
            //刷新

            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    // for (let i = 0; i < 1; i++) {
                    //     this.list.data.push(this.list.data.length);
                    //     // this.list.data.pop()(this.list.data.length);
                    // }
                    // 加载状态结束
                    // this.loading = true;
                    //
                    // // 数据全部加载完成
                    // if (this.list.data.length >= 1) {
                    //     this.finished = true;
                    // }
                    this.finished = true; //没有更多了
                }, 500);
            },

            //下拉刷新


            off() {
                this.$router.push({path: "/MyPage"})
            },

        },

        created() {   //初始化获取列表数据
            Axios.get('/a/u/collections?uid=1').then(res=>{

               this.list=res.data;
               console.log(this.list,'jj')
            })

        },

    }
</script>


<style src="./utils/style/Mypage.css" scoped> /*局部*/
</style>
