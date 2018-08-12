<template>
  <div>
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      id="email"
      v-model="email"
      placeholder="Enter your email">
    <br>
    <input
      type="password"
      name="password"
      id="password"
      v-model="password"
      placeholder="Enter your password">
    <br>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthencationService from '@/services/AuthencationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('Email has changed value', value)
    }
  },
  methods: {
    async register () {
      const response = await AuthencationService.register({
        email: this.email,
        password: this.password
      })

      console.log(response.data)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  margin: 10px
}
</style>
