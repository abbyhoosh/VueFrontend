<script>

export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
    async getALlArticles() {
      const tokenHeader = new Headers();
      tokenHeader.append('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODY2ODEwMzB9.TntY7p6we6A7-9gTfc0sPFizcfEN2JBzmMjBWmjR82I');
      const apiBaseURL = 'https://restfulapi.abbyhoosh.repl.co/proxy/5000';
      const data = await fetch(`${apiBaseURL}/articles`,
          {
            method: 'GET',
            headers: tokenHeader
          });
      const articleData = data.json();
      console.log(articleData);
    }
  },
}

</script>