//vite打包时的配置文件
import { defineConfig } from 'vite'//导入ts语法提示
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'//导入命令行输出ts语法检测结果的插件
import viteCompression from "vite-plugin-compression";//gzip代码压缩
//https://blog.csdn.net/skyblacktoday/article/details/124456738?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166574204416782388047321%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166574204416782388047321&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-124456738-null-null.142^v56^pc_rank_34_1,201^v3^control_1&utm_term=vite%20CreateHtmlPlugin&spm=1018.2226.3001.4187
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',//
  plugins: [
    vue(),
    checker({typescript:true}),
    viteCompression(),
  ],

})
