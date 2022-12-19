<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-28 16:30:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-16 18:57:58
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
import Tips from "@/components/silder/tips.vue";
import Silder from "@/components/silder/index.vue";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {getMdbyID,pageMd} from '@/api/home'
export default {
  components: {  Tips, Silder,MdEditor },
  setup() {
    const state = reactive({
      text:'',
    });
    const exIconList=ref(['link', 'mermaid', 'katex', 'github'])
    
    const showMd=()=>{
      let params={
        PageSize:10,
        PageCur:1
      };
      // pageMd(params).then((item)=>{
      //   console.log(item)
      //   state.text=JSON.parse(item.data.data.text)
      // }).catch((err)=>{
      //   console.log(err)
      // })
    }
    onMounted(()=>{
      showMd()
    });
    return {
      ...toRefs(state),
      exIconList,
      showMd
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
    flex-direction: row;
  .content-main {
    // flex: 1;
    padding: 0.75rem 0 0 0.75rem;
    width: calc(100% - 30rem);
    .mdEditor{
      padding:0 .9375rem;
      background-color: @Gbgc-color;
      width: 100%;
      font-family:PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    }
  }
}

</style>
