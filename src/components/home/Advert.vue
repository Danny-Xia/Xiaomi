<template>
    <div class="advert">
        <img :src="imgSrc" alt="">
    </div>
</template>

<script>
export default {
    props: ['imgSrc']
}
</script>

<style lang="less" scoped>
.advert {
    margin: 22px 0;
    height: 120px;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>