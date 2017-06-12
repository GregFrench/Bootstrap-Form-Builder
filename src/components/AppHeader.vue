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
      <div class="embed-code">
        <h1>Embed Code</h1>
        <div id="embed-code">
          <div v-for="field in this.$store.state.fields">
            <{{'div class="form-group ' + field.textalign + '"'}}>
            <div v-if="field.type === 'header'">
                <{{field.tagname}}>{{field.label}}
                  <span v-if="field.subheader !== null && field.subheader !== '' && field.subheader !== undefined">
                    <{{'small'}}>{{field.subheader}}<{{'/small'}}>
                  </span>
                </{{field.tagname}}><br />
            </div>
            <div v-if="field.type === 'name'">
              <label class="editable editable-label" contenteditable="true">{{field.label}}</label>
              <div class="form-inline">
                  <div v-for="subfield in activeSubFields(field.subfields)" class="form-group" style="padding: 5px;">
                      <input v-if="subfield.type === 'prefix' || subfield.type === 'suffix'" type="text" :name="subfield.name" class="form-control" size="4" :placeholder="subfield.placeholder">

                      <input v-if="subfield.type === 'first_name' || subfield.type === 'last_name' || subfield.type === 'middle_name'" type="text" :name="subfield.name" class="form-control" :placeholder="subfield.placeholder">

                      <span class="help-block">{{subfield.label}}</span>
                  </div>
              </div>
            </div>
            <{{'/div'}}>
          </div>
        </div>
      </div>
    </modal>
</div>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    showEmbedCode () {
      this.$modal.show('embed-code');
    },
    hideEmbedCode () {
      this.$modal.hide('embed-code');
    }
  }
}

</script>
