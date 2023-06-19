<script setup>

import Banner from "@/components/Banner.vue";
import Header from "@/components/PageHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import ArticleRow from "@/components/ArticleRow.vue";

</script>

<script>
const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';
const tokenHeader = new Headers();
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODczNzMxMDB9.-mimtn4oM94oFgZiLUfQ_UGK6Ow01N3emR4ojKhjwZg';
tokenHeader.append('Authorization', `Bearer ${token}`);
tokenHeader.append('content-type', 'application/json');

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getAllArticles() {
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
        console.log(e);
      }
    },

    async viewArticle(slug){
      try {
        const response = await fetch( `${apiBaseURL}/articles/view/${slug}.json`,
            {
              method: 'GET',
              credentials: 'include',
              headers: tokenHeader,
              mode: 'cors'
            });
      } catch (e) {
        console.log(e);
      }
    },

    async editArticle(slug) {
      try {
        const response = await fetch( `${apiBaseURL}/articles/edit/${slug}.json`,
            {
              method: 'POST',
              credentials: 'include',
              headers: tokenHeader,
              mode: 'cors'
            });
      } catch (e) {
        console.log(e);
      }
    },

    async deleteArticle(slug) {
      try {
        const response = await fetch( `${apiBaseURL}/articles/delete/${slug}.json`,
            {
              method: 'DELETE',
              credentials: 'include',
              headers: tokenHeader,
              mode: 'cors'
            });
      } catch (e) {
        console.log(e);
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
      <th class="title">Title</th>
      <th>Created</th>
      <th>Action</th>
    </tr>

    <tr v-for="a in array">
      <td class="title">
        <a> {{ a.title }} </a>
      </td>
      <td>{{ a.created }}</td>
      <td>
        <a>Edit </a>
        <a>Delete</a>
      </td>
    </tr>
  </table>

</template>


<style>
table {
  width: 100%;
}

th {
  font-size: 25px;
}

tr {
  height: 40px;
  font-size: 20px;
  text-align: center;
}

.title {
  text-align: left;
  padding-left: 30px;
}

</style>