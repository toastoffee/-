<template>
  <div id="app">
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
  }
};
</script>

<style lang="stylus">

</style>
