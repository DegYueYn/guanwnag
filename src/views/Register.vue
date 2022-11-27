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
                <small class="login">注册账号</small>
              </div>
            </template>
            <template>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="手机号"
                  v-model="phone"
                  addon-left-icon="ni ni-circle-08"
                >
                </base-input>
                <base-input
                  alternative
                  class="mb-3"
                  v-model="code"
                  placeholder="验证码"
                  addon-left-icon="ni ni-email-83"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  v-model="password_1"
                  placeholder="设置初始密码"
                  addon-left-icon="ni ni-lock-circle-open"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  v-model="password_2"
                  placeholder="再次输入密码"
                  addon-left-icon="ni ni-lock-circle-open"
                >
                </base-input>
                <div class="Rd">
                  <div class="Rd-1">
                    <input type="radio" v-model="radio" value="true" />
                  </div>

                  <div class="des">
                    我已阅读并同意<a
                      class="xieyi"
                      href="https://h5.arcnftclub.com/agreement/"
                      >《ARCC 用户协议》</a
                    ><a class="xieyi" href="https://h5.arcnftclub.com/privicy/"
                      >《ARCC 隐私协议》</a
                    >
                    18岁以下用户欢迎发布作品,请勿参与购买！
                  </div>
                </div>

                <div class="text-center space">
                  <base-button type="primary" class="my-4" @click="register"
                    >立即注册</base-button
                  >
                  <base-button type="" class="my-4" @click="to(3)"
                    >已有账号？去登录</base-button
                  >
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
    <modal :show.sync="modals">
      <template slot="header">
        <h5 class="modal-title" id="exampleModalLabel">提示</h5>
      </template>
      <div id="text">注册之前请勾选相关协议!</div>
    </modal>
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
      code: undefined,
      password_1: undefined,
      password_2: undefined,
      radio: false,
      modals: false,
    };
  },
  methods: {
    register() {
      if (!this.phone || !this.code || !this.password_1 || !this.password_2) {
        this.modals = true;
        document.getElementById("text").innerHTML = "请填写完整的表单信息!";
        setTimeout(() => {
          this.modals = false;
        }, 1000);
        return;
      }
      if (this.password_1 != this.password_2) {
        this.modals = true;
        document.getElementById("text").innerHTML = "两次输入的密码不一致!";
        setTimeout(() => {
          this.modals = false;
        }, 1000);
        return;
      }
      if (this.radio == false) {
        this.modals = true;
        document.getElementById("text").innerHTML = "注册之前请勾选相关协议!";
        setTimeout(() => {
          this.modals = false;
        }, 1000);
        return;
      } else {
        console.log("注册了");
        this.$router.push("/login");
      }
    },
    to(item) {
      if (item == 3) {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  color: #333;
}
.section {
  background-color: #00dbde;
  background-image: linear-gradient(45deg, #00dbde 0%, #fc00ff 100%);
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
  //   margin-top: 20px;
  justify-content: space-evenly;
  .my-4 {
    width: 300px;
  }
}

.xieyi {
  color: blue;
  cursor: pointer;
}
</style>
