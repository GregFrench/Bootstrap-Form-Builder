<template>
<div>
    <header class="site-header">
      <div class="container">
          <div class="row">
              <div class="col-sm-4">
                  <a href="./#/myforms" class="logo">Bootstrap Form Builder</a>
              </div>
              <div class="col-sm-4 text-center">
                <p>&nbsp;</p>
              </div>
              <div class="col-sm-4 text-center">
                  <a href="#">Add Collaborators</a>
              </div>
          </div>
      </div>
    </header>
    <nav class="site-nav">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    &nbsp;
                </div>
                <div class="col-sm-6 text-center">
                    <ul>
                        <li><a href="#">Build</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Publish</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    &nbsp;
                </div>
            </div>
        </div>
    </nav>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header.site-header {
    height: 50px;
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

nav.site-nav {
    background-color: #2196F3;
}

nav.site-nav ul {
    margin: 0;
    padding: 0;
}

nav.site-nav ul li {
    display: inline;
}

nav.site-nav ul li a {
    color: #fff;
    display: inline-block;
    font-size: 18px;
    padding: 13px 27px;
    text-transform: uppercase;
}

nav.site-nav ul li a:hover {
    text-decoration: none;
}

nav.site-nav ul li a:visited {
    text-decoration: none;
}

nav.site-nav ul li a:link {
    text-decoration: none;
}

nav.site-nav ul li a:active {
    text-decoration: none;
}
</style>
