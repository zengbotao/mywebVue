<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-28 16:20:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-14 10:54:37
-->
<template>
  <div id="app"> 
    <router-view />      
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const state = reactive({
      transitionName: "slide-left",
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #010b14;
}
</style>
