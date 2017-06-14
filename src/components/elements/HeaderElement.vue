<template>
<div>
  <h1 v-if="tagname === 'h1' || tagname === null">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="isFocused || (subheader !== null && subheader !== '' && subheader !== undefined)" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{subheader}}</small>
  </h1>
  <h2 v-if="tagname === 'h2'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="isFocused || (subheader !== null && subheader !== '' && subheader !== undefined)" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{subheader}}</small>
  </h2>
  <h3 v-if="tagname === 'h3'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="isFocused || (subheader !== null && subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{subheader}}</small>
  </h3>
  <h4 v-if="tagname === 'h4'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="isFocused || (subheader !== null && subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{subheader}}</small>
  </h4>
  <h5 v-if="tagname === 'h5'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="isFocused || (subheader !== null && subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{subheader}}</small>
  </h5>
  <h6 v-if="tagname === 'h6'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="isFocused || (subheader !== null && subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{subheader}}</small>
  </h6>
</div>
</template>

<script>
import $ from 'jquery';
export default {
  props: ["tagname", "label", "isFocused", "index", "subheader", "fields"],
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
