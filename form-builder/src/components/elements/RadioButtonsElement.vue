<template>
<div>
  <label class="editable" contenteditable="true">{{field.label}}</label>
  <div class="form-element">
    <div v-for="(option, index) in splitStringByLine(field.options)" class="radio" :key="index">
      <label><input type="radio" :name="option">{{option}}</label>
    </div>
  </div>
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
