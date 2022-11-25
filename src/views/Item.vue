<template>
  <div class="BBOX">
    <div class="BOX BOX_m">
      <div class="IMG IMG_m">
        <img :src="`https://static.arcnftclub.com${info.frontPage}`" />
      </div>
      <div class="DESC">
        <div class="_1box _box">
          <div class="name">{{ info.title }}</div>
          <div class="publishName">@{{ info.authorNickname }}</div>
          <div class="summary">{{ info.summary }}</div>
        </div>
        <div class="_3box">
          <base-button type="primary" class="buy" @click="buyRightNow"
            >立即购买</base-button
          >
        </div>
      </div>
    </div>
    <div class="showList">
        <div class="info">
            <div  class="info-text">发行信息</div>
            <div class="info-detail">
                <div class="detai_1">
                    <div>合约地址</div>
                    <div>{{info.hashLink}}</div>
                </div>
                <div class="detai_2">
                    <div>发行份数</div>
                    <div>{{info.stocks}}</div>
                </div>
            </div>
        </div>
        <div class="des">
            <div class="txt">藏品简介</div>
            <div class="text">{{info.summary||"暂无"}}</div>
        </div>
     
      <div class="know-power">
        <div class="txt">权益须知</div>
        <div class="text">数字藏品是使用区块链技术进行唯一标识的特定作品、艺术品和商品的数字化形式，每个数字藏品都映射着特定区块链上的唯一序列号，不可篡改、不可分割、也不可互相替代；拥有者也公开和透明；可以帮助我们有针对性的解决永久归属权问题；规避了模仿复制、盗版等各种市场乱象，让我们真正的体验和拥有数字藏品及其权益。数字藏品属于数字产品，一经售出概不退换，请勿将数宇藏品用于任何商业用途，请远离非理性炒作，防范欺诈风险。</div>
      </div>
      <div class="know-buy know-power">
         <div class="txt">购买须知</div>
        <div class="text">请您于5分钟内完成数字藏品的支付，若超时支付，库存可能被释放，导致用户支付成功，但因超时未能收到数字藏品。若出现以上情况，请联系客服咨询处理。</div>
      </div>
      
    </div>
  </div>
</template>
<script>
import { getShareDetail } from "@/utils/api";
export default {
  data() {
    return {
      info: {},
      id: undefined,
      myboxDetail: undefined,
      artsList: [],
    };
  },

  methods: {
    buyRightNow() {
      this.$router.go(0);
    },
  },
  async created() {
    this.id = this.$route.query.id;
    let res = await getShareDetail(this.id);
      this.info = res.data;
      console.log(res.data,'res')
    // this.artsList = res.data.artsList;
    // console.log(this.artsList, "22");
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>


@import "../assets/styles/lading/landing.scss";



</style>


