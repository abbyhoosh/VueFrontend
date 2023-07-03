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
    }
  },
  components: {PageHeader},
  methods: {
    async editArticle(slug) {
      try {
        const response = await fetch(`${apiBaseURL}/articles/edit/${slug}.json`,
            {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Authorization': `Bearer ${this.tokenStore.token}`,
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                title: this.focusStore.focus.title,
                body: this.focusStore.focus.body,
                Tags: this.focusStore.focus.tags
              }),
              mode: 'cors'
            });
      } catch (e) {
        console.log(e);
      }
      this.$router.push({name: 'Articles'})
    }
  }
}
</script>

<template>
  <PageHeader header="Edit"/>

  <form>
    <div>
      <label for="title">Title</label> <br>
      <textarea name="title" v-model="this.focusStore.focus.title" cols="100"></textarea>
    </div>
    <div>
      <label for="body">Body</label><br>
      <textarea name="body" v-model="this.focusStore.focus.body" rows="5"
                cols="100">{{this.focusStore.focus.body}}</textarea>
    </div>
    <div>
      <label for="tags">Tags</label><br>
      <textarea name="tags" v-model="this.focusStore.focus.tags" cols="100">{{this.focusStore.focus.tags}}</textarea>
    </div>
  </form>
  <div class="submit-edit">
    <button @click="editArticle(this.focusStore.focus.slug)">Save Article</button>
  </div>
</template>

<style>

label {
  font-size: 25px;
}

textarea {
  resize: none;
  margin-top: 20px;
  margin-bottom: 10px;
}

div {
  grid-column-start: 2;
  justify-self: start;
  align-self: start;
}

button {
  height: 40px;
  width: 150px;
  grid-column-start: 2;
  place-self: start center;
}

.submit-edit {
  display: flex;
  justify-content: center;
  width: 100%;
}

form {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px 1fr 1fr .5fr .5fr 2fr;
  height: 100vh;
}
</style>