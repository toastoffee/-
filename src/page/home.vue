<template>
  <div>
    <TopGuide></TopGuide>
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
    <div id="recommend">
      <van-card
        v-for="id in 10"
        :key="id"
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>
      </van-card>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
import TopGuide from "../components/TopGuide";

export default {
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
  },
  components: { TopGuide }
};
</script>

<style lang="stylus" scoped>
.swiper-container
  height: 200px
  width: 100%
span
  margin-left: 16px
  color: #778899
  font-size: 14px
#recommend
  position: fixed
  width: 100%
  top: 300px
  bottom: 0
  margin-bottom: 50px
  overflow: scroll
</style>>