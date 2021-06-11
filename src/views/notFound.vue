<template>
  <el-result title="404" subTitle="抱歉，请求错误">
    <template #icon>
      <el-image src="./assets/logo.png"></el-image>
    </template>
    <template #extra>
      <el-button type="primary" size="medium">返回</el-button>
    </template>
  </el-result>
</template>

<script lang="ts">
export default {
  name: "Not-Found",
};
</script>