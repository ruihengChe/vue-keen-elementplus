import { onMounted, onUnmounted, reactive } from 'vue'

export default {
    setup() {
        const state = reactive({
            screenWidth: document.documentElement.clientWidth,
            screenHeight: document.documentElement.clientHeight
        })

        const resizeHandler = () => {
            state.screenWidth = document.documentElement.clientWidth
            state.screenHeight = document.documentElement.clientHeight
        }

        onMounted(() => {
            window.addEventListener('resize', resizeHandler)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', resizeHandler)
        })

        return { state }
    }
}
