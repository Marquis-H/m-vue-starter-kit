<template>
  <el-container direction="vertical" class="bg-gray-100 h-full">
    <Header />
    <el-main class="page-component__scroll">
      <router-view :key="$route.path" />
    </el-main>
    <Footer />
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

@Options({
  components: {
    Header,
    Footer,
  },
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.el-main {
  min-height: calc(100vh - 120px);
}
</style>