<template>
  <footer class="footer has-cards">
    <!-- <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/profile" title="Profile Page">
                            <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
        </div> -->
    <div class="container">
      <div class="row row-grid my-md format">
        <div class="col-lg-3">
          <h3 class=" mb-2 text_b">ARCC 数字潮流</h3>
          <h4 class="mb-0 font-weight-light text">
            <a class="mb-0 font-weight-light text" href="/">探索</a>
          </h4>
          <h4 class="mb-0 font-weight-light text" @click="TO(1)">
            <a class="mb-0 font-weight-light text" href="JavaScript:void(0);"
              >首发</a
            >
          </h4>
        </div>
        <div class="col-lg-3">
          <h3 class="mb-2 text_b">联系我们</h3>

          <h4 class="mb-0 font-weight-light text">
            <a class="mb-0 font-weight-light text" href="JavaScript:void(0);">问题反馈</a>
          </h4>
          <h4 class="mb-0 font-weight-light text">
            <a class="mb-0 font-weight-light text" href="https://lmtpebqd3u.feishu.cn/share/base/shrcn8kJE8bCNsvDKvS4qzC6iJg">商务合作</a>
          </h4>
        </div>
        <div class="col-lg-3">
          <h3 class="mb-2 text mg">关注我们，获取最新潮流</h3>
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-10">
          <div class="copyright">
            粤ICP备2022075586号-1 &copy; {{ year }} 深圳市阿科科技有限公司
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {
    TO(item) {
      if (item == 1) {
        this.$router.push("/starter");
      }
    },
  },
};
</script>
<style>
.copyright {
  display: flex;
  justify-content: space-evenly;
}
.format {
  display: flex;
  justify-content: space-around;
}
.text_b {
  font-size: 20px;
  font-weight: 600;
}
.text {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
}
.mg {
  margin-top: -5px;
}
</style>
