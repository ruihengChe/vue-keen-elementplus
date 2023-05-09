<template>
  <a-modal title="编辑地址"
  :visible="visible"
  width="1200px">
    <div class="address">
      <div class="address-left">
        <div class="address-left-top">
          <div class="address-left-top-left">
            <span>收货人</span>
            <input type="text" placeholder="请输入收货人姓名">
          </div>
          <div class="address-left-top-right">
            <span>手机号码</span>
            <input type="text" placeholder="请输入收货人手机号码">
          </div>
        </div>
        <div class="address-left-bottom">
          <span>所在地区</span>
          <div class="address-left-bottom-select">
            <select name="" id="">
              <option value="">请选择</option>
            </select>
            <select name="" id="">
              <option value="">请选择</option>
            </select>
            <select name="" id="">
              <option value="">请选择</option>
            </select>
          </div>
        </div>
      </div>
      <div class="address-right">
        <span>详细地址</span>
        <input type="text" placeholder="请输入详细地址">
      </div>
    </div>
  </a-modal>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthUserStore } from '../pinia/index.js';
const visible = ref(true);
const counterStore = useAuthUserStore();
console.log(counterStore.$state);
</script>
<style lang="scss" scoped>
  .address{
    background: green;
  }
</style>
<style lang="stylus">
</style>
