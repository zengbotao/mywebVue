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
      <div
        class="label"
        v-for="(item, index) in scanlist"
        :key="index"
        @click="selectOne(item.value)"
        :class="active === item.value ? 'activeClass' : ''"
      >
        {{ item.label }}
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
      if (state.active === scan) {
        state.active = "";
        context.emit("selectScan", state.active);
      } else {
        state.active = scan;
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
  margin: 0.75rem;
  width: 14.5rem;
  .tips-title {
    background-color: @GorangeS;
    padding: 0 0.8125rem;
    font-weight: 500;
    text-align: center;
    font-size: 1rem;
    overflow: hidden;
    line-height: 2.5rem;
    color: #fff;
  }
  .tips-neirong {
    background-color: @Gbgc-color;
    padding: 0.6rem 0.8125rem;
    font-weight: 500;
    font-size: 0.875rem;
    overflow: hidden;
    border-top: 0.0625rem solid #e9e3e3;
    line-height: 1.9375rem;
    color: #555666;
    text-align: left;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .label {
      align-items: center;
      padding: 0.1875rem;
      background-color: @GorangeQ;
      border: @GorangeS 0.0625rem solid;
      margin: 0.2875rem 0.4rem;
      width: 10rem;
      font-size: 0.75rem;
      text-align: center;
      &:hover {
        background-color: @GorangeS;
        color: #fff;
        cursor: pointer;
      }
    }
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
.activeClass {
  background-color: @GorangeS !important;
  color: #fff;
}
</style>
