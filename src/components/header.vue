<template>
  <div class="headers">
    <div>
      <img class="titlePic" src="../assets/logo.png" />
    </div>

    <div class="header-home">
      <router-link class="header-link" active-class="active" to="/nomal/home">
        编程
      </router-link>
      <!-- <router-link class="header-link" active-class="active" to="/nomal/live">
        生活
      </router-link>
      <router-link
        class="header-link"
        active-class="active"
        to="/nomal/entertainment"
      >
        娱乐
      </router-link> -->
      <router-link class="header-link" active-class="active" to="/nomal/learn">
        发布
      </router-link>
      <router-link
        class="header-link"
        active-class="active"
        to="/nomal/download"
      >
        资源下载
      </router-link>
    </div>
    <el-input
      v-model="inputSearch"
      size="small"
      placeholder="请输入...."
      class="input-with-select inputs"
      clearable 
    >

      <template #append>
        <el-button @click="handleSelect">
          <el-icon><Search /></el-icon>
        </el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import {useRouter,useRoute} from "vue-router"
import  useEmitter from '@/utils/eventBus'
export default {
  setup() {
    const route = useRoute();
    const state = reactive({
      select: "biancheng",
      inputSearch: "",
    });
    const Emitter=useEmitter()
    const handleSelect = () => {
      console.log(route,`SearchStr${route.name}`)
      Emitter.emit(`SearchStr${route.name}`, state.inputSearch)
    }
    return {
      ...toRefs(state),
      handleSelect,
      Emitter
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
  }
  .inputs {
    margin: 0.9375rem 0.9375rem 0.9375rem 9.375rem;
    width: 27.5rem;
    position: relative;
    top: 0.1875rem;
    right: -3rem;
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
