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
      tokenHeader.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODY2ODEwMzB9.TntY7p6we6A7-9gTfc0sPFizcfEN2JBzmMjBWmjR82I');
      tokenHeader.append('content-type', 'application/json');
      try {
        this.articles = 'enters try';
        const data = await fetch(`${apiBaseURL}/articles.json`,
            {
              method: 'GET',
              credentials: 'include',
              headers: {
                "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODY2ODEwMzB9.TntY7p6we6A7-9gTfc0sPFizcfEN2JBzmMjBWmjR82I',
                "Content-Type": 'application/json'
              },
              mode: 'no-cors'
            });
        //this.articles = await data.json();
      } catch (e) {
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