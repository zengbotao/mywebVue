<template>
  <div class="content-home">
    <Silder class="silder-left" />
    <div class="content-main">
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
      <Content></Content>
{{text}}
        <v-md-preview :text="text" height="400px"></v-md-preview>

    </div>

   <Silder class="silder-right"/>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
import Content from "./content.vue";
import Tips from "@/components/tips.vue"
import Silder from "@/components/silder/index.vue"
import { useRouter } from "vue-router";
import text from '../../ddd.md?raw'
console.log(text)
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
  padding: 0 16.875rem;
  .content-main {
    flex: 1;
    margin: .75rem 0;
  }
  .silder-right{
    position: fixed;
    top:4rem;
    right: 17rem;
  }
  .silder-left{
    position: fixed;
    top:4rem;
    left: 17rem;
  }
}
</style>
