<script>
import PageHeader from "@/components/PageHeader.vue";

const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';

export default {
  components: {PageHeader},
  props: {
    article: {
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
}
</script>

<template>
  <PageHeader :header="article.title"/><br>
  <p class="body">{{ article.body }}</p>
  Tags:
  <a v-for="t in article.tags">{{ t.title }}</a>
  <p>Author ID: {{article.user_id}}</p>
  <p>Created: {{ article.created }}</p>
</template>

<style>
.body {
  font-size: 20px;
}
</style>