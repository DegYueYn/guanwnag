<template>
  <div>
    <div class="Title">
      <div class="Title_1">{{ info.title }}</div>
      <div class="Title_2">{{ info.content }}</div>
      <div class="Title_3">{{ info.totalArts }}类 藏品</div>
      <div class="Title_4">{{ info.startSale }}类 已开售</div>
    </div>
    <div class="BOX-LIST">
      <div class="List" v-for="(item, index) in artsList" :key="index">
        <div class="box" @click="Tobox(item)">
          <div class="IMG">
            <img :src="`https://static.arcnftclub.com${item.frontPage}`" />
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="title nickname ">{{ item.nickname }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getDetailWeb } from "@/utils/api";
export default {
  data() {
    return {
      info: {},
      id: undefined,
      artsList: [],
    };
  },

  methods: {
      Tobox(item) {
         this.$router.push({
        name: 'item',
        query: {
            id: item.id,
          flag:'start'
        }
      })
      }
  },
  async created() {
    this.id = this.$route.query.id;
    let res = await getDetailWeb({ id: this.id, pageNo: 1, pageSize: 20 });
    this.info = res.data.theme;
    this.artsList = res.data.array;
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/startTheme/start.scss";
</style>
