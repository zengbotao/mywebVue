<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-28 16:30:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-19 09:58:34
-->
<template>
  <div class="content-home" v-loading="loading">
    <div class="content-main" v-show="!display">
      <div
        class="reee"
        v-infinite-scroll="showsize"
        :infinite-scroll-disabled="stopScroll"
      >
        <content-no-pic
          class="contentt"
          v-for="(item, index) in contenlist"
          :key="index"
          :title="item.title"
          :abstract="item.description"
          :id="item.id"
          @showContent="showContent"
        >
        </content-no-pic>
        <p v-if="loadingContent" class="info">加载中...</p>
        <p v-if="noMore" class="info">我也是有底线的...</p>
      </div>

      <el-backtop :bottom="100"> </el-backtop>
    </div>

    <div class="content-main" v-show="display">
      <div>
        <h2 class="title">{{ title }}</h2>
        <p round class="back" @click="backlist">----返回文章列表</p>
      </div>
      <MdEditor
        v-model="text"
        class="mdEditor"
        :toolbarsExclude="exIconList"
        previewOnly
        previewTheme="github"
        scrollAuto
        codeTheme="github"
      />
      <el-backtop :bottom="100"> </el-backtop>
    </div>
    <tips-scan class="silder-right" @selectScan="selectScan" />
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed, ref,onUnmounted} from "vue";
import contentNoPic from "./contentNoPic.vue";
import Tips from "@/components/silder/tips.vue";
import tipsScan from "@/components/tipsScan";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { pageMd } from "@/api/home";
import useEmitter from "@/utils/eventBus";
export default {
  components: { contentNoPic, Tips, MdEditor, tipsScan },
  setup() {
    const state = reactive({
      contenlist: [],
      display: false,
      text: "",
      title: "",
      searchNUmm: 0,
      loading: false, //加载页面n
      loadingContent: false, //加载列表
      noMore: computed(() => pageCan.PageCur * 10 >= pageCan.PageTotal), //没有加载了
      stopScroll: computed(() => state.loadingContent || state.noMore),
    });
    //分页参数
    const pageCan = reactive({
      PageSize: 10,
      PageCur: 1,
      PageTotal: null,
    });
    //条件筛选
    const Wrapper = reactive({
      Scan: "",
      Title: "",
      Label: "",
    });
    const Emitter = useEmitter();
    const exIconList = ref(["link", "mermaid", "katex", "github"]);

    /**
     * @description: 首页默认展示
     * @return {*}
     * @author: zengbotao@myhexin.com
     */
    const showMd = () => {
      let params = { ...pageCan, ...Wrapper };
      state.loading = true;
      pageMd(params)
        .then((item) => {
          state.contenlist = item.data.data.data;
          state.loading = false;
          pageCan.PageTotal = item.data.data.page.pageTotal;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    /**
     * @description: 开始查询范围
     * @param {*} scan
     * @return {*}
     * @author: zengbotao@myhexin.com
     */
    const selectScan = (scan) => {
      state.contenlist = [];
      Wrapper.Scan = scan;
      pageCan.PageCur = 1;
      showMd();
    };
    /**
     * @description: 无限滑动
     * @return {*}
     * @author: zengbotao@myhexin.com
     */
    const showsize = () => {
      if (state.stopScroll) return;
      pageCan.PageCur = pageCan.PageCur + 1;
      let params = { ...pageCan, ...Wrapper };
      state.loadingContent = true;
      pageMd(params)
        .then((item) => {
          state.contenlist.push(...item.data.data.data);
          pageCan.PageTotal = item.data.data.page.pageTotal;
          pageCan.PageCur = item.data.data.page.pageCur;
          state.loadingContent = false;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    /**
     * @description: 显示card的md详细内容
     * @param {*} text
     * @param {*} title
     * @return {*}
     * @author: zengbotao@myhexin.com
     */
    const showContent = (text, title) => {
      state.display = !state.display;
      state.text = text;
      state.title = title;
    };
    /**
     * @description: 关闭详情
     * @param {*} text
     * @param {*} title
     * @return {*}
     * @author: zengbotao@myhexin.com
     */
    const backlist = (text, title) => {
      state.display = !state.display;
      state.text = "";
      state.title = "";
    };
     /**
     * @description: 监听搜索
     * @param {*} text
     * @param {*} title
     * @return {*}
     * @author: zengbotao@myhexin.com
     */
    const SearchStr = (inputSearch) => {
        state.searchNUmm = state.searchNUmm + 1;
        Wrapper.Title=inputSearch
        pageCan.PageCur=0 //重置当前页
        state.contenlist=[] //清空列表
        showMd();
      };
    onMounted(() => {
      Emitter.on("SearchStrhome", SearchStr);
      if (state.searchNUmm > 0) {
        return;
      } else {
        showMd();
      }
    });
    onUnmounted(()=>{
      Emitter.off("SearchStrhome")
    })
    return {
      ...toRefs(state),
      exIconList,
      showMd,
      showContent,
      backlist,
      pageCan,
      Wrapper,
      showsize,
      selectScan,
      Emitter,
      SearchStr
    };
  },
};
</script>
<style lang="less" scoped>
.content-home {
  padding-top: 3.75rem;
  min-height: 47.5625rem;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  .silder-right {
    position: fixed;
    right: 14rem;
    top: 3.875rem;
  }

  .content-main {
    margin: 0 14rem 0 0;
    padding: 0.75rem 0 0 0rem;
    width: calc(100% - 16rem);
    .reee {
      height: 90rem;
      overflow: auto;
    }
    .contentt {
      // height: 8.73rem;
    }
    .title {
      display: block;
      font-size: 1.375rem;
      font-weight: 500;
      color: #222226;
      overflow: hidden;
      white-space: normal;
      word-break: break-word;
      text-align: center;
      line-height: 1.5625rem;
      font-family: Microsoft YaHei;
    }
    .info {
      color: deepskyblue;
      text-align: center;
    }
    .back {
      width: 14.5rem;
      float: right;
      font-weight: bold;
      color: rgba(52, 90, 192, 0.801);
      cursor: pointer;
    }
    .mdEditor {
      padding: 0 0.9375rem;
      background-color: @Gbgc-color;
      width: 100%;
      font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei,
        WenQuanYi Micro Hei, sans-serif;
      /deep/ .md-editor-content .md-editor-preview {
        font-size: 15px;
      }
      /deep/ img {
        width: 75%;
        margin: 0 12.5%;
      }
    }
  }
}
</style>
