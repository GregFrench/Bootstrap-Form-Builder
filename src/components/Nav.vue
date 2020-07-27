<template>
  <nav class="site-nav">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <a href="#" v-on:click=showEmbedCode() class="show-embed">Get Embed Code</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

};
</script>

<style scoped>
.site-nav {
  background-color: #2196F3;
}

.site-nav a {
  color: #fff;
  display: inline-block;
  font-size: 18px;
  padding: 13px 27px;
  text-transform: uppercase;
}

.site-nav a:hover {
  text-decoration: none;
}

.site-nav a:visited {
  text-decoration: none;
}

.site-nav a:link {
  text-decoration: none;
}

.site-nav a:active {
  text-decoration: none;
}
</style>
