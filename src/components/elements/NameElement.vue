<template>
<div>
  <label class="editable editable-label" contenteditable="true">{{field.label}}</label>
  <div class="row">
    <div v-for="subfield in activeSubFields(field.subfields)" class="col-xs-6">
      <input type="text" :name="subfield.name" class="form-control" :placeholder="subfield.placeholder">
      <span class="help-block">{{subfield.label}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["field"],
  methods: {
    activeSubFields: function(subfields) {

        return subfields.filter(function(subfield) {

            return subfield.active === 1;

        });

    }
  }
}
</script>