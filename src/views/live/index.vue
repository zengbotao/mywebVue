<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-02 10:38:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-09 12:46:30
-->
<template>
  <div class="content-home">
    <Silder class="silder" />
    <div class="content-main">


    </div>


  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
import Content from "../Home/content.vue";
import Tips from "@/components/silder/tips.vue"
import Silder from "@/components/silder/index.vue"
import { useRouter } from "vue-router";
import text from '../../ddd.md?raw'
export default {
  components: { Content,Tips,Silder},
  setup() {
    // onMounted(console.log(router));
    // const router = useRouter();
    const state = reactive({
      source: "../../VUE3.pdf", // 文件路径
      pageNum: 1, // 当前页数
      scale: 1, // 缩放比例
      numPages: 0, // 总页数
      handleSel: "",
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
  padding-top: 3.75rem;
  .content-main {
    flex: 1;
    margin: .75rem 0 0 0;
  }
}
</style>
