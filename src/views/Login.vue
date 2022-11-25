<!-- eslint-disable vue/no-parsing-error -->
<template>
  <section class="section section-shaped section-lg my-0 ">
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <small class="login">登录账号</small>
              </div>
              <div class="btn-wrapper text-center"></div>
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>Welcome to Arrc !</small>
              </div>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="手机号"
                  addon-left-icon="ni ni-circle-08"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="验证码"
                  addon-left-icon="ni ni-email-83"
                >
                </base-input>

                <div class="Rd">
                    <div class="Rd-1"> <input type="radio" v-model="radio" value="true" @change="agreeChange"  /></div>
                    
                      <div class="des">
                    我已阅读并同意<span>《ARCC 用户协议》</span><span>《ARCC 隐私协议》</span>
18岁以下用户欢迎发布作品,请勿参与购买！
                  </div>
                </div>
                <div class="text-center">
                  <base-button type="primary" class="my-4">立即登录</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light">
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    data() {
        return {
         radio:true
        }
    },



    methods: {
        agreeChange(item) { 
console.log(this.radio)
        },



    }
};
</script>
<style lang="scss" acoped>
* {
  color: #333;
}
.section {
  background-color: #74ebd5;
  background-image: linear-gradient(
    315deg,
    #74ebd5 0%,
    #9face6 50%,
    #1c88d8 100%
  );

  .login {
    font-size: 20px;
    font-weight: 600;
  }
  .Rd{
    display: flex;
    .Rd-1{
        margin-right: 10px;

    }
  }
  .des {
    font-size: 12px;
  }
}
</style>
