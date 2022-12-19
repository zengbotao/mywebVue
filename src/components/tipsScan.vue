<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-29 17:59:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-16 22:46:02
-->
<template>
  <div class="tips-main">
    <div class="tips-title">{{ title }}</div>
    <div class="tips-neirong">
      <div v-for="(item, index) in scanlist" :key="index">
        <el-button
          :key="item.value"
          type="warning"
          size="small"
          @click="selectOne(item.value)"
          plain
          :class="active === item.value ? 'activeClass' : ''"
        >
          {{ item.label }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
import { scanall, qianlist, houlist } from "@/common/js/globleData";
export default {
  props: {
    title: {
      type: String,
      default() {
        return "最新内容";
      },
    },
    textList: {
      type: Array,
      default() {
        return [
          { title: "标题" },
          { title: "标题" },
          { title: "标题" },
          { title: "标题" },
        ];
      },
    },
  },
  setup(props, context) {
    const state = reactive({
      scanlist: scanall,
      title: "文章类型",
      active: "",
    });
    const selectOne = (scan) => {
      if(state.active === scan){
        state.active=''
        context.emit("selectScan", state.active);
      }else{
        state.active = scan
        context.emit("selectScan", state.active);
      }
      
    };
    return {
      ...toRefs(state),
      selectOne,
    };
  },
};
</script>

<style lang="less" scoped>
.tips-main {
  border: 0.0625rem solid rgba(236, 181, 98, 0.801);
  border-radius: 0.25rem;
  box-shadow: 0 0 0.1875rem 0 rgba(8, 111, 247, 0.23);
  margin: 0.75rem 0;
  width: 14.5rem;
  .tips-title {
    background-color: rgba(230, 141, 8, 0.801);
    padding: 0 0.8125rem;
    font-weight: 500;
    // margin: 0 .0625rem;
    font-size: 1.125rem;
    overflow: hidden;
    line-height: 1.9375rem;
    color: #fff;
    text-align: left;
  }
  .tips-neirong {
    background-color: @Gbgc-color;
    padding: 0 0.8125rem;
    font-weight: 500;
    font-size: 1.125rem;
    overflow: hidden;
    border-top: 0.0625rem solid #e9e3e3;
    line-height: 1.9375rem;
    color: #555666;
    text-align: left;
  }
  .tip-icon {
    position: relative;
    top: 0.1875rem;
    color: #555666;
  }
  .tip-title {
    color: #555666;
    font-size: 1rem;
  }
}
.activeClass{
  background-color: rgba(230, 141, 8, 0.801);
  color: #fff;
}
</style>
