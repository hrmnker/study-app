
<template>
  <div style=" background-color: #f2f2f2; height: 100vh ">
<!--    <div>-->
<!--      <div  class="PersonalCenter-header">-->
<!--        <div   @click="off()" class="PersonalCenter-close">-->
<!--          <div class="self-close">-->
<!--            <div class="close-header"></div>-->
<!--          </div>-->
<!--          <div>{{title}}</div>-->
<!--        </div>-->
<!--        <div class="PersonalCenter-with">-->
<!--          <van-icon name="weapp-nav" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

    <div  class="PersonalCenter-edit" @click="edit()" >  <!--style="padding-top: 6.5vh"-->
      <div class="left-View" >

          <img :src="$store.state.data.image" class="PersonalCenter-Avatar">

        <div>
          <span >{{$store.state.data.name}}</span>
          <span class="Edit-profile" >编辑资料</span>
        </div>
      </div>
      <div class="self-View">
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="PersonalCenter-stock">
      <div class="Subset-stock">
        <div class="stock" >
          <div style="cursor:pointer" @click="course()">
            <div class="stock-map">
              <van-icon name="orders-o" />
            </div>
            <div>我的课程</div>
          </div>
          <div style="cursor:pointer" @click="collection()">
            <div class="stock-map">
              <van-icon name="like-o" />
            </div>
            <div>我的收藏</div>
          </div>
        </div>
      </div>
    </div>


    <div class="PersonalCenter-list">
      <div class="Subset-advisory">
        <div class="left-mig">
         <div class="phone-map">
           <van-icon name="phone" />
         </div>
          <div>客服咨询</div>
        </div>
        <div class="arrow-map" >
          <van-icon name="arrow" />
        </div>
      </div>

      <div class="Subset-advisory">
        <div class="left-mig">
         <div class="phone-map">
          <van-icon name="chat-o" />
         </div>
          <div>我的消息</div>
        </div>
        <div class="arrow-map" >
          <van-icon name="arrow" />
        </div>
      </div>

      <div class="Subset-advisory">
        <div class="left-mig">
         <div class="phone-map">
          <van-icon name="underway-o" />
         </div>
          <div>历史记录</div>
        </div>
        <div class="arrow-map" >
          <van-icon name="arrow" />
        </div>
      </div>

      <div class="Subset-advisory">
        <div class="left-mig">
         <div class="phone-map">
          <van-icon name="setting-o" />
         </div>
          <div>设置</div>
        </div>
        <div class="arrow-map" >
          <van-icon name="arrow" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    data(){
      return{
        title:'我的',
          avatar: 'http://b-ssl.duitang.com/uploads/item/201606/07/20160607191023_isxzV.jpeg',
      }
    },
    methods:{
      course(){
        this.$router.push({path:"/Mycourses",query:{ id:1, }})  //课程

      },
        collection(){
          this.$router.push({path:"/MyCollection"})   //收藏
      },

      edit(){
        this.$router.push({path:"/PersonalInfo",query:{ id:1, }})
      },

      off(){
        this.$router.push({path:"/"})
      }
    },
      created(){
          this.$store.dispatch('getdata')

      }
  }

</script>

<style src="./utils/style/Mypage.css" scoped> /*局部*/
</style>

