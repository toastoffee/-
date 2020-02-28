<template>
  <div class="home-item" @click="storeItemClick()">
    <img :src="storeinfo.imgurl" alt height="80px" width="80px" />
    <div>
      <p>{{storeinfo.name}}</p>

      <div class="star-num">
        <van-icon name="star" size="10px" />
        <b>{{storeinfo.starnum}}</b>

        <p>月售:{{storeinfo.monthlysale}}</p>
      </div>

      <p>"{{storeinfo.description}}"</p>
      <van-tag plain type="danger" v-for="tag in storeinfo.tags" :key="tag.index">{{tag}}</van-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreItem",
  props: {
    storeinfo: Array,
    index: Number
  },
  methods: {
    storeItemClick() {
      this.$router.replace("/home/" + this.index);
    }
  }
};
</script>

<style>
.home-item {
  background-color: rgb(248, 248, 248);
  border-radius: 4px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: row;
}

.home-item img {
  margin: 13px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

/* 信息区域 */
.home-item div:nth-child(2) {
  width: 100%;
}

/* 商品名 */
.home-item div p:nth-child(1) {
  color: #303133;
  font-size: 19px;
  margin: 10px 0px 0px 0px;
}

/* 商品描述 */
.home-item div p:nth-child(3) {
  color: #909399;
  font-size: 13px;
  margin: 0px 0px;
}

.star-num {
  color: rgb(255, 123, 0);
}
.star-num b {
  font-size: 13px;
}
.star-num p {
  font-size: 12px !important;
  display: inline;
}
</style>