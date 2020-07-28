<template>
    <div class="choose-service">
        <div class="title">
            <span class="h-title">{{ dataSource.title }}</span>
            <span class="subtitle">
                {{ dataSource.subtitle }}
                <i class="el-icon-arrow-right"></i>
            </span>
        </div>
        <div class="content">
            <service-square 
            v-for="item in dataSource.content" 
            :key="item.contentTitle" 
            :data-source="item" />
        </div>
    </div>
</template>

<script>
import ServiceSquare from './Service-square';
export default {
    data () {
        return {

        }
    },
    props: ['data-source'],
    components: {
        ServiceSquare
    }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/shop/chooseService.less';
</style>