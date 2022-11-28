import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import './common/style/normalize.css';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
const app = createApp(App) // 创建实例
app.use(ElementPlus, { locale });

app.use(router)
app.use(store)


app.mount('#app')