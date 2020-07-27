<template>
    <div class="nav-bar">
        <div class="nav-bar-content">
            <ul class="nav-l">
                <li class="active">{{ title }}</li>
                <li v-for="item in lList" :key="item.id">
                    <span>{{ item.title }}</span>
                </li>
            </ul>
            <ul class="nav-r">
                <li v-for="item in rList" :key="item.id">
                    <router-link tag="span" :to="{name: item.name, params: {id: title}}">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            lList: [
                {
                    id: 'nav-bar-l-1',
                    title: 'Redmi8'
                },
                {
                    id: 'nav-bar-l-2',
                    title: 'Redmi 8A'
                }
            ],
            rList: [
                {
                    id: 'r-list-1',
                    title: '概述',
                    path: '#',
                    name: 'summary'
                },
                {
                    id: 'r-list-2',
                    title: '参数',
                    path: '/parameter',
                    name: 'parameter'
                },
                {
                    id: 'r-list-3',
                    title: 'F码通道',
                    path: '#',
                    name: 'passageway'
                },
                {
                    id: 'r-list-4',
                    title: '咨询客服',
                    path: '#',
                    name: 'consult'
                },
                {
                    id: 'r-list-5',
                    title: '用户评价',
                    path: '#',
                    name: 'evaluate'
                }
                
            ]
        }
    },
    props: ['title'],
    created () {
        document.onscroll = function () {
            const NavBar = document.getElementsByClassName('nav-bar')[0];
            if(NavBar) {
                if(window.pageYOffset > 200) {
                NavBar.className = 'nav-bar nav-bar-fixed';
            } else {
                 NavBar.className = 'nav-bar';
            }
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/navBar.less';
</style>