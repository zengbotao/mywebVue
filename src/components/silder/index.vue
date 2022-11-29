<template>
  <div class="content-right">
      <div>
        <Tips  /> 
        <Tips title="相关内容"/>
        <Tips title="推荐内容"/>
      </div>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
import Tips from "@/components/tips.vue"
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
.content-right {
  width: 260px;
  padding: 5px;

}
</style>
