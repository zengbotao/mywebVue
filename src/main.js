import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import './common/style/normalize.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import gallery from 'img-vuer3'
import 'img-vuer3/dist/style.css'
const app = createApp(App) // 创建实例
app.use(ElementPlus, { locale });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(gallery, {
    swipeThreshold: 100, // default 100
    isIndexShow: true, // show image index, default true
    useCloseButton: true, // trigger gallery close with close button, default true
    preload: true, // preload images in the same group, default true
    sliderBackgroundColor: 'rgba(0,0,0,0.6)',
    sliderZIndex: 1001,
  })
app.use(router)
app.use(store)


app.mount('#app')