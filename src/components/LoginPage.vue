<script>
import Banner from "@/App.vue";
import PageHeader from "@/components/PageHeader.vue";

export default {
  components: {PageHeader}
}
</script>

<template>
  <PageHeader header="Login"/>
  <div class="login">
    <label for="user">Username</label><br>
    <input type="text" id="user"/><br>
    <label for="pass">Password</label><br>
    <input type="password" id="pass"/><br>
    <button>submit</button>
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
.login{
  display: flex;
  flex-direction: column;
   align-items: center;
  justify-items: center;
}
button{
  align-self: center;
}
</style>