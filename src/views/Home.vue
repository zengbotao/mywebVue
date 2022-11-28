<template>
  <div>
    <el-container>
      <el-aside width="240px">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-sub-menu index="1">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-page-header :icon="null">
            <template #content>
              <div class="flex items-center">
                <el-avatar
                  :size="32"
                  class="mr-3"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <img
                  style="width: 120px; height: 60px"
                  src="../assets/logo.png"
                />

                <span class="text-large font-600 mr-3"> 波爱文 </span>
                <span
                  class="text-sm mr-2"
                  style="color: var(--el-text-color-regular)"
                >
                  Sub title
                </span>

                <el-tag>Default</el-tag>

                <el-autocomplete
    v-model="handleSel"
    :fetch-suggestions="querySearchAsync"
    placeholder="Please input"
    @select="handleSelect"
  />
              </div>
            </template>
            <!-- <template #extra>
                <div class="flex items-center">
                  <el-button>Print</el-button>
                  <el-button type="primary" class="ml-2">Edit</el-button>
                </div>
              </template> -->
          </el-page-header>
        </el-header>
        <el-main>
          <div class="tags-box">
            <!-- <el-tag @click="$router.push({ name:t.compName })"  @close="delTag(t)" closable v-for="(t, i) in tags" :key="i">{{t.title}}</el-tag> -->
            tryrtyrty
          </div>
        </el-main>
        <el-footer class="footr">
          <p>
           
          
          </p>
          <p>本站仅为信息交流平台,网站内容来自网友提供和网络查找,不以盈利为目的。如您认为本站信息侵犯了您的版权,<a class="aas" href="https://zbt.ailiwen.com.cn/" target="_blank"
                > 请联系我</a
              >,我将尽快处理.</p>
          
            <p>
              <a class="aa" href="http://beian.miit.gov.cn" target="_blank"
                >豫ICP备11026081号</a
              >
              &nbsp; &nbsp;
              <el-avatar class="guohui" shape="circle" :size="20" :src="squareUrl" />
              <a class="aa" href="http://beian.miit.gov.cn" target="_blank">
                豫ICP备11026081号</a
              >
            </p>
          
        </el-footer>
      </el-container>
      <el-aside width="240px">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-sub-menu index="1">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      transitionName: "slide-left",
      activeIndex: 1,
      squareUrl:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41100202000153",
      handleSel:'',
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
<style lang="less">
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .demo-image .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
  }
  .demo-image .block:last-child {
    border-right: none;
  }
  .demo-image .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
}

.el-footer {
  background-color: #fff;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #fff;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
}

.el-container {
  height: 100%;
}

.el-menu-vertical-demo {
  border: none;
}

.tags-box {
  margin-bottom: 10px;
  height: 1500px;
  text-align: left;
}
.el-tag {
  cursor: pointer;
  margin-right: 4px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.footr {
  color: #666;
  text-align: center;
  line-height: 25px;
  font: 16px Verdana, Helvetica, Arial, sans-serif;
  .guohui{
    position: relative;
    top:3px;
  }
  .aa {
    text-decoration: none;
    color: #666;
  }
  .aas {
    text-decoration: none;
    color: rgb(65, 143, 245);
    font-weight:bold;
  }
  a:hover,
  a:visited,
  a:link,
  a:active {
    color: #666;
    // 设置使所有a标签的四种状态都和本身颜色保持一致，样式代码自己写
  }
}
</style>
