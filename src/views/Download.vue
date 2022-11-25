<template>
  <div class="ZONE">
    <div class=" download ">
      <div class="row_1">欢迎来到 ARCZONE</div>
      <div class="row_2">
        <div>获取最新潮流艺术藏品 </div>
        <div>体验管理、合成以及转增等更多产品功能</div>
        <div>请点击下方按钮下载 App</div>
      </div>
      <div class="row_3">
        <base-button type="default" class="btn" @click="iphone">苹果下载</base-button>
      </div>
      <div class="row_4 row_3" >
        <base-button type="default" class="btn" @click="android"> 安卓下载</base-button>
      </div>
      <div class="row_5">
        <span class="wx">微信</span>
        <span class="wx">搜索</span>
        <badge type="success" class="badge">ARCC数字潮流club</badge>
      </div>
      <div class="row_6">关注公众号领福利</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
    methods: {
        iphone() { 
            window.open('https://apps.apple.com/cn/app/%E9%98%BF%E7%A7%91zone/id1631557904','_blank')
        },
        android() { 
 window.open('https://h5.arcnftclub.com/apk/download','_blank')
        }


    	
  },
    created() {
    
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.ZONE {
  display: flex;
  justify-content: center;
  align-items: center;
  .download {
    margin-top: 50px;
    border-radius: 10px;
    width: 400px;
    height: 400px;
    background-color: #fa8bff;
    background-image: linear-gradient(
      45deg,
      #fa8bff 0%,
      #2bd2ff 52%,
      #2bff88 90%
    );

    box-shadow: 10px 10px 10px #dddddd;
  }
  .row_1{
    margin-left: 50px;
    font-size: 30px;
    font-weight: 600;
    margin-top: 20px;
    color: #333;

  }
  .row_2{
    color: #333;
    margin-top: 20px;
    margin-left: 50px;
  }
  .row_3{
    width: 300px;
    margin-top: 20px;
    margin-left: 50px;
    .btn{
        width: 300px;
    }

  }
  .row_5{
    color: #333;
    margin-left: 50px;
    margin-top: 20px;
    width: 200px;
    
    .wx{
        font-size: 14px;
    }
    .badge{
        margin-left: 10px;
    }

  }
  .row_6{
    color: #333;
    margin-top: 20px;
    margin-left: 50px;
    font-size: 14px;
  }
}
</style>
