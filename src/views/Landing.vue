<template>
  <div class="BBOX">
    <div class="BOX">
      <div class="IMG">
        <img :src="`https://static.arcnftclub.com${info.frontPage}`" />
      </div>
      <div class="DESC">
        <div class="_1box">
          <div class="name">{{ info.name }}</div>
          <div class="publishName">@{{ info.publishName }}</div>
          <div class="summary">{{ info.summary }}</div>
        </div>
        <div class="_2box">
          <div class="openTime">
            <div>盲盒开启日</div>
            <div>{{ info.openTime }}</div>
          </div>
          <div class="counts">
            <div>发行份数</div>
            <div>{{ info.counts }}</div>
          </div>
        </div>
        <div class="_3box">
          <base-button type="primary" class="buy" @click="buyRightNow"
            >立即购买</base-button
          >
        </div>
      </div>
    </div>
    <div class="showList">
      <div class="title">盲盒抽奖藏品展示</div>
      <div class="flex">
        <div class="mystery-Box" v-for="(item, index) in artsList" :key="index">
        <div class="mystery-box" @click="Tobox(item)">
          <div class="BOX-IMG">
            <img :src="`https://static.arcnftclub.com${item.frontPage}`" />
          </div>
          <div class="title">{{item.title}}</div>
          <div class="name">{{item.author}}</div>
        </div>
      </div>

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
import { getPurchaseMysteryBoxDetail } from "@/utils/api";
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
      Tobox(item) { 
         this.$router.push({
        name: 'item',
        query: {
          id:item.artsId,        
        }
      })

      }
  },
  async created() {
    this.id = this.$route.query.id;
    let res = await getPurchaseMysteryBoxDetail({ id: this.id, status: 0 });
    this.info = res.data;
    this.artsList = res.data.artsList;

      console.log(this.info, "11");
    console.log(this.artsList, "22");
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/lading/landing.scss";
</style>
