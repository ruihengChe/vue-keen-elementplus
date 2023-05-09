<template>
    <div>
        <div>
            <input type="text" v-model="message" />
            <button @click="sendMessage">Send</button>
        </div>
        <ul>
            <li v-for="msg in messages" :key="msg">{{ msg }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let message = ref();
let messages = ref([]);
let ws = null;

ws = new WebSocket('ws://localhost:8080');
// http://127.0.0.1:3000
ws.onopen = () => {
    console.log('Websocket connected');
}
ws.onmessage = evt => {
    messages.value.push(evt.data);
}
ws.onclose = () => {
    console.log("Websocket disconnected")
}
function sendMessage() {
    ws.send(message);
    message.value = '';
}
</script>