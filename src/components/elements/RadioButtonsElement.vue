<template>
<div>
  <label class="editable" contenteditable="true">{{field.label}}</label>
  <div class="form-element">
    <div v-for="option in splitStringByLine(field.options)" class="radio">
      <label><input type="radio" :name="option">{{option}}</label>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['field'],
  methods: {
    splitStringByLine: function(str) {
      return str.split("\n");
    }
  }
}
</script>