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
  margin: 8px 12px;
  .iamges {
    height: 120px;
    width: 150px;
    border-radius: 3px;
  }
  .neirong {
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
    .title {
      display: block;
      margin: 3px 4px 10px 4px;
      font-size: 22px;
      font-weight: 500;
      color: #222226;
      overflow: hidden;
      white-space: normal;
      word-break: break-word;
      text-align: left;
      line-height: 25px;
      font-family: Microsoft YaHei;
    }
    .zhaiyao{
        display: block;
      margin: 3px 4px ;
      flex: 1;
        font-size: 14px;
    font-weight: 400;
    color: #555666;
    overflow: hidden;
    white-space: normal;
    word-break: break-word;
    display: -webkit-box; 
    }
    .neirong-icon{
        width: 220px;
        margin: 12px 4px  3px 4px ;;
        display: flex;
        justify-content: space-between;
    }
  }
}
</style>
