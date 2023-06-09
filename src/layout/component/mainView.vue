<template>
  <div id="main-content">
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
#main-content {
  background-color: #fff;
  padding: 20px;
  min-height: calc(100vh - 155px);
  /* @include webkit(box-sizing, border-box); // css3阴影 */
}
</style>
