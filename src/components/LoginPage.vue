<script>
import Banner from "@/App.vue";
import PageHeader from "@/components/PageHeader.vue";
import {ref} from 'vue'
const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';
const tokenHeader = new Headers();
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODczNzMxMDB9.-mimtn4oM94oFgZiLUfQ_UGK6Ow01N3emR4ojKhjwZg';
tokenHeader.append('Authorization', `Bearer ${token}`);
tokenHeader.append('content-type', 'application/json');
export default {
  components: {PageHeader},
  emits:["loggedIn"],
  data() {
    return {
      newToken: [],
      user: ref(''),
      pass: ref('')
    }
  },
  methods: {

    async loginUser(user, pass) {
      try {
        const response = await fetch(`${apiBaseURL}/users/token.json`,
            {
              method: 'POST',
              mode: 'cors',
              body: JSON.stringify({email: user, password: pass}),
              headers: {
                'content-type': 'application/json',
                'Authorization': `Basic ${user}:${pass}`

              },
              credentials: 'include'
            });
        this.newToken = await response.json();
      } catch (e) {
        console.log(e);
      }
      if(this.newToken.success){
        this.$emit("loggedIn", this.newToken.data.token, "Articles");
      }
    }
  }
}
</script>

<template>
  <PageHeader header="Login"/>
  <div class="login">
    <label for="email">Email</label><br>
    <input v-model="user" type="text" id="email"/><br>
    <label for="pass">Password</label><br>
    <input v-model="pass" type="password" id="pass"/><br>
    <button @click="loginUser(this.user, this.pass)">submit</button>
  </div>
</template>

<style>
label {
  font-size: 25px;
}

input {
  height: 30px;
  width: 300px;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}

button {
  align-self: center;
}
</style>