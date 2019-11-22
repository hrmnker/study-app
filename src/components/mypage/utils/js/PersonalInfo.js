import { Toast } from 'vant';
import { Dialog } from 'vant';
import { NumberKeyboard } from 'vant';
import axios from 'axios'
import qs from 'qs'

import wx from 'weixin-js-sdk';



export default {
  components: {
    [Toast.name]: Toast,
    [Dialog.Component.name]: Dialog.Component,
    [NumberKeyboard.name]: NumberKeyboard,
  },
  data(){
    return{
      title:'个人信息',
      Dialog:'',
      gradeShow: false,
      show1: false,
      show2: false,
      show3:false,
      show4:false,

      // isUpload:false,
      // imgUrl:'',
      sendAuthCode:true,
      auth_time: 0,
      //yzm
      show: false,


      taps: {
        confirm: '',
        d: false,
        zz: '',

      },
      tableData:{
        image:'',
        name:'',
        sex:'请选择',    //性别
        phone:'请绑定手机号',

      },


  getData:[
    {name:'小学', grade:["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"] },
    {name:'初中', grade:["初一", "初二", "初三"]},
    {name: "高中", grade: ["高一", "高二", "高三"]}
  ],

  WX:'',
      localIds:''
      // actions: [
      //   { name: '相机' },
      //   { name: '从相机选择' }
      // ]
    }
  },


  methods: {




    off(){
      this.$router.push({path:"/MyPage"})
    },
    showPopup() {
      this.show1 = true;
    },

    phone(){         //手机号点击进去的时触发
      this.show2 = true;
      this.date.phone=''
    },


    gender(){
      this.show3 = true;
    },

    beforeClose(action, done) {    //性别
      if (action === 'confirm') {
        let DataMale=this.$store.state.data.sex;
        console.log(DataMale,'h');
        done();
      } else {
        done();
      }
    },

    phone2(action,done){     //手机号点击确定取消时触发
      if (action === 'confirm') {
        let MobilePhone=this.$store.state.data.phone;
        console.log(MobilePhone,'手机号');

        var idCode2=qs.stringify(  //测试中
          {
            openID:'oB03t1Pi96JoxZ-8KQJ9nYSBMJQw',
            phone:this.$store.state.data.phone,
            yzm:this.$store.state.data.yzm
          }
        );
        axios.put("/a/u/user/binding?" + idCode2).then(res=>{

          this.confirm=res.data.code;
          console.log(this.confirm,'0');


          console.log(this.confirm,'开始');
        if(this.confirm==0){
          this.$store.state.data.yzm='';
           done();
           console.log(this.confirm,'success');

        }else if(this.confirm==1){
          done(false);
          setTimeout(() => {  //验证码计时器1s需求
            this.taps.d = false;
          }, 1000);
          this.taps.d=true;
          this.taps.zz='手机号已绑定';
          console.log(this.confirm,'手机号已绑定');

        } else if(this.confirm==2){
          this.taps.zz='该验证码错误';
          setTimeout(() => {  //验证码计时器1s需求
            this.taps.d = false;
          }, 1000);
          this.taps.d =true;
          console.log(this.taps.zz);
          done(false);

        } else if(this.confirm==3 || this.confirm==undefined){
          done(false);
          setTimeout(() => {  //验证码计时器1s需求
            this.taps.d = false;
          }, 1000);
          this.taps.d=true;
          this.taps.zz='验证码不能为空';
          console.log(this.taps.zz)
        }

        });
      }else {
        // this.date.phone='请输入手机号';
        this.taps.d=false;
        this.$store.state.data.yzm='';
        done();
      }
    },

    grtCode(){ //获取验证码
      this.sendAuthCode = false;
      this.auth_time = 60;
      var auth_timetimer =  setInterval(()=>{
        this.auth_time--;
        if(this.auth_time<=0){
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);


      axios.post("/a/u/user/getYzm?").then(res=>{     //点击获取验证码
        console.log(res)
      });
    },

    alertMenu(){
      // this.show4 = true;
      // return  '<input type="file" accept="image/*"  />';
    },
    // onSelect(item) {
    //   this.show4 = false;
    //   // Toast(item.name);
    //
    // },

    // onCancel() {
    //   this.show4 = false;
    //   Toast('cancel');
    // },

    stage(name){
      if(name===this.$store.state.data.grade){
        return 'grade-list-add '
      }else {
        return 'grade-list'
      }
    },


    stageTrigger(name) {        // 选择哪个年级
      console.log(name,'html年级回调');
      this.$store.commit("vv", name);
      this.$emit("refresh");
      this.show1 = false;
    },

    //头像img对接 上传功能
    uploadImg(){
      axios.get('/a/u/wx/message').then(res=>{
        this.WX =res.data;
        console.log(this.WX,'打印');
        wx.config({
          debug:false,
          accessToken:this.WX.accessToken,
          access_token:this.WX. access_token,
          appId:this.WX.appId,
          nonceStr:this.WX.nonceStr,
          signature:this.WX.signature,
          ticket:this.WX.ticket,
          timestamp:this.WX.timestamp,
          jsApiList:[]
        });
        wx.ready(function () {
            console.log('验证成功');
          wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
              this.$store.state.data.image = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            }
          });
        });
        wx.error(function () {
          console.log('验证失败')
        });


      });






    },






     //编辑
    edit(){
      var getData=qs.stringify(
        {
          openID:'oB03t1Pi96JoxZ-8KQJ9nYSBMJQw',
          name:this.$store.state.data.name,
          sex:this.$store.state.data.sex,
          grade:this.$store.state.data.grade

        }
      );

      axios.put("/a/u/user/update?" + getData).then(res=>{     //按照格式请求
        console.log(res)
        // Modified=res.data.data
      });





      var getimg=qs.stringify(
        {
          openID:'oB03t1Pi96JoxZ-8KQJ9nYSBMJQw',
          file:this.$store.state.data.image,
        },
      );
      let head={
        headers: {
          'Content-Type':'multipart/form-data'
        },
      };
      console.log(getimg,'name');
      axios.put("/a/u/user/image?" + getimg,{},head).then(res=>{     //按照格式请求
        console.log(res)
        // Modified=res.data.data
      });
      this.$router.push({path:"/MyPage"});
    },



  },




  created(){   //初始化获取列表数据
    this.$store.state.grade='请选择年级';
    this.$store.dispatch('getdata');



  },



}

