<script setup>

import Banner from "@/components/Banner.vue";
import Header from "@/components/PageHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import ArticleRow from "@/components/ArticleRow.vue";

</script>

<script>
const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';


export default {
  props:{
    token:{
      type: String,
      required: true
    }
  },
  data() {
    return {
      posts: [],
    };
  },
  emits: ["changePage", "sendSlug"],
  methods: {
    async getAllArticles() {
      try {
        const response = await fetch(`${apiBaseURL}/articles.json`,
            {
              method: 'GET',
              credentials: 'include',
              headers: {
                'Authorization': `Bearer ${this.token}`,
                'content-type': 'application/json'
              },
              mode: 'cors'
            });
        this.posts = await response.json();
      } catch (e) {
        console.log(e);
      }
    },

    async deleteArticle(slug) {
      try {
        const response = await fetch(`${apiBaseURL}/articles/delete/${slug}.json`,
            {
              method: 'DELETE',
              credentials: 'include',
              headers:{
                'Authorization': `Bearer ${this.token}`,
                'content-type': 'application/json'
              },
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
  <PageHeader header="Articles"/>
  <u><a class ="add" @click="$emit('changePage', 'AddPage')"> Add Article</a></u>

  <table v-for="array in this.posts">
    <tr>
      <th class="title">Title</th>
      <th>Created</th>
      <th>Action</th>
    </tr>

    <tr v-for="a in array">
      <td class="title">
        <a @click="$emit('changePage', 'ViewPage'); $emit('sendSlug', a.slug);">{{ a.title }}</a>
      </td>
      <td>{{ a.created }}</td>
      <td>
        <a @click="$emit('changePage', 'EditPage'); $emit('sendSlug', a.slug);">Edit </a>
        <a @click="deleteArticle(a.slug)" class="delete">Delete</a>
      </td>
    </tr>
  </table>

</template>

<style>
table {
  margin-top: 20px;
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

a:hover{
  color: dimgray;
  cursor: pointer;
}

.delete:hover{
  color: darkred;
  cursor: pointer;
}
u:hover{
  color: dimgray;
}

.title {
  text-align: left;
  padding-left: 30px;
}
.add{
  display: flex;
  justify-content: center;
  font-size: 20px;
}

</style>