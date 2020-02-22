<template>
  <div>
    <van-nav-bar :title=this.$store.state.msg id="topBar">
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: this.$store.state.msg
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus">
  #topBar
    background-color #1E90FF
</style>