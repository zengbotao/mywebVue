<template>
  <div id="app">
    <div class="content">
      <Header></Header>    
      <router-view />      
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import Home from "./views/Home/index.vue";
import Header from "./components/header.vue";
import Footer from '@/components/footer.vue'
export default {
  components: { Home,Header,Footer },
  setup() {
    const state = reactive({
      transitionName: "slide-left",
      activeIndex: 1,
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
  padding: 0 240px;
  display: flex;
  flex-direction: row;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;

  }
}
</style>
