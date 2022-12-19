<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-01 20:11:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-16 13:47:20
-->
<template>
  <div class="learn">
    <md-editor class="editor" v-model="text" mode="sv" @onSave="Savemd"/>
    <el-dialog
    v-model="mdVisible"
    title="Tips"
    width="30%"
  >
    <up-load :text="text" @close="close"></up-load>
  </el-dialog>
  </div>
  
</template>

<script>
import { ref,reactive ,onMounted,toRefs,computed} from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import upLoad from '@/views/learn/upload'
export default {
  components: {MdEditor,upLoad },
  setup() {
    const state = reactive({
      text:'',
      mdVisible:false
    });
    const Savemd=()=>{
      console.log('save')
      state.mdVisible=true
    }
    const exIconList=ref(['link', 'mermaid', 'katex', 'github'])
    const close=()=>{
      state.mdVisible=false
    }
   
    onMounted(()=>{
    });
    return {
      ...toRefs(state),
      exIconList,
      Savemd,
      close
    

    };
  },
};
</script>
<style lang="less" scoped>
.learn{
  padding-top: 3.75rem;
  .editor{
    min-height: 60rem;
  }
}
</style>