<template>
<div>
  <label class="editable" contenteditable="true">{{field.label}}</label>
  <div class="form-element">
    <div class="outer">
      <div v-for="option in splitStringByLine(field.options)" class="checkbox">
        <label><input type="checkbox" value="">{{option}}</label>
      </div>
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