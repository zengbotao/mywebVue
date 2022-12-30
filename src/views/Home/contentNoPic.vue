<template>
  <div class="content-content">
    <div class="neirong">
      <h2 class="title" @click="showContent(id)">{{ title }}</h2>
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
import { reactive, toRefs, inject } from "vue";
import { getMdbyID } from "@/api/home";
import {showMsg} from "@/utils/globleFuc.js"
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
    id: {
      type: Number,
    },
  },
  setup(props, context) {
    const state = reactive({
    
    });
    const showContent = (id) => {
      getMdbyID({id:id})
        .then((item) => {
          console.log(item.data.data.text);   
          context.emit("showContent", JSON.parse(item.data.data.text), props.title);
        })
        .catch((err) => {

          showMsg("获取内容失败","error");
        });
      
    };

    return {
      ...toRefs(state),
      showContent,
    };
  },
};
</script>
<style lang="less">
.content-content {
  display: flex;
  width: 100%;
  flex-direction: row;
  border-bottom: .0625rem solid #ececee;
  .neirong {
    padding: 0.5rem 0.75rem;
    display: flex;
    flex-direction: column;
    .title {
      display: block;
      margin: 0.625rem 0.25rem 0.125rem 0.25rem;
      font-size: 1.2rem;
      height: 2.5rem;
      font-weight: 500;
      color: #222226;
      overflow: hidden;
      white-space: normal;
      word-break: break-word;
      text-align: left;
      line-height: 1.5625rem;
      font-family: Microsoft YaHei;
      &:hover {
        cursor: pointer;
        text-decoration: underline #c4c4c7;
      }
    }
    .zhaiyao {
      display: block;
      margin: 0.1875rem 0.25rem;
      font-size: 0.875rem;
      line-height: 2.1rem;
      font-weight: 400;
      color: #83848b;
      overflow: hidden;
      white-space: normal;
      word-break: break-word;
      height: 4.5rem;
    }
    .neirong-icon {
      width: 13.75rem;
      margin: 0.75rem 0.25rem 0.1875rem 0.25rem;
      display: flex;
      justify-content: space-between;
      color: rgb(49, 95, 49);
    }
  }
}
</style>
