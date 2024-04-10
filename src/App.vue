<template>
  <div id="app"> 
    <router-view/>  
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const state = reactive({
      transitionName:   "slide-left",
      activeIndex: 1,
      layout:true,
      input3:"",
      squareUrl:
        "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41100202000153",
      handleSel: "",
    });
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      ...toRefs(state),
      handleSelect,
    };
  },
};
</script>

<style lang="less" scoped> 
#app {
  background-color: @Gbgc-color;
  color: #fff;
  font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\5fae\8f6f\96c5\9ed1,Arial,sans-serif;
  color: #010b14;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
#app ::-webkit-scrollbar{
  display:none;
}
</style>
