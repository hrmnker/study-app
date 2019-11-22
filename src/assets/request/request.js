import axios from 'axios'

export default {
    course (data) {    // 课程搜索
        return axios.post('/cyj/course/list', data)
    },
    banner () {        // banner轮播图
        return axios.get('/cyj/banner/list')
    }
}