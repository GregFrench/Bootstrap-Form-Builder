<template>
<div>
    <header class="site-header">
      <div class="container">
          <div class="row">
              <div class="col-sm-4">
                  <a href="#" class="logo">Bootstrap Form Builder</a>
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
                        <li><a href="#" v-on:click=showEmbedCode() class="show-embed">Publish</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    &nbsp;
                </div>
            </div>
        </div>
    </nav>

    <div class="modal">
      <div class="modal-content">
        <div class="embed-code">
          <h1>Embed Code</h1>
          <div class="embed-code-box">
            Test
          </div>
        </div>
      </div>
    </div>

    <div class="code">
      <div v-for="field in this.$store.state.fields">
        {{field.tagname}}
      </div>
      <h1>Tests</h1><div class="test-div"></div>
    </div>
</div>
</template>

<style>

</style>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      code: ""
    }
  },
  methods: {
    activeSubFields: function(subfields) {

        return subfields.filter(function(subfield) {

            return subfield.active === 1;

        });

    },
    formatCode(code) {
      code = code.replace(/</gi, '&#60;');
      code = code.replace(/(?!^)&#60;/g, '<br />&#60;');
      return code.replace(/>/gi, "&#62;<br />");
    },
    showEmbedCode () {
      $('.modal').show();
      var code = $('.code').html();
      $(".embed-code-box").html(this.formatCode(code));      
    },
    hideEmbedCode () {
      this.$modal.hide('embed-code');
    }
  },

  mounted() {

    $('body').click(function (evt){   

        if (evt.target.className == "modal-content" ||
            evt.target.className == "show-embed") {
            return;
        }

        if ($(evt.target).closest('.modal-content').length ||
            $(evt.target).closest('.show-embed').length) {
            return;
        }     

        if($('.modal').is(":visible")) {
          $('.modal').hide();
        }

    });
  }
}

</script>
