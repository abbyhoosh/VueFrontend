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
  <div class="container">
    <button class="backButton" v-if="page!=='LoginPage'" @click="$emit('changePage', 'Articles')">BACK</button>
    <h1 class="HydraBanner">HydraBlog</h1>
  </div>


</template>

<style>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: midnightblue;
  margin: -10px -10px 60px -10px;
  width: 120%;
  height: 140px;

}
.HydraBanner::before{
  content: '';
  flex: .55;
}
.HydraBanner {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 65px;
  font-family: Impact;
  margin: 0;
  font-weight: 2000;
  color: whitesmoke;
  background-color: midnightblue;
  width: 100%;
}

.HydraBanner::after {
  content: '';
  flex: 1;
}

.backButton {
  align-self: flex-start;
  margin: 10px;
  height: 30px;
  width: 100px;
}

.backButton:hover {
  cursor: pointer;
}
</style>