<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-29 21:00:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-09 12:37:33
-->
<template>
  <div>
      <div>
        <Tips  /> 
        <Tips title="相关内容"/>
        <Tips title="推荐内容"/>
      </div>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
import Tips from "./tips.vue"
export default {
  props: {
    title: {
      type: String,
      default() {
        return "最新内容";
      },
    },
    textList: {
      type:Array,
      default() {
        return [{title:'标题'},{title:'标题'},{title:'标题'},{title:'标题'}];
      },
    },
  },
  components:{Tips},
  setup() {
    // onMounted(console.log(router));
    // const router = useRouter()
    const state = reactive({
      url: "../../assets/home/xingkong.png",
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
</style>
