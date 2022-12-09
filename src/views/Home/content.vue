<template>
  <div class="content-content">
    <div>
      <img class="iamges" :src="url" />
    </div>
    <div class="neirong">
      <span class="title">{{ title }}</span>
      <span class="zhaiyao">{{ abstract }}</span>
      <div class="neirong-icon">
        <el-icon><User /></el-icon>
        <el-icon><ChatDotRound /></el-icon>
        <el-icon><Star /></el-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

export default {
  props: {
    url: {
      type: String,
      default() {
        return "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
      },
    },
    title: {
      type: String,
      default() {
        return "标题";
      },
    },
    abstract: {
      type: String,
      default() {
        return "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要";
      },
    },
    
  },
  setup() {
    // onMounted(console.log(router));
    // const router = useRouter()
    const state = reactive({
      source: "../../VUE3.pdf", // 文件路径
      pageNum: 1, // 当前页数
      scale: 1, // 缩放比例
      numPages: 0, // 总页数
      handleSel: "",
      url: "../../assets/home/xingkong.png",
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="less">
.content-content {
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: .5rem 0rem;
  .iamges {
    height: 7.5rem;
    width: 9.375rem;
    border-radius: .1875rem;
  }
  .neirong {
    padding: .5rem .75rem;
    display: flex;
    flex-direction: column;
    .title {
      display: block;
      margin: .1875rem .25rem .625rem .25rem;
      font-size: 1.375rem;
      font-weight: 500;
      color: #222226;
      overflow: hidden;
      white-space: normal;
      word-break: break-word;
      text-align: left;
      line-height: 1.5625rem;
      font-family: Microsoft YaHei;
    }
    .zhaiyao{
        display: block;
      margin: .1875rem .25rem ;
      flex: 1;
        font-size: .875rem;
    font-weight: 400;
    color: #555666;
    overflow: hidden;
    white-space: normal;
    word-break: break-word;
    display: -webkit-box; 
    }
    .neirong-icon{
        width: 13.75rem;
        margin: .75rem .25rem  .1875rem .25rem ;;
        display: flex;
        justify-content: space-between;
    }
  }
}
</style>
