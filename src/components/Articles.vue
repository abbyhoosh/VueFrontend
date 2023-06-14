<script>
const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';

export default {
  data() {
    return {
      articles: ''
    };
  },
  methods: {
    async getAllArticles() {
      const tokenHeader = new Headers();
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODczNzMxMDB9.-mimtn4oM94oFgZiLUfQ_UGK6Ow01N3emR4ojKhjwZg';
      tokenHeader.append('Authorization', `Bearer ${token}`);
      tokenHeader.append('content-type', 'application/json');
      try {
        this.articles = 'enters try';
        const data = await fetch(`${apiBaseURL}/articles.json`,
            {
              method: 'GET',
              credentials: 'include',
              headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
              },
              mode: 'cors'
            });
        //this.articles = await data.json();
      } catch (e) {
        this.articles=e;
        console.error(e);
      }

    }
  },
}
</script>

<template>
  <header>
    Articles
  </header>

  <p>
    {{ articles }}
  </p>


  <button @click="getAllArticles"> get all articles</button>

  <ul>
  </ul>

</template>


<style>

</style>