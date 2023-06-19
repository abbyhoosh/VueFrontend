<script setup>
defineProps({
  aTitle: {
    type: String,
    required: true
  },
  aCreated: {
    type: String,
    required: true
  }
})
</script>

<template>
  <tr>
    <td class="title">{{ aTitle }}</td>
    <td>{{ aCreated }}</td>
    <td>
      <a>Edit </a>
      <a>Delete</a>
    </td>
  </tr>
</template>

<style>
tr {
  height: 40px;
  font-size: 20px;
  text-align: center;
}
td{
  border-bottom-width: medium;
  border-bottom-color: gray;
}
.title{
  text-align: left;
  padding-left: 30px;
}
</style>