<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-28 16:20:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-09 12:36:28
-->
<template>
    <div class="full">
      <Header class="headers"></Header>    
      <router-view />      
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import { reactive, toRefs } from "vue";
  import { useRouter } from "vue-router";
  import Home from "../views/Home/index.vue";
  import Header from "../components/header.vue";
  import Footer from '@/components/footer.vue'
  export default {
    components: { Home,Header,Footer},
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
  .full {
    background-color: @Gbgc-color;
    color: #fff;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #010b14;
    margin: 0 14rem;
   
    .headers{
      background-color: @Gbgc-color;
      width: calc(100% - 30rem);
      z-index: 1001;
      position: fixed;
      top:0px;
  
    }
  }
  </style>
  