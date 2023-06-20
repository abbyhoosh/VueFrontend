<script>
import PageHeader from "@/components/PageHeader.vue";
import Banner from "@/components/Banner.vue";

const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';
const tokenHeader = new Headers();
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODczNzMxMDB9.-mimtn4oM94oFgZiLUfQ_UGK6Ow01N3emR4ojKhjwZg';
tokenHeader.append('Authorization', `Bearer ${token}`);
tokenHeader.append('content-type', 'application/json');

export default {
  components: {Banner, PageHeader},
  methods: {
    /**
     async editArticle(slug) {
      try {
        const response = await fetch(`${apiBaseURL}/articles/edit/${slug}.json`,
            {
              method: 'POST',
              credentials: 'include',
              headers: tokenHeader,
              mode: 'cors'
            });
      } catch (e) {
        console.log(e);
      }
    }*/
  }
}
</script>

<template>
  <PageHeader header="Edit"/>

  <form>
    <div>
      <label for="title">Title</label> <br>
      <textarea name="title" cols="100">{{article}}</textarea>
    </div>
    <div>
      <label for="body">Body</label><br>
      <textarea name="body" rows="5" cols="100">{{article}}</textarea>
    </div>
    <div>
      <label for="tags">Tags</label><br>
      <textarea name="tags" cols="100">{{article}}</textarea>
    </div>
    <button>Save Article</button>
  </form>
</template>

<style>

label {
  font-size: 25px;
}

textarea{
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

form {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px 1fr 1fr .5fr .5fr 2fr;
  height: 100vh;
}
</style>