<template>
    <div class="search-head van-hairline--top-bottom">
        <form class="from" action="/">
            <van-search
                v-model="searchValue"
                placeholder="请输入搜索关键词"
                show-action
                @search="searchBt"
                @cancel="cancelBt"
            />
        </form>
    </div>
</template>

<script>
import { Search } from 'vant';  // 引入搜索标签

export default {
    name: 'SearchHead',
    props: ['showHidden'],
    components: {
        [Search.name]: Search  // 使用搜索标签
    },
    data () {
        return {
            searchValue: '',         // 搜索按钮值
        }
    },
    mounted () {
        this.bus.$on('searchHaedValue', (item) => {   // 结果页接受传过来的搜索值
            this.searchValue = item
        })
    },
    methods: {
        searchBt () {          // 手机搜索按钮
            if (this.searchValue != '') {
                // 保存历史记录在本地储存
                // localStorage.removeItem('searchHistory')
                if (localStorage.searchHistory == undefined) {  
                    localStorage.searchHistory = JSON.stringify([])
                }
                var array = [this.searchValue],
                    jsonPase = JSON.parse(localStorage.searchHistory),
                    arrayConcat = array.concat(jsonPase);
                if (arrayConcat.length > 10) {
                    arrayConcat.length = 10
                }
                localStorage.searchHistory = JSON.stringify(arrayConcat)
                this.$emit('refresh', 'request')
                // vuex改变搜索值与取消值
                this.$store.commit('searchCourseValue', this.searchValue)
            }
        },
        cancelBt () {          // 取消按钮
            if (this.showHidden == true) {   // 返回课程首页
                this.$router.push('/coursehomepage')
            }
            else {                         // 返回搜索历史页
                this.$emit('refresh', false)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
[class*=van-hairline]::after {
    border-color: #7a7a7a;
}

.search-head {
    display: flex;
    align-items: center;
    height: 65px;
    background: #ffffff;
    .from {
        box-sizing: border-box;
        padding: 0 15px;
        width: 100%;
    }
}
</style>