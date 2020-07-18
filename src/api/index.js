import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://asddchao.gitee.io/Xiaomi/data' : '/data'
})

function getDropList () {
    return instance.get('/homeDropList.json');
}
function getMenuList () {
    return instance.get('/leftMenu.json');
}

export default {
    getDropList,
    getMenuList
}


