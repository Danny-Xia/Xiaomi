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

export default {
    getDropList,
    getMenuList
}


