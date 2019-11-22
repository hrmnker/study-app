<template>
    <div>
        <div class="course-name">{{this.$store.state.course}}课程</div>
        <div class="outline van-hairline--surround" 
            v-for="item in courseList" 
            :key="item.id"
            @click="courseDetails(item)">
                <img class="img" :src="item.coursecover" >
                <div class="content">
                    <div class="font-one">{{item.name}}}</div>
                    <div class="font-two">
                        已有{{item.buy}}人购买
                        <div class="price">￥{{item.price}}</div>
                    </div>
                </div>
        </div>
        <van-loading v-if="courseList.length == 0"/>
        <van-divider v-else class="bottom-line">没有更多了</van-divider>
    </div>
</template>

<script>
import { Loading, Divider } from 'vant';

export default {
    name: 'CourseContent',
    components: {
        [Loading.name]: Loading,
        [Divider.name]: Divider
    },
    data () {
        return {
            courseList: []  // 请求后的课程列表
        }
    },
    created () {
        this.requestCourse()
    },
    methods: {
        requestCourse () {   // 请求对应年级、课程的函数
            var data = {
               course: this.$store.state.course,
               grade: this.$store.state.grade
            }
            this.$request.course(data)
            .then((success) => {
                var list = success.data.data 
                this.courseList = list
                console.log('请求成功:', this.courseList)
            })
        },
        courseDetails (item) {   // 点击课程跳转到对应界面
            console.log(item)
            this.$router.push({path: '/coursedetails', query: item})
        }
    }
}
</script>

<style lang="scss" scoped>
.course-name {
    margin: 20px 0 20px;
    font-size: 16px;
}


.outline {    // 复用之前的，看要不要提取
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    box-sizing: border-box;
    height: 95px;
    background: #ffffff;
    .img {
        margin-left: 10px;
        box-shadow: 0 0 0 2px #cccccc;
        width: 120px;
    }
    .content {
        box-sizing: border-box;
        padding: 3px 15px;
        height: 75px;
        .font-one {
            display: -webkit-box;
            height: 38px;
            font-size: 14px;
            text-align: justify;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical; 
            -webkit-line-clamp: 2;          
        }
        .font-two {
            margin-top: 17px;
            height: 12px;
            line-height: 12px;
        }
        .price {
            float: right;
        }
    }
}

.van-loading {
    margin-top: 40px;
    text-align: center;
}

.bottom-line {
    margin: 20px auto;
    border-color: #bfbfbf;
    width: 90%;
}
</style>