<template>
  <div class="List-BOX">
    <div class="BOX">
      <div class="list">
        <div class="box" v-for="(item, index) in BoxList " :key="index">
          <div @click="Todetail(item)">
            <div class="samllBox"><img :src="`https://static.arcnftclub.com${item.frontPage}`"></div>
            <div class="title">{{ item.title }}</div>
            <div class="name">{{item.nickname}}</div>

          </div>

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
  },
  methods: {
    Todetail(item) {
      console.log(item)
      if (item.artsType == 5) { 
         this.$router.push({
        name: 'landing',
        query: {
          id:item.id,        
        }
      })

      } else if (item.artsType == 1) {
          this.$router.push({
        name: 'item',
        query: {
          id: item.id,
          flag:'start'        
        }
      })

       }

    
     
    }
  }
};
</script>
<style lang="scss" scoped>
.List-BOX {
  height: 100%;

  // width: 90%;  
  .BOX {
    height: 100%;

    .list {
      // margin-left: 20px;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      display: flex;

      .box {
        cursor: pointer;
        margin-top: 50px;
        margin-left: 20px;
        margin-right: 20px;
        box-sizing: border-box;
        height: 350px;
        width: 277px;
        padding: 16px;
        border: 2px solid #DDDDDD;
        background-color: #fff;

        .samllBox {
          height: 241px;
          width: 241px;

          img {
            height: 241px;
            width: 241px;
            object-fit: cover;

          }
        }

        .samllBox:hover {
          opacity: 0.7;
        }

        .title {
          margin-top: 20px;
          line-height: 30px;
          font-size: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          font-weight: 600;
          color: #333;
          font-family: puhuih, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        }

        .name {
          line-height: 30px;
          color: #808080;
          font-size: 14px;
        }
      }

    }
  }
}

// 277 365
// padding  16
//241 241
</style>
