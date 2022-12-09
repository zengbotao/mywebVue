<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-28 16:30:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-09 12:40:09
-->
<template>
  <div class="content-home">
    <Silder />
    <div class="content-main">
      <MdEditor v-model="text" class="mdEditor" :toolbarsExclude="exIconList"  previewOnly previewTheme="github" scrollAuto codeTheme="github"/>
      <el-backtop :bottom="100"> </el-backtop>
    </div>
    <Silder/>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed , ref} from "vue";
import Content from "./content.vue";
import Tips from "@/components/silder/tips.vue";
import Silder from "@/components/silder/index.vue";
import text from '../../ddd.md?raw'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {login} from '@/api/home'
export default {
  components: { Content, Tips, Silder,MdEditor },
  setup() {
    const state = reactive({
      text:text,
    });
    const exIconList=ref(['link', 'mermaid', 'katex', 'github'])
    const getLogin=()=>{
      login().then((item)=>{
        console.log(item)
      }).catch((err)=>{
        console.log(err)
      })
    }
    onMounted(()=>{
      getLogin()
    });
    return {
      ...toRefs(state),
      exIconList,
      getLogin
    };
  },
};
</script>
<style lang="less" scoped>
.content-home {
    padding-top: 3.75rem;
    min-height: 47.5625rem;
    overflow-y: auto;
    display: flex;
  .content-main {
    flex: 1;
    padding: 0.75rem 0 0 0.75rem;
    .mdEditor{
      padding:0 .9375rem;
      background-color: @Gbgc-color;
      font-family:PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    }
  }
}

</style>
