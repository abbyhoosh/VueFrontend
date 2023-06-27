<script>
import PageHeader from "@/components/PageHeader.vue";
const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';
import {useTokenStore} from "@/stores/TokenStore";
import {useFocusStore} from "@/stores/FocusStore";

export default {
  data() {
    return {
      tokenStore: useTokenStore(),
      focusStore: useFocusStore(),
      posts: [],
    };
  },
  components:{PageHeader},
  methods: {
    async getAllArticles() {
      try {
        const response = await fetch(`${apiBaseURL}/articles.json`,
            {
              method: 'GET',
              credentials: 'include',
              headers: {
                'Authorization': `Bearer ${this.tokenStore.token}`,
                'content-type': 'application/json'
              },
              mode: 'cors'
            });
        this.posts = await response.json();
        this.posts= this.posts.articles;
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
                'Authorization': `Bearer ${this.tokenStore.token}`,
                'content-type': 'application/json'
              },
              mode: 'cors'
            });
      } catch (e) {
        console.log(e);
      }
    },

    remove(article){
      this.posts = this.posts.filter((x) => x !== article);
    },
  },

  mounted() {
    this.getAllArticles();
  }
}
</script>

<template>
  <PageHeader header="Articles"/>
  <u><router-link class='add' :to="{name: 'AddPage'}"> Add Article</router-link></u>

  <table>
    <tr>
      <th class="title">Title</th>
      <th>Created</th>
      <th>Action</th>
    </tr>

    <tr v-for="article in this.posts">
      <td class="title">
        <a @click= "this.focusStore.set(article); this.$router.push({name: 'ViewPage'})">{{ article.title }}</a>
      </td>
      <td>{{ article.created }}</td>
      <td>
        <a @click="$emit('changePage', 'EditPage'); $emit('focus', article);">Edit </a>
        <a @click="deleteArticle(article.slug); remove(article)" class="delete">Delete</a>
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