<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-29 20:41:43
 * @LastEditors: 
 * @LastEditTime: 2022-12-14 11:08:02
-->
<template>
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
      相关链接：
      <a href="https://zbt.ailiwen.com.cn/" target="_blank">
        个人笔记与博客</a
      >
    </p>
    <p>
      <a class="aa" href="http://beian.miit.gov.cn" target="_blank"
        >浙ICP备2022033261号-1</a
      >
      &nbsp; &nbsp;
      <a class="aa" href="http://beian.miit.gov.cn" target="_blank">
        浙公网安备 33011002016834号</a
      >
    </p>
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
      input3: "",
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
.footr {
  height: 6.25rem;
  color: #666;
  text-align: center;
  line-height: 1.5625rem;
  font: 1rem Verdana, Helvetica, Arial, sans-serif;
  display: block;
  .aa {
    color: #666;
  }
  .aas {
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
</style>
