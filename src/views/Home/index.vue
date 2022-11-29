<template>
  <div class="content-home">
    <div class="content-right">
      <div>
        <Tips /> 
        <Tips title="相关内容"/>
        <Tips title="推荐内容"/>
      </div>
    </div>
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
      <div></div>
    </div>

    <div class="content-right">
      <div>
        <Tips  /> 
        <Tips title="相关内容"/>
        <Tips title="推荐内容"/>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
import Content from "./content.vue";
import Tips from "@/components/tips.vue"
import { useRouter } from "vue-router";
export default {
  components: { Content,Tips},
  setup() {
    // onMounted(console.log(router));
    // const router = useRouter();
    const state = reactive({
      source: "../../VUE3.pdf", // 文件路径
      pageNum: 1, // 当前页数
      scale: 1, // 缩放比例
      numPages: 0, // 总页数
      handleSel: "",
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
    margin: 12px 0;
  }
  .content-right {
    width: 260px;
    padding: 5px;
  
  }
}
</style>
