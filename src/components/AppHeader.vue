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
            <{{'div class="form-group' + (typeof field.textalign !== "undefined" ? ' ' + field.textalign : "") + '"'}}>
            <div v-if="field.type === 'header'">
                <{{field.tagname}}>{{field.label}}
                  <span v-if="field.subheader !== null && field.subheader !== '' && field.subheader !== undefined">
                    <{{'small'}}>{{field.subheader}}<{{'/small'}}>
                  </span>
                </{{field.tagname}}><br />
            </div>
            <div v-if="field.type === 'name'">
              <{{'label'}}>{{field.label}}<{{'/label'}}>
              <{{'div class="row"'}}>
                <div v-for="subfield in activeSubFields(field.subfields)">
                <{{'div class="col-xs-6"'}}>
                  <div>
                  <{{'input type="text" name="' + subfield.name + '" class="form-control" placeholder="' + subfield.placeholder + '"'}}>
                  </div>
                  <div>
                  <{{'span class="help-block"'}}>{{subfield.label}}<{{'/span'}}>
                  </div>
                <{{'/div'}}>
                </div>
              <{{'/div'}}>
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
    activeSubFields: function(subfields) {

        return subfields.filter(function(subfield) {

            return subfield.active === 1;

        });

    },
    showEmbedCode () {
      this.$modal.show('embed-code');
    },
    hideEmbedCode () {
      this.$modal.hide('embed-code');
    }
  }
}

</script>
