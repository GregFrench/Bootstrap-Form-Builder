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
          <a href="https://github.com/GregFrench/Bootstrap-Form-Builder" class="fork-me">Fork me on GitHub</a>
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
                    <li><a href="#" v-on:click=showEmbedCode() class="show-embed">Get Code</a></li>
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
          <textarea
            spellcheck="false"
            style="width: 100%;"
            class="embed-code-box"
            v-model="html"
          ></textarea>
        </div>
      </div>
    </div>
</div>
</template>

<style>

</style>

<script>
import $ from 'jquery';

// import elements from '../elements';
import getters from '../store/getters';

export default {
  computed: {
    fields() {
      return this.$store.state.fields;
    },
    html() {
      return this.$store.getters.html;
    },
  },
  getters,
  data() {
    return {
      code: '',
    };
  },
  methods: {
    activeSubFields(subfields) {
      return subfields.filter((subfield) => subfield.active === 1);
    },
    formatCode(code) {
      let theCode = code;

      // remove content editable attribute
      theCode = theCode.replace(/contenteditable="true"/g, '');

      // remove class editable
      theCode = theCode.replace(/class="editable editable-label"/g, '');

      // remove <!----> tags
      theCode = theCode.replace(/<!---->/g, '');

      return theCode;
    },
    showEmbedCode() {
      $('.modal').show();
    },
    hideEmbedCode() {
      this.$modal.hide('embed-code');
    },
  },

  mounted() {
    $('body').click((evt) => {
      if (evt.target.className === 'modal-content'
            || evt.target.className === 'show-embed') {
        return;
      }

      if ($(evt.target).closest('.modal-content').length
            || $(evt.target).closest('.show-embed').length) {
        return;
      }

      if ($('.modal').is(':visible')) {
        $('.modal').hide();
      }
    });
  },
};
</script>
