<template>
  <div>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>

      <van-tabbar-item to="/order">
        <span>订单</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>
      
      <van-tabbar-item to='/profile' icon="setting-o">个人设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: require("../assets/蓝_订单.png"),
        inactive: require("../assets/灰_钉单.png")
      },
      title: ["汕头市潮阳区", "搜索", "我的订单", "个人设置"]
    };
  },
  methods: {
    onChange(index) {
      this.$store.commit("change", this.title[index]);
      console.log(this.title[index]);
      console.log(this.$store.state.msg);
      
    }
  }
};
</script>

<style>
</style>