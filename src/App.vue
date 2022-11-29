<template>
  <div id="app">
    <div class="asides"></div>
    <div class="content">
      <div class="headers">
        <div>
          <img class="titlePic" src="./assets/logo.png" />
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

      <div class="view-box">
        <div class="viewMian" >
          <router-view />
        </div>
        
        <div class="footr">
          <p></p>
          <p>
            本站仅为信息交流平台,网站内容来自网友提供和网络查找,不以盈利为目的。如您认为本站信息侵犯了您的版权,
            <a
              class="aas"
              href="https://zbt.ailiwen.com.cn/about/jianli.html"
              target="_blank"
            >
              请联系我</a
            >
            ,我将尽快处理.
          </p>

          <p>
            <a class="aa" href="http://beian.miit.gov.cn" target="_blank"
              >浙ICP备2022033261号-1</a
            >
            &nbsp; &nbsp;
            <el-avatar
              class="guohui"
              shape="circle"
              :size="20"
              :src="squareUrl"
            />
            <a class="aa" href="http://beian.miit.gov.cn" target="_blank">
              浙公网安备 33011002016834号</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="asides"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import Home from "./views/Home/index.vue";
export default {
  components: { Home },
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
  height: 100%;
  width: 100%;
  background-color: @Gbgc-color;
  color: #fff;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #010b14;
  display: flex;
  flex-direction: row;
  .asides {
    width: 240px;
    height: 600px;
  }
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    .view-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color:@Gview-box-color;
      color: black;
      text-align: center;
      overflow-y: auto;
      .viewMian{
        flex: 1;
      }
      .footr {
        height: 100px;
        color: #666;
        text-align: center;
        line-height: 25px;
        font: 16px Verdana, Helvetica, Arial, sans-serif;
        .guohui {
          position: relative;
          top: 3px;
        }
        .aa {
          text-decoration: none;
          color: #666;
        }
        .aas {
          text-decoration: none;
          color: rgb(65, 143, 245);
          font-weight: bold;
        }
        a:hover,
        a:visited,
        a:link,
        a:active {
          color: #666;
          // 设置使所有a标签的四种状态都和本身颜色保持一致，样式代码自己写
        }
      }
    }
    .headers {
      position: fixed;
      left: 240px;
      top:0;
      display: flex;
      flex-direction: row;
      align-items: center;
      // justify-content: space-between;
      height: 60px;
      width: 100%;
      border-bottom: 1px solid transparent;
      border-color: #f0f0f0;
      background-color:@Gbgc-color;
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
  }
}
</style>
