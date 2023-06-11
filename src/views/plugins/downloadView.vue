<template>
  <div>
     <h4>文件下载</h4>
     <div class="uploadpdf" @click="downloadFile">下载pdf</div>
  </div>
</template>

<script setup>
import { downloadPdf } from '@/api/login'

// 下载pdf
const downloadFile = async () => {
    const result = await downloadPdf()
    console.log(result.data.pdfUrl)
    /**
   * 使用 JavaScript 和 Blob 对象创建一个临时下载链接。
   * 首先，您需要使用 `fetch()` API 获取 PDF 文件的数据，
   * 然后创建一个 Blob 对象并使用 `URL.createObjectURL()`
   * 生成一个临时 URL。
   * 最后，创建一个隐藏的 `<a>` 标签并触发点击事件以开始下载
   */
    const response = await fetch(result.data.pdfUrl)
    const blob = await response.blob()
    const downloadUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = 'test.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
</script>

<style scoped>
.uploadpdf {
  width: 100px;
  height: 50px;
  color: #fff;
  background-color: #2d71f0;
  border-radius: 5px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
</style>
