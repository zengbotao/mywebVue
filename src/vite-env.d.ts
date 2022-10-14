/// <reference types="vite/client" />

interface ImportMetaEnv{ //名字没有出来
  readonly ENV_BASE_URL:string
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
