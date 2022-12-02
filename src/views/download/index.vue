<template>
    <div class="content-home">
      <Silder class="silder" />
      <div class="content-main">
  
      </div>
  
     <Silder class="silder"/>
    </div>
  </template>
  
  <script>
  import { reactive, toRefs, onMounted, computed } from "vue";
  import Tips from "@/components/silder/tips.vue"
  import Silder from "@/components/silder/index.vue"
  import { useRouter } from "vue-router";
  import text from '../../ddd.md?raw'
  console.log(text)
  export default {
    components: { Tips,Silder},
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
    .content-main {
      flex: 1;
      margin: .75rem 0 0 0;
    }
  }
  </style>
  