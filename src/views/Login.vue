<!-- eslint-disable vue/no-parsing-error -->
<template>
  <section class="section section-shaped section-lg my-0">
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
                  v-model="phone"
                  placeholder="手机号"
                  addon-left-icon="ni ni-circle-08"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  v-model="password"
                  placeholder="密码"
                  addon-left-icon="ni ni-email-83"
                >
                </base-input>

                <div class="Rd">
                  <div class="Rd-1">
                    <input type="radio" v-model="radio" value="true" />
                  </div>

                  <div class="des">
                    我已阅读并同意<a class="xieyi" href="https://h5.arcnftclub.com/agreement/">《ARCC 用户协议》</a
                    ><a class="xieyi" href="https://h5.arcnftclub.com/privicy/" >《ARCC 隐私协议》</a>
                    18岁以下用户欢迎发布作品,请勿参与购买！
                  </div>
                </div>
                <div class="text-center space">
                  <base-button type="primary" class="my-4" @click="login"
                    >立即登录</base-button
                  >
                  <base-button type="" class="my-4" @click="toRegister"
                    >注册账号</base-button
                  >
                </div>
              </form>
            </template>
          </card>
          <!-- <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>忘记密码?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light">
                <small>注册账号</small>
              </a>
            </div>
          </div> -->
          <modal :show.sync="modals">
            <template slot="header">
              <h5 class="modal-title" id="exampleModalLabel">提示</h5>
            </template>
            <div id='text'>登录之前请勾选相关协议!</div>
          </modal>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      phone: undefined,
      radio: false,
      password: undefined,
      modals: false,
    };
  },

  methods: {
    login() {
      if(!this.phone||!this.password){
        if(!this.phone){
         document.getElementById('text').innerHTML='请填写手机号!'
        }else{
          document.getElementById('text').innerHTML='请输入密码!'
        }
        this.modals = true;
         setTimeout(() => {
          this.modals = false;
        }, 1000);
        return;       
      }
      if (this.radio == false) {
        this.modals = true;
        document.getElementById('text').innerHTML='登录之前请勾选相关协议!'
        setTimeout(() => {
          this.modals = false;
        }, 1000);
        return;
      } else {
        console.log("登录了");
        this.$router.go(0);
      }
    },
    toRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
<style lang="scss" scoped >
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
  .Rd {
    display: flex;
    .Rd-1 {
      margin-right: 10px;
    }
  }
  .des {
    font-size: 12px;
  }
}
.space {
  display: flex;
  // margin-top: 20px;
  justify-content: space-evenly;
  .my-4 {
    width: 300px;
  }
}
.xieyi{
    color: blue;
    cursor: pointer;
}
</style>
