<template>
<div>
  <h1 v-if="field.tagname === 'h1' || field.tagname === null">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '' && field.subheader !== undefined)" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
  </h1>
  <h2 v-if="field.tagname === 'h2'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '' && field.subheader !== undefined)" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
  </h2>
  <h3 v-if="field.tagname === 'h3'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
  </h3>
  <h4 v-if="field.tagname === 'h4'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
  </h4>
  <h5 v-if="field.tagname === 'h5'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
  </h5>
  <h6 v-if="field.tagname === 'h6'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
  </h6>
</div>
</template>

<script>
import $ from 'jquery';
export default {
  props: ["field", "index", "fields"],
  data: function () {
    return { fieldsRef: this.fields }
  },
  methods: {
    updateLabel: function(index) {

      var text = $("[contenteditable='true']").eq(index).text();

      this.fieldsRef[index].label = text;

      //this.$store.commit("updateFields", {fields: this.fieldsRef});

      //console.log(this.$store.fields)

    },
    updateSubHeader: function(index) {
      var text = $(".editable-sub-" + index).eq(0).text();

      this.fields[index].subheader = text;

      // reupdate text to deal with bug of vue being updated
      // and rendering text twice
      $(".editable-sub-" + index).eq(0).text(text);

    }
  }
}

</script>
