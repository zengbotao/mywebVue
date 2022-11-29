<template>
    <div class="content-content">
        <div class="iamges">
             <div >
            <img class="iamges" v-gallery src="../../assets/home/xingkong.png" />
        </div>
        </div>
        <div >
            <img class="iamges" v-gallery src="../../assets/home/xingkong.png" />
        </div>
    </div>
  </template>
  
  <script>
  import { reactive, toRefs, onMounted, computed } from "vue";
  import { useRouter } from "vue-router";
  
  export default {
    props:{
        url:{
            type:String,
            default:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
        },

    setup() {
      // onMounted(console.log(router));
      // const router = useRouter()
      const state = reactive({
        source: "../../VUE3.pdf", // 文件路径
        pageNum: 1, // 当前页数
        scale: 1, // 缩放比例
        numPages: 0, // 总页数
        handleSel: "",
        url:'../../assets/home/xingkong.png'
      });
      return {
        ...toRefs(state),
       
      };
    },
  };
  </script>
  <style lang="less">
  .content-content {
    display: flex;
    .iamges{
        background-image: url("../../assets/home/xingkong.png");
        background-repeat:no-repeat;
        // background-position:10% 40%;
        background-size: 100% 100%;
        box-shadow: 0 0 3px 0 rgba(40, 46, 45, 0.23);
        height: 120px;
        width: 150px;
        border-radius: 3px;
        
    }
  }
  
  </style>
  