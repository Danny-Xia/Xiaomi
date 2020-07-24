<template>
    <div class="phone">
        <div class="phone-header">
            <div class="phone-title">手机</div>
            <div class="check-all">
                查看全部
                <span>
                    <i class="el-icon-arrow-right"></i>
                </span>
            </div>
        </div>
        <div class="phone-content">
            <div class="content-left">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=293&h=768&f=webp&q=90" alt="">
            </div>
            <div class="content-right">
                <ul>
                    <li v-for="item in dataList" :key="item.id">
                        <img :src="item.imgSrc" alt="">
                        <h3>{{ item.name }}</h3>
                        <p class="des">{{ item.des }}</p>
                        <p class="price">
                            <span class="now-price">{{ item.nowPrice }}</span>
                            <del class="old-price">{{ item.oldPrice && item.oldPrice }}</del>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            dataList: []
        }
    },
    created () {
        this.$api.getPhoneList().then (res => {
            if(res.statusText === 'OK') {
                this.dataList = res.data.phoneList;
            }
        })
    }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/home/phone.less';
</style>