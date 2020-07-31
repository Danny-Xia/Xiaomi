import axios from 'axios'
const env = process.env.NODE_ENV;
const baseURL = env === 'production' ? './data' : '/data';
const instance = axios.create({
    baseURL
})



function getDropList() {
    return instance.get('/homeDropList.json');
}

function getMenuList() {
    return instance.get('/leftMenu.json');
}

function getShangouList() {
    return instance.get('/shangou.json');
}

function getPhoneList() {
    return instance.get('/phone.json');
}

function getJiadianList() {
    return instance.get('/jiadian.json');
}

function getZhinengList() {
    return instance.get('/zhineng.json');
}

function getDapeiList() {
    return instance.get('/dapei.json');
}

function getPeijianList() {
    return instance.get('/peijian.json');
}

function getZhoubianList() {
    return instance.get('/zhoubian.json');
}

function getVideosList() {
    return instance.get('/videos.json');
}



function register(account, password) {
    return axios({
        url: env === 'production' ? 'https://open.duyiedu.com/api/student/stuRegister' : '/api/student/stuRegister',
        method: "post",
        params: {

            appkey: 'Danny_1569673058582',
            account,
            password,
            rePassword: password,
            username: '超级管理员'

        }
    })
}

function login(account, password) {
    return axios({
        url: env === 'production' ? 'https://open.duyiedu.com/api/student/stuLogin' : '/api/student/stuLogin',
        method: "post",
        params: {

            appkey: 'Danny_1569673058582',
            account,
            password

        }
    })
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
    getVideosList,
    register,
    login
}