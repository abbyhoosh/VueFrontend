<script setup>

import Banner from "@/components/Banner.vue";
import Header from "@/components/PageHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import ArticleRow from "@/components/ArticleRow.vue";

</script>

<script>
const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getAllArticles() {
      const tokenHeader = new Headers();
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODczNzMxMDB9.-mimtn4oM94oFgZiLUfQ_UGK6Ow01N3emR4ojKhjwZg';
      tokenHeader.append('Authorization', `Bearer ${token}`);
      tokenHeader.append('content-type', 'application/json');
      try {
        const response = await fetch(`${apiBaseURL}/articles.json`,
            {
              method: 'GET',
              credentials: 'include',
              headers: tokenHeader,
              mode: 'cors'
            });
        this.posts = await response.json();
      } catch (e) {
        console.error(e);
      }
    }
  },
  mounted() {
    this.getAllArticles();
  }
}
</script>

<template>
  <Banner/>
  <PageHeader header="Articles"/>

  <table v-for="array in this.posts">
    <tr>
      <th class="left">Title</th>
      <th>Created</th>
      <th>Action</th>
    </tr>
    <ArticleRow v-for="a in array" :a-title="a.title" :a-created= "a.created.format()" > </ArticleRow>
  </table>

</template>


<style>
table {
  width: 100%;
}

th {
  font-size: 25px;
}

.left{
  text-align: left;
  padding-left: 30px;
}

</style>