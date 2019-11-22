<template>
    <div>
        <div v-if="layer" class="layer" @click="layerBt"></div>
        <video :src="videoUrl" controls></video>
        <div class="font van-hairline--bottom">
            <div class="title">高中数学知识详解</div>
            <div class="time">2019-02-23</div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';

export default {
    name: 'DetailsHead',
    components: {
        [Toast.name]: Toast, // 提示组件
    },
    data () {
        return{
            videoUrl: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',  // 视频地址
            layer: false,    // 遮罩层
        }
    },
    created () {
        // 进入页面根据传递的数据显示标题。时间！！！！！！！！！！！！！！！！！！！！！！！！！！！
        console.log(this.$route.query)
        var data = this.$route.query  // 没有购买,遮罩层显示。
        if (data.id == 0) { 
           this.layer = true
        }
    },
    methods: {
        layerBt () {  // 点击遮罩层提示购买
            this.$toast('请先购买课程');
        }
    }
   
}
</script>

<style lang="scss" scoped>
.layer {
    position: absolute;
    left: 0;
    top: 10px;
    z-index: 2;
    width: 100%;
    height: 178px;
}
video {
    display: block;
    margin: 10px 0 0;
    width: 100%;
    height: 178px;
}
.font {
    padding: 15px 18px;
    height: 50px;
    .title {
        margin-bottom: 13px;
        font-size: 14px;
    }
    .time {
        font-size: 12px;
    }
}
::v-deep [class*=van-hairline]::after {
    border-color: #797979;
}
</style>