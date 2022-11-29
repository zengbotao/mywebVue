<template>
        <div class="headers">
          <div>
            <img class="titlePic" src="../assets/logo.png" />
          </div>
  
          <div class="header-home">
            <router-link class="header-link" to="./Home"> 首页 </router-link>
            <router-link class="header-link" to="./category"> 生活 </router-link>
            <router-link class="header-link" to="./category"> 娱乐 </router-link>
            <router-link class="header-link" to="./category"> 学习 </router-link>
            <router-link class="header-link" to="./category">
              素材下载
            </router-link>
            <a
              class="header-link"
              href="https://zbt.ailiwen.com.cn/about/jianli.html"
              target="_blank"
            >
              关于我</a
            >
            
          </div>
          <el-input
              v-model="input3"
              placeholder="请输入...."
              class="input-with-select inputs"
            >
              <template #append> 搜索 </template>
            </el-input>
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
      .headers {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        border-bottom: 1px solid transparent;
        border-color: #f0f0f0;
        .titlePic {
          width: 120px;
          height: 60px;
          position: relative;
          top: 2px;
        }
        .inputs {
            margin: 15px;
            width: 280px;
          }
        .header-home {
          flex: 1;
          display: flex;
          .header-link {
            display: block;
            color: #000;
            font-size: 20px;
            font-family: PingFang SC, Microsoft YaHei;
            text-decoration: none;
            height: 60px;
            text-align: center;
            line-height: 60px;
            padding: 0 20px;
          }
          .header-link:hover {
            background-color: rgb(155, 194, 245);
          }
          
        }
      }
    
  </style>
  