<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-01 20:11:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-16 17:58:18
-->
<template>
  <div>
    <el-form
      :model="form"
      label-width="7.5rem"
      class="form"
      :rules="rules"
      ref="ruleFormRef"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" class="form-input" />
      </el-form-item>
     
    
      <el-form-item label="摘要" prop="description">
        <el-input v-model="form.description" class="form-input"  type="textarea"/>
      </el-form-item>

      <el-form-item>
        <div class="form-bunt">
          <el-button type="primary" class="r-bunt" @click="uloadMd"
            >提交</el-button
          >
          <el-button @click="close">取消</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  onMounted,
  toRefs,
  computed,
  getCurrentInstance,
} from "vue";
import { savedownload } from "@/api/download";
import dayjs from "dayjs";
import { scanlist, qianlist, houlist } from "@/common/js/globleData";
export default {
  components: {},
  props: {
    text: String,
  },
  setup(props, context) {
    const state = reactive({
      time: new Date(),
      scanlist: scanlist,
      ruleFormRef: ref(null),
      labellist: computed(() => {
        if (form.scan === "qian") {
          return qianlist;
        } else if (form.scan === "hou") {
          return houlist;
        }
      }),
    });
    const form = reactive({
      title: "",
      description: "",
    });
    const exIconList = ref(["link", "mermaid", "katex", "github"]);
    const open2 = () => {
      ElMessage({
        message: "上传成功",
        type: "success",
      });
    };
    const uloadMd = async () => {
      if (!state.ruleFormRef) return;
      await state.ruleFormRef.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");
          let params = {
            time: dayjs(state.time).valueOf(),
            title: form.title,
            description: form.description,
          };
          console.log(params);
          savedownload(params)
            .then((item) => {
              open2();
              close();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    };
    /**
     * @description: 关闭弹框
     * @return {*}
     * @author: zengbotao@myhexin.com
     */
    const close = () => {
      state.ruleFormRef.resetFields();
      context.emit("close", false);
    };
    const rules = reactive({
  
      title: [
        {
          required: true,
          message: "请输入文章标题",
          trigger: "blur",
        },
        { max: 30, message: "最长不超过30个字", trigger: "blur" },
      ],
      description: [
        {
          required: true,
          message: "请输入文章摘要",
          trigger: "blur",
        },
        { max: 310, message: "最长不超过310个字", trigger: "blur" },
      ],
    });
    onMounted(() => {
      // uloadMd()
    });
    return {
      ...toRefs(state),
      exIconList,
      uloadMd,
      form,
      rules,
      close,
      open2,
    };
  },
};
</script>
<style lang="less" scoped>
.form {
  .form-input {
    width: 15.0625rem;
  }
  .form-bunt {
    width: 32rem;
    margin-top: 1.25rem;
    display: flex;
    flex-direction: row-reverse;
    .r-bunt {
      margin-left: 1.875rem;
    }
  }
}

</style>
