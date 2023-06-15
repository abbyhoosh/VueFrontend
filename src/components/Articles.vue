<script setup>

import Banner from "@/components/Banner.vue";
import Header from "@/components/PageHeader.vue";
import PageHeader from "@/components/PageHeader.vue";

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
      <th>Title</th>
      <th>Created</th>
      <th>Action</th>
    </tr>
    <tr>
      <td> test</td>
    </tr>
  </table>

  <div v-for="array in this.posts">
    <div v-for="article in array">
      {{ article.title }}
    </div>
  </div>

</template>


<style>

</style>