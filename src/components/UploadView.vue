<template>
    <div>
        <input type="file" @change="handleFileChange" />
        <button @click="uploadFile">上传文件</button>
        <div v-if="uploadProgress > 0">
            上传进度：{{ uploadProgress }}%
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { promise2, flattenAndUnique } from '@/utils/common';

const file = ref(null);
const uploadProgress = ref(0);
const userList = reactive([
    {
        id: 1,
        name: '张三',
        age: 18,
    },
    {
        id: 2,
        name: '李四',
        age: 20,
    },
    {
        id: 3,
        name: '王五',
        age: 22,
    },
    {
        id: 4,
        name: '王五',
        age: 22,
    },
    {
        id: 5,
        name: '王五',
        age: 22,
    },
]);
const selectList = reactive([
    {
        id: 1,
        name: '张三',
        age: 18,
    },
    {
        id: 2,
        name: '李四',
        age: 20,
    },
    {
        id: 3,
        name: '王五',
        age: 22,
    },
]);
const arr = reactive(
    [
        [1, 2, 2], 
        [3, 4, 5, 5], 
        [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 
        10
    ]
)
onMounted(() => {
    console.log('onMounted');
    deleteSelect();
    promise2();
    flattenAndUnique(arr);
});

// 删除selectList中的元素
const deleteSelect = () => {
    //创建一个包含selectList中id的Set对象
    const idSet = new Set(selectList.map(item => item.id));
    //创建一个新数组，其中包含不在idSet中的userList元素
    const result = userList.filter(itemB => !idSet.has(itemB.id));
    console.log(result); // 输出
}

function handleFileChange(event) {
    file.value = event.target.files[0];
    console.log(file.value);
    console.log(event.target.files[0]);
}

function uploadFile() {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file.value);

    xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
            uploadProgress.value = Math.round((event.loaded / event.total) * 100);
        }
    });

    xhr.open('POST', 'http://127.0.0.1:3000/api/v1/upload/upload');
    xhr.send(formData);
}
</script>
<style>
.is-hidden {
    visibility: hidden;
}
</style>