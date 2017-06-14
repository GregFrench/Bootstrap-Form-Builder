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
      <div v-for="(field,index) in this.$store.state.fields" class="form-group">
        <div v-if="field.type === 'header'" v-bind:class="field.textalign">
            <HeaderElement 
                v-bind:field="field"
                v-bind:index="index"
                >
            </HeaderElement>
        </div>
        <div v-if="field.type === 'name'">
            <NameElement v-bind:field="field"></NameElement>
        </div>
      </div>
    </div>
</div>
</template>

<style>

</style>

<script>
import HeaderElement from './elements/HeaderElement';
import NameElement from './elements/NameElement';
import AddressElement from './elements/AddressElement';
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
      // remove content editable attribute
      code = code.replace(/contenteditable="true"/g, '');

      // remove class editable
      code = code.replace(/class="editable editable-label"/g, '');

      // remove br tags
      code = code.replace(/<br>/g, '');
      // remove span tags
      code = code.replace(/<span\s+>/g, '');
      code = code.replace(/<\/span>/g, '');

      code = code.replace(/(?!^)&#60;/g, '<br />&#60;');

      // remove <!----> tags
      code = code.replace(/<!---->/g, '');
      code = code.replace(/</gi, '&#60;');

      code = code.replace(/>/gi, "&#62;<br />");

      return code;
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
  },
  components: {
    HeaderElement,
    NameElement,
    AddressElement
  }
}

</script>
