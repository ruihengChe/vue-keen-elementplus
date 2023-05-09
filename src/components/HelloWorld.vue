<template>
  <div class="hello">
    <h1>测试</h1>
    <el-button>按钮</el-button>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<!-- <script setup>
import { onMounted, reactive } from "vue";
const target = reactive({
  name: "小陈",
  age: 26,
});
const source = reactive({});
const ass = (target, source) => {
  let copy = Object.assign(target, source);
  copy.hobby = "drawing";
  console.log(copy.value);
  console.log(target.value);
};
onMounted(() => {
  ass(target, source);
});
</script> -->
<!-- <script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script> -->
<script>
export default {
  mounted() {
    this.promise();
  },
  methods: {
    test() {
      let obj = {
        name: function () {
          console.log("name", typeof this);
        },
        obj2: {
          name2: () => {
            console.log("name2", typeof this);
          },
          name4: function () {
            console.log("name4", this);
          },
          obj3: {
            name3: () => {
              console.log("name3", this);
            },
            name5: function () {
              console.log("name5", this);
            },
          },
        },
      };
      console.log("全局：", typeof this);
      obj.name();
      obj.obj2.name2();
      obj.obj2.name4();
      obj.obj2.obj3.name3();
      obj.obj2.obj3.name5();
    },
    promise() {
      console.log(1);
      new Promise(function (resolve) {
        console.log(2);
        setTimeout(function () {
          console.log(5);
          resolve();
        }, 2000);
      }).then(() => {
        console.log(4);
      });
      console.log(3);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
