<template>
  <el-breadcrumb class="bg-white m-2 p-2" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <span>關於我們</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
export default {
  name: "Layout-Breadcrumb",
};
</script>