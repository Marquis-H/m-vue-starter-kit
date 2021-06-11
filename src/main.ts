import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import instance from "./utils/http";
import installElementPlus from './plugins/element'
import '@/scss/tailwind.css'

const app = createApp(App)
app.config.globalProperties.$axios = instance; // API请求方法
installElementPlus(app)
app.use(store).use(router).mount('#app')