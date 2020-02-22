<template>
  <div id="app">
      <TopGuide></TopGuide>
      <router-view></router-view>
      <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide'
import TopGuide from "./components/TopGuide";
export default {
  name: "App",
  components: {
    FooterGuide,
    TopGuide
  }
};
</script>

<style lang="stylus">

</style>
