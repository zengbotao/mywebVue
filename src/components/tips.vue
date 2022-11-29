<template>
  <div class="tips-main">

    <div class="tips-title">{{title}}</div>
    <div  class="tips-neirong">
        <div v-for="(item,index) in textList" :key="index">
            <el-icon class="tip-icon"><CaretRight /></el-icon>
            <span class="tip-title">{{item.title}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from "vue";
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
.tips-main{
    border: 1px solid #D8D8D8;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(8, 111, 247, 0.23);
    margin: 12px 0;
    .tips-title{
        background-color: rgba(52, 90, 192, 0.801);
        padding: 0 15px;
        font-weight: 500;
        font-size: 18px;
        overflow: hidden;
        line-height: 31px;
        color: #fff;
        text-align: left;

    }
    .tips-neirong{
        background-color: rgba(143, 171, 248, 0.801);
        padding: 0 13px;
        font-weight: 500;
        font-size: 18px;
        overflow: hidden;
        border-top: 1px solid #5c5a5a;
        line-height: 31px;
        color: #555666;
        text-align: left;
    }
    .tip-icon{
        position: relative;
        top:3px;
        color: #555666;
    }
    .tip-title{
        color: #555666;
        font-size: 16px;
    }
}
</style>
