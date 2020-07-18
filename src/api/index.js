import axios from 'axios'

const instance = axios.create({
    baseURL: `./data`
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


