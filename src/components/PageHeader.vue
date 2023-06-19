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
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>