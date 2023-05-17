<template>
  <div>
    Screen width: {{ state.screenWidth }} <br/>
    Screen height: {{ state.screenHeight }} <br/>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import { useAuthUserStore } from '../pinia/index.js';
import useResizeHandler from "./Layout/mixin/ResizeHandler.js";
const { state } = useResizeHandler();
// const visible = ref(true);
const counterStore = useAuthUserStore();
console.log(counterStore.$state);
const res = [{name: '姓名'}, {work: '工作'}, {home: '家庭'}];

const values = res.map(obj => Object.values(obj)).flat();

console.log(values); // 输出 ['姓名','工作','家庭']

</script>
<style lang="scss" scoped>
  .address{
    background: green;
  }
</style>
<style lang="stylus">
</style>
