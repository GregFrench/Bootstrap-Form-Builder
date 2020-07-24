<template>
  <header class="site-header">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <a href="#" class="logo">Bootstrap 4 Form Builder</a>
        </div>
        <div class="col-sm-6">
          <a class="fork-me text-right" href="https://github.com/GregFrench/Bootstrap-Form-Builder">Fork me on GitHub</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.fork-me {
  display: block;
  margin-top: 15px;
}

.logo {
  color: #2196F3;
  display: inline-block;
  font-size: 24px;
  margin-top: 5px;
}

.logo:hover {
  color: #2196F3;
  text-decoration: none;
}

.logo:visited {
  color: #2196F3;
  text-decoration: none;
}

.logo:link {
  text-decoration: none;
}

.site-header {
  height: 50px;
}
</style>
