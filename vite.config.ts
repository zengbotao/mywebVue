//vite打包时的配置文件
import { defineConfig } from 'vite'//导入ts语法提示
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'//导入命令行输出ts语法检测结果的插件
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),checker({typescript:true})]
})
