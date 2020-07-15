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
          <textarea style="width: 100%;" class="embed-code-box">
            Test
          </textarea>
        </div>
      </div>
    </div>

    <div class="code">
      {{html}}
      <div :key="index" v-for="(field,index) in this.$store.state.fields" class="form-group">
        <HeaderElement
                  v-if="field.type === 'header'"
                  v-bind:class="field.textalign"
                  v-bind:field="field"
                  v-bind:index="index"
                  >
                </HeaderElement>

                <NameElement
                  v-if="field.type === 'name'"
                  v-bind:field="field"
                  >
                </NameElement>

                <InputElement
                  v-if="field.type === 'text'"
                  v-bind:field="field"
                  >
                </InputElement>

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

import elements from '../elements';

import HeaderElement from './elements/HeaderElement.vue';
import NameElement from './elements/NameElement.vue';
import EmailElement from './elements/EmailElement.vue';
import AddressElement from './elements/AddressElement.vue';
import InputElement from './elements/InputElement.vue';
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
      let result = '';

      for (let i = 0; i < this.fields.length; i += 1) {
        const element = elements.find((el) => el.name === this.fields[i].name);
        result += pretty(this.getHtml(element.html, i));
      }

      return result;
    },
  },
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
    getHtml(obj, fieldIndex) {
      let result = '';
      let closeTag = false;

      if (obj.type === 'element' && obj.children !== undefined) {
        const matches = obj.value.match(/^{(.*)}$/) || [];

        if (!matches.length) {
          result += `<${obj.value}>`;
        } else {
          result += `<${this.fields[fieldIndex][matches[1]]}>`;
        }

        result += '\n';

        closeTag = true;
      }

      if (obj.type === 'text') {
        const matches = obj.value.match(/^{(.*)}$/) || [];

        if (!matches.length) {
          result += obj.value;
        } else {
          result += this.fields[fieldIndex][matches[1]];
        }
      }

      if (obj.type === 'break') {
        result += '<br />\n';
      }

      if (obj.children !== undefined) {
        for (let i = 0; i < obj.children.length; i += 1) {
          result += this.getHtml(obj.children[i], fieldIndex);
        }
      }

      if (obj.type === 'element' && closeTag === true) {
        const matches = obj.value.match(/^{(.*)}$/) || [];

        if (!matches.length) {
          result += `\n</${obj.value}>`;
        } else {
          result += `\n</${this.fields[fieldIndex][matches[1]]}>`;
        }

        result += `\n</${this.fields[fieldIndex].tagname}>`;
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

    $('.embed-code-box').click(() => {
      $(this).select();
    });
  },
  components: {
    HeaderElement,
    NameElement,
    EmailElement,
    AddressElement,
    InputElement,
    TextareaElement,
    CheckboxesElement,
    RadioButtonsElement,
    SelectElement,
  },
};
</script>
