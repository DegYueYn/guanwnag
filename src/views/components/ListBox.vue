<template>
  <div class="List-BOX">
    <div class="BOX">
      <div class="list">
        <div class="box" v-for="(item,index) in BoxList " :key="index">
          <div class="samllBox"><img :src="`https://static.arcnftclub.com${item.headPortrait}`"></div>
          <div class="title">{{item.title}}</div>
          <div class="name">ARCC</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { List } from "@/utils/api";
export default {
  data() {
    return {
      BoxList: [],
    };
  },
  async created() {
    let res = await List();
    for (let i = 0; i < res.data.artsList.length; i++) {
      if (i < res.data.artsList.length) {
        this.BoxList.push(res.data.artsList[i]);
      }
    }
    console.log("this.box", this.BoxList);
  },
};
</script>
<style lang="scss" scoped>
.List-BOX {
  height: 100%;
  width: 100%;
  margin-left: 40px;
  
  .BOX {
    height: 100%;
    .list {

      
      margin-left: 20px;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      display: flex;
      .box {
        margin-top: 50px;
        margin-left: 20px;
        margin-right: 20px;
        box-sizing: border-box;
        height: 350px;
        width: 277px;
        padding: 16px;
        background-color: rgb(245, 245, 245);
        .samllBox {
          height: 241px;
          width: 241px;
          background-color: yellow;
          img{
            height: 241px;
          width: 241px;
          object-fit: cover;

          }
        }
        .title{
          margin-top: 30px;
          line-height: 30px;
          font-size: 18px;
          overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
          font-weight: 600;
          color:#333;
          font-family: puhuih,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        }
        .name{
          line-height: 30px;
        }
      }
    }
  }
}
// 277 365
// padding  16
//241 241
</style>
