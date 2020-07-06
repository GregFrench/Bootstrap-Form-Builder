<template>
<div>
    <label class="editable editable-label" contenteditable="true">{{field.label}}</label>
    <div class="row">
        <div
          v-for="(subfield, index) in activeSubFields(field.subfields)"
          class="col-xs-6"
          :key="index"
        >
          <input
            type="text"
            :name="subfield.name"
            class="form-control"
            :placeholder="subfield.placeholder"
          >
            <span class="help-block">{{subfield.label}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['field'],
  methods: {
    activeSubFields(subfields) {
      return subfields.filter((subfield) => subfield.active === 1);
    },
  },
};
</script>
