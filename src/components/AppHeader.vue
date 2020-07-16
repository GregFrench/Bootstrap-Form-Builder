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
                <a href="https://github.com/GregFrench/Bootstrap-Form-Builder" class="fork-me">Star me on GitHub</a>
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

    <div class="code">
      <div :key="index" v-for="(field,index) in this.$store.state.fields" class="form-group">
                <EmailElement
                  v-if="field.type === 'email'"
                  v-bind:field="field"
                  v-bind:index="index"
                  >
                </EmailElement>

                <AddressElement
                  v-if="field.type === 'address'"
                  v-bind:field="field"
                  >
                </AddressElement>

                <TextareaElement
                  v-if="field.type === 'textarea'"
                  v-bind:field="field"
                  >
                </TextareaElement>

                <CheckboxesElement
                  v-if="field.type === 'checkboxes'"
                  v-bind:field="field"
                  >
                </CheckboxesElement>

                <RadioButtonsElement
                  v-if="field.type === 'radio_buttons'"
                  v-bind:field="field"
                  >
                </RadioButtonsElement>

                <SelectElement
                  v-if="field.type === 'select'"
                  v-bind:field="field"
                  >
                </SelectElement>
      </div>
    </div>
</div>
</template>

<style>

</style>

<script>
import $ from 'jquery';
import pretty from 'pretty';

// import elements from '../elements';
import getters from '../store/getters';

import EmailElement from './elements/EmailElement.vue';
import AddressElement from './elements/AddressElement.vue';
import TextareaElement from './elements/TextareaElement.vue';
import CheckboxesElement from './elements/CheckboxesElement.vue';
import RadioButtonsElement from './elements/RadioButtonsElement.vue';
import SelectElement from './elements/SelectElement.vue';

export default {
  computed: {
    fields() {
      return this.$store.state.fields;
    },
    html() {
      return this.$store.getters.html;
      /* let result = '';

      for (let i = 0; i < this.fields.length; i += 1) {
        const element = elements.find((el) => el.name === this.fields[i].name);

        for (let j = 0; j < element.html.length; j += 1) {
          result += this.getHtml(element.html[j], this.fields[i]);
        }
      }

      return pretty(result); */
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
    getHtml(obj, field, depth = 0) {
      let result = '';

      for (let i = 0; i < depth; i += 1) {
        // result += ' ';
      }

      if (obj.type === 'element') {
        const matches = obj.value.match(/^{(.*)}$/) || [];

        if (!matches.length) {
          result += `<${obj.value}>`;
        } else {
          result += `<${field[matches[1]]}>`;
        }

        if (obj.newline !== false) {
          result += '\n';
        }
      } else if (obj.type === 'text') {
        const matches = obj.value.match(/^{(.*)}$/) || [];

        if (!matches.length) {
          result += obj.value;
        } else {
          result += field[matches[1]];
        }

        if (obj.newline !== false) {
          result += '\n';
        }
      } else if (obj.type === 'break') {
        result += '<br />\n';
      }

      if (obj.children !== undefined) {
        for (let i = 0; i < obj.children.length; i += 1) {
          result += this.getHtml(obj.children[i], field, depth + 2);
        }
      }

      if (obj.type === 'element') {
        for (let i = 0; i < depth; i += 1) {
          // result += ' ';
        }
        const matches = obj.value.match(/^{(.*)}$/) || [];

        if (!matches.length) {
          result += `</${obj.value}>`;
        } else {
          result += `</${field[matches[1]]}>`;
        }

        result += '\n';
      }

      return result;
    },
    showEmbedCode() {
      $('.modal').show();
      const code = $('.code').html();
      $('.embed-code-box').html(pretty(this.formatCode(code)));
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
  components: {
    EmailElement,
    AddressElement,
    TextareaElement,
    CheckboxesElement,
    RadioButtonsElement,
    SelectElement,
  },
};
</script>
