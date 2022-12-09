<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-01 20:11:49
 * @LastEditors: 
 * @LastEditTime: 2022-12-09 12:45:07
-->
<template>
  <div class="learn">
    <md-editor  v-model="text" mode="sv"/>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('Hello Editor!');
</script>
<style lang="less" scoped>
.learn{
  padding-top: 3.75rem;
}
</style>