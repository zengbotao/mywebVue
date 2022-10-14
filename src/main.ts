import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "./mock/index.js";
console.log(import.meta.env.ENV_BASE_URL)//需要在vite-env.d.ts中添加ts接口，如果语法不兼容的话
createApp(App).mount('#app')
