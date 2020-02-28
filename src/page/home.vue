<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <van-grid :column-num="4" :border="false">
            <van-grid-item
              v-for="value in 8"
              :key="value"
              :icon="img[value-1]"
              :text="text[value-1]"
              size="40px"
            />
          </van-grid>
        </div>
        <div class="swiper-slide">
          <van-grid :column-num="3">
            <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
          </van-grid>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 分割线 -->
    <van-divider />
    <span>推荐商家</span>
    <!-- 以下是推荐商家展示页面 -->
    <!-- <div id="recommend"> -->
    <store-item v-for="storeinfo in storesinfo" :storeinfo="storeinfo" :index="storeinfo.index" :key="storeinfo.index"></store-item>
    <!-- </div> -->
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
import StoreItem from "../components/StoreItem";

export default {
  components:{
    StoreItem
  },
  mounted() {
    //创建Swiper对象
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  data() {
    return {
      storesinfo: [
        {
          index:0,
          name: "华莱士",
          description: "卖炸鸡的",
          starnum:4.5,
          monthlysale:137,
          tags: ["25减10", "45减20"],
          imgurl: "http://i1.fuimg.com/703382/933de0c4c82f1ee9.jpg"
        },
        {
          index:1,
          name: "Dio面包店",
          description: "你会记得你吃过多少片面包吗",
          starnum:4.7,
          monthlysale:13,
          tags: ["10元会员红包", "品质联盟"],
          imgurl: "http://i1.fuimg.com/703382/c85db0dd25ce19f7.jpg"
        },
        {
          index:2,
          name: "星辰据点",
          description: "攻击力UP大",
          starnum:4.9,
          monthlysale:999,
          tags: ["1元特价", "9.8折","可支付调查点数"],
          imgurl: "http://i1.fuimg.com/703382/abf149982fc206e4.jpg"
        }
      ],
      img: [
        "/static/images/nav/1.jpg",
        "/static/images/nav/2.jpg",
        "/static/images/nav/3.jpg",
        "/static/images/nav/4.jpg",
        "/static/images/nav/5.jpg",
        "/static/images/nav/6.jpg",
        "/static/images/nav/7.jpg",
        "/static/images/nav/8.jpg"
      ],
      text: ["早餐", "午餐", "晚餐", "外卖", "小吃", "下午茶", "舒服", "准时达"]
    };
  }
};
</script>

<style lang="stylus" scoped>
.swiper-container {
  height: 200px;
  width: 100%;
}

span {
  margin-left: 16px;
  color: #778899;
  font-size: 14px;
}

#recommend {
  position: fixed;
  width: 100%;
  top: 300px;
  bottom: 0;
  margin-bottom: 50px;
  overflow: scroll;
}
</style>
