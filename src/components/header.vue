<template>
  <div class="headers">
    <div>
      <img class="titlePic" src="../assets/logo.png" />
    </div>

    <div class="header-home">
      <router-link class="header-link" active-class="active" to="./home">
        首页
      </router-link>
      <router-link class="header-link" active-class="active" to="./live">
        生活
      </router-link>
      <router-link class="header-link" active-class="active" to="./entertainment">
        娱乐
      </router-link>
      <router-link class="header-link" active-class="active" to="./learn">
        学习
      </router-link>
      <router-link class="header-link" active-class="active" to="./download">
        资源下载
      </router-link>
    </div>
    <el-input
      v-model="input3"
      size="large"
      placeholder="请输入...."
      class="input-with-select inputs"
    >
      <template #append> 搜索 </template>
    </el-input>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    console.log(route.params.name, route.name);
    const state = reactive({
      transitionName: "slide-left",
      activeIndex: 1,
      input3: "",
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
  height: 3.75rem;
  border-bottom: 0.0625rem solid transparent;
  border-color: #f0f0f0;
  .titlePic {
    width: 7.5rem;
    height: 3.75rem;
    position: relative;
    top: 0.125rem;
    left: 0.25rem;
  }
  .inputs {
    margin: 0.9375rem 0.9375rem 0.9375rem 9.375rem;
    width: 17.5rem;
    position: relative;
    top: 0.1875rem;
  }
  .header-home {
    flex: 1;
    display: flex;
    .header-link {
    display: block;
    color: #000;
    font-size: 1.25rem;
    font-family: PingFang SC, Microsoft YaHei;
    text-decoration: none;
    height: 3.75rem;
    text-align: center;
    line-height: 3.75rem;
    padding: 0 1.25rem;
}
.header-link:hover {
    background-color: rgb(155, 194, 245);
  }

.active {
    box-shadow: 0 -0.15rem 0.1rem -0.1rem rgb(60, 141, 247) inset;
  }

  }
}
</style>
