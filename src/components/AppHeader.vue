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
                  <a href="https://github.com/GregFrench/Bootstrap-Form-Builder">Fork me on GitHub</a>
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
                        <li><a href="#" v-on:click=showEmbedCode()>Publish</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    &nbsp;
                </div>
            </div>
        </div>
    </nav>

    <modal name="embed-code">
      <h1>Embed Code</h1>
      <div class="embed-code">{{code}}</div>
    </modal>
</div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      code: "test"
    }
  },
  methods: {
    showEmbedCode () {
      this.$modal.show('embed-code');
      this.code = ""
    },
    hideEmbedCode () {
      this.$modal.hide('embed-code');
    }
  }
}

</script>
