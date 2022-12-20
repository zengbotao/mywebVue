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
      label-width="120px"
      class="form"
      :rules="rules"
      ref="ruleFormRef"
    >
      <el-form-item label="板块" prop="name">
        <el-select v-model="form.name" placeholder="请选择板块" class="form-input">
          <el-option
            v-for="(item, index) in headlist"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" class="form-input" />
      </el-form-item>
      <el-form-item label="类型" prop="scan">
        <el-select v-model="form.scan" placeholder="请选择..." class="form-input">
          <el-option
            v-for="item in scanlist"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="类别标签">
        <el-select v-model="form.label" placeholder="请选择..." class="form-input">
          <el-option
            v-for="item in labellist"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="摘要" prop="description">
        <el-input v-model="form.description" class="form-input" />
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
import { saveMd } from "@/api/home";
import dayjs from "dayjs";
import { scanlist, qianlist, houlist ,headlist} from "@/common/js/globleData";
export default {
  components: {},
  props: {
    text: String,
  },
  setup(props, context) {
    const state = reactive({
      time: new Date(),
      scanlist: scanlist,
      headlist:headlist,
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
      label: "",
      name: "",
      title: "",
      scan: "",
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
            label: form.label,
            name: form.name,
            title: form.title,
            scan: form.scan,
            description: form.description,
            text: JSON.stringify(props.text),
          };
          console.log(params);
          saveMd(params)
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
      name: [
        { required: true, message: "请选择板块", trigger: "change" },
      ],
      title: [
        {
          required: true,
          message: "请输入文章标题",
          trigger: "blur",
        },
        { max: 30, message: "最长不超过30个字", trigger: "blur" },
      ],
      scan: [
        {
          required: true,
          message: "请选择文章的范围",
          trigger: "change",
        },
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
