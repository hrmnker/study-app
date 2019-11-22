<template>
    <div>
        <van-tabs class="nav-bar van-hairline--top">
            <van-tab title="详情">
                <div class="content-font">
                    <div class="details-title">高中数学知识详解</div>
                    <div class="details-content">读史使人明智,读诗使人灵秀,数学使人周密,自然哲学使人精邃,伦理学使人庄重,逻辑修辞学使人善辩”。知识能够塑造一个人的性格，而学习恰恰能够使人获得更多的知识，可见学习尤为重要。有很多同学会说学习苦、累，或者我学不会我也考不好不想学了，这两种说法都是错误的。首先，我无法否认学习之苦，学习之类，但甘守学习的苦才能享受学习的甜。 在校园里，我们快乐地成长，为理想而奋斗！遨游学海，跋涉书山，知识上的满足给我们快乐；山重水复，曲径通幽，破解难题的柳暗花明给我们快乐；思想境界上的不断开阔，心灵上的不断净化给我们快乐。记得爱因斯坦曾说：千万不要把学习当成一个任务，而应该看成一个令人羡慕的机会。是的，只要我们不辞劳苦，敢于面对学习中的困难，你会发现，学习中自有情趣，更有快乐。</div>
                </div>
            </van-tab>
            <van-tab title="相关推荐">
                <div class="content-font">
                    <div class="recommend-title">推荐课程</div>
                    <div class="recommend-img">进入主页发现更多课程</div>
                </div>
            </van-tab>
        </van-tabs>
        <div class="bottom van-hairline--top">
            <div class="price">课程价格￥99.00</div>
        </div>
    </div>
</template>

<script>
import { Tab, Tabs } from 'vant';

export default {
    name: 'DetailsContent',
    components: {
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
    },
    created () {
        console.log(this.$route.query)
        // 进入页面根据传递的数据显示标题。内容。价格。
    }
}
</script>

<style lang="scss" scoped>
.nav-bar {
    margin-top: 20px;
    ::v-deep .van-tabs__wrap, ::v-deep .van-tab {
        height: 54px;
        line-height: 54px;
    }
    ::v-deep .van-tabs__line {
        background-color: #027db4;
    }
}
.content-font {
    box-shadow: border-box;
    padding: 0 35px;
    .details-title {
        font-size: 13px;
        font-weight: 700;
        line-height: 50px;
        text-align: center;
    }
    .details-content {
        margin-bottom: 55px;
        line-height: 20px;
        text-align: justify;
    }
    .recommend-title {
        @extend .details-title;
        text-align: left;
    }
    .recommend-img {
        margin: 40px auto;
        box-sizing: border-box;
        padding-top: 90px;
        width: 120px;
        height: 110px;
        text-align: center;
        background: url(~@/assets/img/detailes.png) center 0/ 90px 70px no-repeat;
    }
}

.bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #ffffff;
    .price {
        border-radius: 50px;
        margin: 10px auto;
        width: 70%;
        line-height: 30px;
        text-align: center;
        color: #ffffff;
        background-color: #169bd5;
    }
}

::v-deep [class*=van-hairline]::after {
    border-color: #797979;
}
</style>