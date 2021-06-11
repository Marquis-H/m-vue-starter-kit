<template>
  <el-footer class="bg-white">
    <!-- 回到顶部 -->
    <el-backtop target=".page-component__scroll"></el-backtop>
    <div>Footer</div>
  </el-footer>
</template>

<script lang="ts">
export default {
  name: "Layout-Footer",
};
</script>

<style lang="scss" scoped>
.el-footer {
  text-align: center;
  line-height: 60px;
}
</style>