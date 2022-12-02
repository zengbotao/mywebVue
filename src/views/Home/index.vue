<template>
  <div class="content-home">
    <Silder class="silder" />
    <div class="content-main">
      <MdEditor v-model="text" class="mdEditor" toolbarsExclude="['link', 'mermaid', 'katex', 'github']"  previewOnly="previewOnly" previewTheme="github" scrollAuto codeTheme="github"/>
      <el-backtop :bottom="100"> </el-backtop>
    </div>

    <Silder class="silder" />
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
export default {
  components: { Content, Tips, Silder,MdEditor },
  setup() {
    const state = reactive({
      text:text
    });
    
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="less" scoped>
.content-home {
  display: flex;
  .content-main {
    flex: 1;
    margin: 0.75rem 0 0 0;
    .mdEditor{
      padding:0 .9375rem;
      background-color: @Gbgc-color;
      font-family:PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    }
  }
}
</style>
