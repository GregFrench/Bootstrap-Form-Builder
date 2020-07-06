<template>
<div class="row">
  <div class="col-xs-12">
    <label class="editable editable-label" v-on:focusout="updateLabel(index)" contenteditable="true">{{field.label}}</label>
    <input type="email" name="email" class="form-control" :placeholder="field.placeholder">
  </div>
</div>
</template>

<script>
import $ from 'jquery';

export default {
  props: ['field', 'index', 'fields'],
  data: function () {
      return { fieldsRef: this.fields }
  },
  methods: {
    updateLabel: function(index) {

      var text = $("[contenteditable='true']").eq(index).text();

      this.fieldsRef[index].label = text;

    }
  }
}
</script>