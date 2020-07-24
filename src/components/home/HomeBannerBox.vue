<template>
    <div class="home-banner-box">
        <a href="#">
            <img :src="imgPath" alt="">
        </a>
    </div>
</template>

<script>
export default {
    props: ['imgPath']
}
</script>

<style lang="less" scoped>
.home-banner-box {
    width: 1226px;
    height: 120px;
    a {
        display: block;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>