<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h2>WMS Login</h2>

      <div class="field">
        <label>Email</label>
        <InputText v-model="form.email" placeholder="Enter email" />
      </div>

      <div class="field">
        <label>Password</label>
        <Password v-model="form.password" :feedback="false" placeholder="Enter password" />
      </div>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <Button label="Login" :loading="isLoading" @click="handleLogin" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.js'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

const router = useRouter()
const authStore = useAuthStore()

const form = ref({ email: '', password: '' })
const errorMessage = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''
  try {
    await authStore.login(form.value)
    router.push({ name: 'dashboard' })
  } catch (error) {
    errorMessage.value = 'Invalid credentials. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>
