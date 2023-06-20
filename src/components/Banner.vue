<script setup>
defineProps({
  page: {
    type: String,
    required: true
  }
})
</script>
<script>
export default {
  emits: ["changePage"],
}
</script>
<template>

  <button class ="backButton" v-if="page!=='LoginPage'" @click="$emit('changePage', 'Articles')">BACK</button>
  <h1 class="HydraBanner">HydraBlog</h1>

</template>

<style>

.HydraBanner {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 65px;
  font-family: Impact;
  font-weight: 2000;
  color: whitesmoke;
  background-color: midnightblue;
  margin: -10px -10px 60px -10px;
  padding-bottom: 20px;
  padding-top: 30px;
  width: auto;
}
.backButton{
  margin: 3px;
  justify-content: left;
  height: 30px;
  width: 100px;
}
.backButton:hover{
  cursor: pointer;
}
</style>