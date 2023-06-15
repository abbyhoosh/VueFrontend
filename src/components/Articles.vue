<script setup>

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
     // tokenHeader.append('content-type', 'application/json');
      try {
        const response = await fetch(`${apiBaseURL}/articles.json`,
            {
              method: 'GET',
              credentials: 'include',
              headers: {
                "Authorization": `Bearer ${token}`
              },
              mode: 'cors'
            });
        const finalRes = await response.json();
        this.posts = finalRes;
        console.log(this.posts);
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
  <header>
    Articles
  </header>

    <div v-for="array in this.posts" >
      <div v-for="article in array">
        Title: {{article.title}}
      </div>
    </div>

</template>


<style>

</style>