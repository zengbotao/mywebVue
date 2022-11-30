<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404">
        <img class="pic-404__child left" src="@/assets/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="@/assets/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="@/assets/404_images/404_cloud.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">404!</div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
        <a @click="$router.push('/')" class="bullshit__return-home">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      name: 'Page404',
      message:'找不到该页面......',
     
    });
   
    return {
      ...toRefs(state),
     
    };
  },
};
</script>

<style  lang="less" scoped>
.wscn-http404-container{
  padding: 9rem 3.125rem ;
}
.wscn-http404 {
  padding: 10rem 3.125rem ;
  overflow: hidden;
  .pic-404 {
    position: relative;
    float: left;
    width: 50rem;
    overflow: hidden;
    &__parent {
      width: 80%;
    }
    &__child {
      position: absolute;
      &.left {
        width: 5rem;
        top: 1.0625rem;
        left: 13.75rem;
        opacity: 0;
        animation-name: cloudLeft;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 0.5s;
      }
      &.mid {
        width: 2.875rem;
        top: .625rem;
        left: 26.25rem;
        opacity: 0;
        animation-name: cloudMid;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1.2s;
      }
      &.right {
        width: 3.875rem;
        top: 6.25rem;
        left: 31.25rem;
        opacity: 0;
        animation-name: cloudRight;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }
      @keyframes cloudLeft {
        0% {
          top: 1.0625rem;
          left: 13.75rem;
          opacity: 0;
        }
        20% {
          top: 2.0625rem;
          left: 11.75rem;
          opacity: 1;
        }
        80% {
          top: 5.0625rem;
          left: 5.75rem;
          opacity: 1;
        }
        100% {
          top: 6.0625rem;
          left: 3.75rem;
          opacity: 0;
        }
      }
      @keyframes cloudMid {
        0% {
          top: .625rem;
          left: 26.25rem;
          opacity: 0;
        }
        20% {
          top: 2.5rem;
          left: 22.5rem;
          opacity: 1;
        }
        70% {
          top: 8.125rem;
          left: 11.25rem;
          opacity: 1;
        }
        100% {
          top: 10rem;
          left: 7.5rem;
          opacity: 0;
        }
      }
      @keyframes cloudRight {
        0% {
          top: 6.25rem;
          left: 31.25rem;
          opacity: 0;
        }
        20% {
          top: 7.5rem;
          left: 28.75rem;
          opacity: 1;
        }
        80% {
          top: 11.25rem;
          left: 21.25rem;
          opacity: 1;
        }
        100% {
          top: 12.5rem;
          left: 18.75rem;
          opacity: 0;
        }
      }
    }
  }
  .bullshit {
    position: relative;
    float: left;
    width: 18.75rem;
    padding: 1.875rem 0;
    overflow: hidden;
    &__oops {
      font-size: 2rem;
      font-weight: bold;
      line-height: 2.5rem;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 1.25rem;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__headline {
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: #222;
      font-weight: bold;
      opacity: 0;
      margin-bottom: .625rem;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: .8125rem;
      line-height: 1.3125rem;
      color: grey;
      opacity: 0;
      margin-bottom: 1.875rem;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    &__return-home {
      display: block;
      float: left;
      width: 6.875rem;
      height: 2.25rem;
      background: #1482f0;
      border-radius: 6.25rem;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: .875rem;
      line-height: 2.25rem;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(3.75rem);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
