<script>
import PageHeader from "@/components/PageHeader.vue";
import {useFocusStore} from "@/stores/FocusStore";

export default {
  data(){
    return{
      focusStore: useFocusStore(),
    }
  },
  components: {PageHeader},
}
</script>

<template>
  <PageHeader :header="this.focusStore.focus.title"/><br>
  <p class="body">{{ this.focusStore.focus.body }}</p>
  Tags:
  <a v-for="tag in this.focusStore.focus.tags">{{ tag.title }}</a>
  <p>Author ID: {{this.focusStore.focus.user_id}}</p>
  <p>Created: {{ this.focusStore.focus.created }}</p>
</template>

<style>
.body {
  font-size: 20px;
}
</style>