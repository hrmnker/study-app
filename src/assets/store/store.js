import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        searchCourseValue: '',     // 搜索课程按钮值
        grade: '一年级',              // 年级
        course: '推荐',              // 课程

      data:{
        image:'',
        name:'',
        sex:'请选择',    //性别
        phone:'请绑定手机号',
        grade:'',
        yzm:''

      },
    },
    mutations: {
        searchCourseValue (state, data) {      // 改变搜索课程值
            state.searchCourseValue = data
        },
        gradeChange (state, data) {          // 改变年级
            state.grade = data
        },
        courseChange (state, data) {         // 改变课程
            state.course = data
        },

      getdata(state,res){
        state.data=res.data.data;
        console.log(state.data)
      },
      vv(state, data) {          // 改变年级
        state.data.grade = data
      },
    },
  actions:{
    getdata(context){
      Axios.get('/a/u/user/personal?openID=oB03t1Pi96JoxZ-8KQJ9nYSBMJQw').then(res=>{
        context.commit('getdata',res)
      })
    }
  },
})
