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
      <div v-for="(field,index) in this.$store.state.fields" class="form-group">
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
import HeaderElement from './elements/HeaderElement';
import NameElement from './elements/NameElement';
import EmailElement from './elements/EmailElement';
import AddressElement from './elements/AddressElement';
import InputElement from './elements/InputElement';
import TextareaElement from './elements/TextareaElement';
import CheckboxesElement from './elements/CheckboxesElement';
import RadioButtonsElement from './elements/RadioButtonsElement';
import SelectElement from './elements/SelectElement';
import $ from 'jquery';
import htmlBeautify from 'html-beautify';
import selectText from 'select-text';
import pretty from 'pretty';

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
      /*
      // remove br tags
      code = code.replace(/<br>/g, '');
      // remove span tags
      code = code.replace(/<span\s+>/g, '');
      code = code.replace(/<\/span>/g, '');

      code = code.replace(/(?!^)&#60;/g, '<br />&#60;');

      code = code.replace(/</gi, '&#60;');

      code = code.replace(/>/gi, "&#62;<br />");*/

      // remove content editable attribute
      code = code.replace(/contenteditable="true"/g, '');

      // remove class editable
      code = code.replace(/class="editable editable-label"/g, '');

      // remove <!----> tags
      code = code.replace(/<!---->/g, '');

      return code;

    },
    showEmbedCode () {
      $('.modal').show();
      var code = $('.code').html();
      $(".embed-code-box").html(pretty(this.formatCode(code)));

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

    $(".embed-code-box").click(function() {
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
    SelectElement
  }
}
</script>
