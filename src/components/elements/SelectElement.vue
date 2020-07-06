<template>
<div>
  <label class="editable editable-label" contenteditable="true">{{field.label}}</label>
  <select class="form-control">
    <option
      v-for="(option, index) in splitStringByLine(field.options)"
      :key="index"
    >
      {{option}}
    </option>
  </select>
</div>
</template>

<script>
export default {
  props: ['field'],
  methods: {
    splitStringByLine(str) {
      return str.split('\n');
    },
  },
};
</script>
