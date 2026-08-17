import { createApp } from 'vue'
import App from '@/App.vue'

createApp(App).mount('#app')


import { getCategory } from "@/apis/testAPI";
getCategory()
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log("请求失败", e)
    })