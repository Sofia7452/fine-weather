<template>
  <div>
    <div>用户名：</div>
    <input type="text" v-model="loginInfo.username" />
    <div>密码：</div>
    <input type="text" v-model="loginInfo.password" />
    <button @click="login">register/login</button>
    <div>{{ loginResult }}</div>
  </div>
</template>
<script setup>
import {
  onMounted, reactive, ref, watchEffect,
} from 'vue'
const loginInfo = ref({
  username: '',
  password: ''
})
const loginResult = ref(null)
async function login() {
  const respRaw = await fetch(`${import.meta.env.VITE_IMG_FETCH_BASE}/user/register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    
    body: JSON.stringify(loginInfo.value)
  });
  let res = await respRaw.json()
  loginResult.value = res?.result?.status?'成功':'失败'
  console.log('loginResult.value',res);
  
}
async function getToken() {
  
}
onMounted(() => {
  getToken()
})
</script>