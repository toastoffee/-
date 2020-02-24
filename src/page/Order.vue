<template>
  <div>
    <div id="img">
      <div>
        <span id="text">登录后查看订单</span>
        <van-button plain type="info" id="button">登录/注册</van-button>
      </div>
      <van-image width="100%" height="400" src="/static/images/order/person.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
#img
  position: absolute
  width: 80%
  right: 0
  left: 0
  bottom: 0
  margin: 0 auto
  margin-bottom: 150px
  #text
    display: block
    width: 100%
    margin-bottom: 10px
    text-align: center
  #button
    display: block
    margin: 0 auto
</style>