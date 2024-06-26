/*
 * @Description:
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-28 16:20:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-10 14:47:56
 */
import { defineConfig } from "vite";
// npx vite preview  打包后预览2cx
export default defineConfig({
  server: {
    proxy: {
      "^/api": {
        target: "http://121.4.81.192:7999",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    sourcemap: true,
  },
});
