<template>
  <div>
    <div class="clearfloat">
      <van-icon style="float:right;margin:10px" name="comment-o" size="25px" />
      <van-icon style="float:right;margin:10px" name="setting-o" size="25px" />
    </div>

    <div class="middle-zone clearfloat">
      <van-col span="16">
        <b>立即登录</b>
        <van-icon color="#909399" name="arrow" size="20px" />
        <p>饿不饿都上饿了么</p>
      </van-col>
      <van-col span="8">
        <img src="http://i2.tiimg.com/703382/dd9a460c972841df.png" />
      </van-col>
    </div>

    <div class="clearfloat">
      <van-col span="12">
        <div class="purse-zone-left">
          <div style="height:8px"></div>
          <b>红包卡卷</b>
          <img src="http://i2.tiimg.com/703382/1f7ac3dc982a78ea.png" />
          <p>登录后查看</p>
        </div>
      </van-col>
      <van-col span="12">
        <div class="purse-zone-right">
          <div style="height:8px"></div>
          <b>钱包</b>
          <img src="http://i2.tiimg.com/703382/d0204eb4149e1f0b.png" />
          <p>金币、借钱、福利</p>
        </div>
      </van-col>
    </div>

    <br />

    <div>
      <div v-for="option in options" :key="option" class="option-item">
        <van-icon :name="option.icon" class="option-item-icon" size="25px" />
        <b>{{option.name}}</b>
        <van-icon name="arrow" class="option-item-arrow" size="20px" />
        <b
          v-if="option.annotation"
          class="option-item-annotation"
          style="font-size:15px;"
        >{{option.annotation}}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          icon: "like-o",
          name: "我的收藏"
        },
        {
          icon: "service-o",
          name: "我的客服"
        },
        {
          icon: "gift-o",
          name: "推荐有奖",
          annotation: "得15元"
        },
        {
          icon: "bag-o",
          name: "商务合作"
        },
        {
          icon: "ecard-pay",
          name: "办卡有礼"
        },
        {
          icon: "like-o",
          name: "3小时公益"
        },
        {
          icon: "logistics",
          name: "企业订餐"
        }
      ]
    };
  }
};
</script>

<style>
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.middle-zone {
  margin: 0px 20px;
}
.middle-zone b {
  font-size: 40px;
  font-family: "STKaiti";
}
.middle-zone p {
  font-size: 18px;
  font-family: "STKaiti";
  margin: 0;
  color: #909399;
}
.middle-zone img {
  float: right;
  height: 110px;
}
.purse-zone-left {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: 10px 5px 10px 15px;
  border-radius: 8px;
}
.purse-zone-right {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: 10px 15px 10px 5px;
  border-radius: 8px;
}
.purse-zone-left b {
  font-size: 20px;
  font-family: "STKaiti";
}
.purse-zone-right b {
  font-size: 20px;
  font-family: "STKaiti";
}
.purse-zone-left p {
  font-size: 14px;
  font-family: "STKaiti";
  margin: 6px 0 0px 5px;
  color: #909399;
  padding-bottom: 10px;
}
.purse-zone-right p {
  font-size: 14px;
  font-family: "STKaiti";
  margin: 6px 0 0px 5px;
  color: #909399;
  padding-bottom: 10px;
}
.purse-zone-left img {
  height: 30px;
  float: right;
  margin: 0 5px 0 0;
}
.purse-zone-right img {
  height: 30px;
  float: right;
  margin: 0 5px 0 0;
}
.option-item {
  height: 55px;
  border-bottom: rgb(238, 238, 238) solid 1px;
}
.option-item-icon {
  margin: 10px;
  color: #409eff;
}
.option-item-arrow {
  margin: 15px 10px 0 0;
  color: #c0c4cc;
  float: right;
}
.option-item b {
  font-family: "KaiTi";
  font-size: 18px;
}
.option-item-annotation {
  font-family: "KaiTi";
  color: #c0c4cc;
  float: right;
  margin: 15px 0 15px 0;
}
</style>