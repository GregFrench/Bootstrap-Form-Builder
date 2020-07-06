<template>
<div>
  <label class="editable" contenteditable="true">{{field.label}}</label>
  <textarea class="form-control"></textarea>
</div>
</template>

<script>
export default {
  props: ['field'],
};
</script>
