<template>
  <el-header class="flex bg-white flex-row">
    <div class="logo flex-1 flex my-auto">
      <img alt="logo" class="w-10" src="../../assets/logo.png" />
      <h1 class="my-auto m-4">M Vue Starter</h1>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu flex-1"
      mode="horizontal"
    >
      <el-menu-item index="home">
        <router-link :to="{ path: '/' }">
          <span>首頁</span>
        </router-link></el-menu-item
      >
      <el-menu-item index="2">
        <a href="https://www.google.com/" target="_blank">Google</a>
      </el-menu-item>
      <el-menu-item index="about">
        <router-link :to="{ path: '/about' }">
          <span>關於我們</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-promotion"></i>
        <a href="https://www.google.com/" target="_blank">GitHub</a>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    msg: String,
  },
  state: {
    activeIndex: String,
  },
})
export default class LayoutHeader extends Vue {
  data() {
    return {
      activeIndex: this.$route.name,
    };
  }
  created() {
    // this.activeIndex = this.$route.name;
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  display: flex;
  justify-content: flex-end;
  &.el-menu--horizontal {
    border: none;
  }
}
</style>