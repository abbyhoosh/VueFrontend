
<script>
import Banner from "@/App.vue";
import PageHeader from "@/components/PageHeader.vue";
export default {
  components: {PageHeader}
}
</script>

<template>
  <PageHeader header="Login"/>

  <label for="user">Username</label>
  <input type="text" id="user"/>
  <label for="pass">Password</label>
  <input type="password" id="pass"/>
  <button>submit</button>

</template>

<style>
label{
  font-size: 25px;
}
input{
  height: 50px;
  width: 150px;
}

</style>