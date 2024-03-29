/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-28 16:20:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-09 16:20:54
 */
import { defineConfig } from "vite"; //记得修改package.json的运行脚本，比对差别
import path from "path";
import vue from "@vitejs/plugin-vue"; //下载，导入扩展，并配置插件，vue要3.2.5版本以上才支持。一定要配置在插件中！！！
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import requireTransform from "vite-plugin-require-transform"; //使得vite可以识别require（）
//npm install postcss-px2rem px2rem-loader --save
import px2rem from "postcss-px2rem";

import legacy from "@vitejs/plugin-legacy"; //低版本浏览器兼容

const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16,
});
export default defineConfig({
  base: "./", //记得修改index.heml,路径设置为当前路径
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    requireTransform({
      fileRegex: /.js$|.vue$/,
    }),
    legacy({
      polyfills: ["es.promise.finally", "es/map", "es/set"],
      modernPolyfills: ["es.promise.finally"],
      targets: ["defaults", "not IE 11"],
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCaseOnly", // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
      scopeBehaviour: "local",
      hashPrefix: "ailiwen",
    },
    preprocessorOptions: {
      postcss: {
        plugins: [
          postcss, //vite项目配置rem
        ],
      },
      less: {
        additionalData: '@import "../src/common/style/globle.less";', //vite项目配置less全局样式
      },
    },
  },
  resolve: {
    alias: {
      // 打包相关能尽量给绝对路径,就给绝对
      // 程序运行的目录  相对下面的src => 的绝对路径
      "@": path.resolve(__dirname, "..", "./src"),
      "~": path.resolve(__dirname, "..", "./"), // 项目根目录
      node_modules: path.resolve(__dirname, "..", "./node_modules"),
    },
    extensions: [".mjs", ".js", ".css", ".json", ".vue"], //记得添加.vue,否则vite会识别不了
  },
  preview: {
    //预览，也可使使用代理，模仿打包后的生产环境，配置见官网
    port: 8080, //npx vite preview
    proxy: {
      "^/api": {
        target: "http://121.4.81.192:7999",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    // 构建生产包时的一些配置策略,

    //开发环境时利用的esbuild
    rollupOptions: {
      // 配置rollup的一些构建策略
      output: {
        // 控制输出
        // 在rollup里面, hash代表将你的文件名和文件内容进行组合计算得来的结果
        assetFileNames: "[hash].[name].[ext]",
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true, //兼容commonjs语法还是不行
      // namedExports:{
      //   'node_modules/axios/lib/utils.js':['isStandardBrowserEnv']
      // }
    },
    assetsInlineLimit: 4096000, // 4000kb
    outDir: "dist", // 配置输出目录
    assetsDir: "static", // 配置输出目录中的静态资源目录
    emptyOutDir: true, // 清除输出目录中的所有文件
  },
});
