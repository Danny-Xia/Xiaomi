import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'production' ? './data' : '/data'
const instance = axios.create({
    baseURL
})

function getDropList () {
    return instance.get('/homeDropList.json');
}

function getMenuList () {
    return instance.get('/leftMenu.json');
}

function getShangouList () {
    return instance.get('/shangou.json');
}

function getPhoneList () {
    return instance.get('/phone.json');
}

function getJiadianList () {
    return instance.get('/jiadian.json');
}

function getZhinengList () {
    return instance.get('/zhineng.json');
}

function getDapeiList () {
    return instance.get('/dapei.json');
}

function getPeijianList () {
    return instance.get('/peijian.json');
}

function getZhoubianList () {
    return instance.get('/zhoubian.json');
}

function getVideosList () {
    return instance.get('/videos.json');
}
export default {
    getDropList,
    getMenuList,
    getShangouList,
    getPhoneList,
    getJiadianList,
    getZhinengList,
    getDapeiList,
    getPeijianList,
    getZhoubianList,
    getVideosList
}