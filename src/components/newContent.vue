<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-29 17:59:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-16 22:46:02
-->
<template>
  <div class="tips-main">
    <div class="tips-title">最新内容</div>
    <div class="tips-neirong">
      <div
        class="label"
        v-for="(item, index) in textList"
        :key="index"
        @click="selectOne(item)"
      >
        {{ index +1}}. {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
import { getMdbyID } from "@/api/home";
export default {
  props: {
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
      scanlist: props.textList,
      title: "文章类型",
    });
    const selectOne = (items) => {
       getMdbyID({id:items.id})
        .then((item) => {
          console.log(item.data.data.text);   
          context.emit("showContent", JSON.parse(item.data.data.text), items.title);
        })
        .catch((err) => {
          showMsg("获取内容失败","error");
        });
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
  width: 20rem;
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
    .label {
      margin-left: 0.5rem;
      &:hover {
        color: @GorangeS;
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

</style>
