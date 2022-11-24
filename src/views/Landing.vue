<template>
    <div class="BBOX">
        <div class="BOX">
            <div class="IMG"><img :src="`https://static.arcnftclub.com${info.frontPage}`" /></div>
            <div class="DESC">
                <div class="_1box">
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
                <div class="_2box"></div>
                <div class="_3box"></div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            info: {},
        }
    },

    methods: {
    },
    created() {
        this.info.headPortrait = this.$route.query.headPortrait
        this.info.id = this.$route.query.id
        this.info.artsType = this.$route.query.artsType
        this.info.collectionType = this.$route.query.collectionType
        this.info.curPrice = this.$route.query.curPrice
        this.info.isfavorite = this.$route.query.isfavorite
        this.info.nickname = this.$route.query.nickname
        this.info.preSaleStatus = this.$route.query.preSaleStatus
        this.info.title = this.$route.query.title
        console.log('info', this.info)
    },
    mounted() {
    },

}
</script>
<style lang="scss" scoped>
@media only screen and (min-device-width : 768px) {
    .BBOX {
        display: flex;
        justify-content: center;
        align-items: center;

        .BOX {
            width: 1280px;
            display: flex;
            justify-content: center;

            .IMG {
                margin: 80px;
                display: flex;
                width: 500px;
                height: 500px;
                justify-content: center;

                img {
                    width: 600px;
                    height: 550px;
                    object-fit: cover;

                }


            }

            .DESC {
                margin-top: 80px;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                align-content: space-between;
                


                ._1box {
                    height: 200px;
                    width: 500px;
                    background-color: #fff;
                    border: 2px solid #dddddd;

                }
                ._2box{
                    width: 250px;
                    height: 80px;
                    border: 2px solid #dddddd;
                }
                ._3box{
                    // margin-bottom: 50px;
                    width: 400px;
                    height: 100px;
                    border: 2px solid #dddddd;
                }


            }
        }
    }
}

// @media only screen and (max-device-width : 768px) {
//       img {
//     width: 350px;
//     height: 350px;
//     object-fit: cover;
//     margin-top: 200px;

// }
// }
</style>
