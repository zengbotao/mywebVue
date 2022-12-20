<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-01 20:11:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-16 13:47:20
-->
<template>
  <div class="learn">
    <div class="wrap">
      <!-- @click="Savemd" -->
      <div
        v-for="(item, index) in contenlist"
        :key="index"
        class="content"
        @click="Savemd"
      >
        <h2 class="title">{{ item.title }}下载</h2>
        <div class="neirong">{{ item.description1 }}</div>
        <div class="neirong">提取码:{{ item.description2 }}</div>
      </div>
    </div>
    <el-dialog v-model="mdVisible" title="Tips" width="30%">
      <up-load :text="text" @close="close"></up-load>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs, computed } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import upLoad from "@/views/download/upload";
import { pagedownload } from "@/api/download";
export default {
  components: { MdEditor, upLoad },
  setup() {
    const state = reactive({
      text: "",
      contenlist: [],
      mdVisible: false,
      Title: "",
      loading: false, //加载页面n
      loadingContent: false, //加载列表
      noMore: computed(() => (pageCan.PageCur - 1) * 10 >= pageCan.PageTotal), //没有加载了
      stopScroll: computed(() => state.loadingContent || state.noMore),
    });
    //显示编辑弹框
    const Savemd = () => {
      console.log("save");
      state.mdVisible = true;
    };
    //关闭弹框
    const close = () => {
      state.mdVisible = false;
    };
    //分页参数
    const pageCan = reactive({
      PageSize: 10,
      PageCur: 1,
      PageTotal: null,
    });
    /**
     * @description: 首页默认展示
     * @return {*}
     * @author: zengbotao@myhexin.com
     */
    const showdownload = () => {
      let params = { ...pageCan, Title: state.Title };
      state.loading = true;
      pagedownload(params)
        .then((item) => {
          state.contenlist = item.data.data.data.map((item) => {
            item.description1 = JSON.parse(item.description).split("提取码")[0];
            item.description2 = JSON.parse(item.description).split("提取码")[1];
            return item;
          });
          if(state.contenlist.length % 2===1){
            state.contenlist.push({ 
                description1: "链接：https://zbt.ailiwen.com.cn/ ",
                description2: "点击即可获取",
                title: "站长的笔记",
                time: "2022-12-19T07:45:32.000+00:00"
            })
          }
          state.loading = false;
          pageCan.PageTotal = item.data.data.page.pageTotal;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    onMounted(() => {
      showdownload();
    });
    return {
      ...toRefs(state),
      Savemd,
      pageCan,
      showdownload,
      close,
    };
  },
};
</script>
<style lang="less" scoped>
.learn {
  min-height: 60rem;
  overflow-y: auto;
  padding-top: 5rem;
  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .content {
      // flex: 1;
      width: 36rem;
      margin: 2rem;
      padding: 1rem;
      border-radius: 6px;
      background-color: rgb(245, 221, 163);
      .title {
        display: block;
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
      .neirong {
        font-weight: 400;
        line-height: 1.5rem;
        margin: 0 0 1rem;
        overflow-x: auto;
        overflow-y: hidden;
      }
    }
  }

  .editor {
    min-height: 60rem;
  }
}
</style>
