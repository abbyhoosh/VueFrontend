<script setup>
defineProps({
  header: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2 class = "pHeader"> {{header}}</h2>
</template>

<style>
.pHeader{
  font-family: "Book Antiqua";
  font-size: 45px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>