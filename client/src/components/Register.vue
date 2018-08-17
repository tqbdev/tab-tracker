<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
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
          <div class="error" v-html="error"></div>
          <v-btn
          class="cyan"
            @click="register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthencationService from "@/services/AuthencationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  watch: {
    email(value) {
      console.log("Email has changed value", value);
    }
  },
  methods: {
    async register() {
      try {
        await AuthencationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  mounted() {}
};
</script>

<style scoped>
input {
  margin: 10px;
}

.error {
  color: red;
}
</style>
