<template>
    <div class="choose-square">
        <div class="title">{{ title }}</div>
        <ul class="content">
            <li v-for="(item, index) in contents" 
            :key="item.id"
            :class="{'active': index === curIndex}"
            @click="handleClick(index, item.content)"
            >
                {{ item.content }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: ['title', 'contents'],
    data () {
        return {
            curIndex: 0,
            blue: [
                {id: "blue-1", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817543.6538379.jpg"},
                {id: "blue-2", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817543.64522755.jpg"},
                {id: "blue-3", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817543.65858985.jpg"},
                {id: "blue-4", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817543.6531945.jpg"},
                {id: "blue-5", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817543.6483614.jpg"}
            ],
            qing: [
                {id: "qing-1", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817487.06835456.jpg"},
                {id: "qing-2", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817487.06316490.jpg"},
                {id: "qing-3", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817487.06272588.jpg"},
                {id: "qing-4", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817487.06835456.jpg"},
                {id: "qing-5", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817487.06381642.jpg"}
            ],
            block: [
                {id: "block-1", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817381.81497487.jpg"},
                {id: "block-2", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817423.33677202.jpg"},
                {id: "block-3", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817414.30541430.jpg"},
                {id: "block-4", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817381.87186612.jpg"},
                {id: "block-5", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817381.81631646.jpg"}
            ],
            pink: [
                 {id: "pink-1", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.03891296.jpg"},
                 {id: "pink-2", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.03417574.jpg"},
                 {id: "pink-3", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.0391459.jpg"},
                 {id: "pink-4", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.02758535.jpg"},
                 {id: "pink-5", imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.03663677.jpg"},
            ]
        }
    },
    methods: {
        ...mapMutations(['changeShopCurPrice', 'changePhoneROM', 'changePhoneColor', 'changeShopSwiperList']),
        handleClick (index, content) {
            this.curIndex = index;
            if(this.title === '选择版本') {
                this.changeShopCurPrice(this.contents[index].price);
                this.changePhoneROM(this.contents[index].content);
            } else if (this.title === '选择颜色') {
                const color = this.contents[index].content;
                this.changePhoneColor(color);
                if(color === '莲藕粉') {
                    this.changeShopSwiperList(this.pink);
                } else if (color === '霓虹蓝') {
                    this.changeShopSwiperList(this.blue);
                } else if (color === '墨黛青') {
                    this.changeShopSwiperList(this.qing);
                } else if (color === '碳素黑') {
                    this.changeShopSwiperList(this.block);
                }

            }
            console.log(this.$store.state.shopCurPrice, this.$store.state.phoneROM, this.$store.state.phoneColor)
        }
    }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/shop/chooseSquare.less';
</style>