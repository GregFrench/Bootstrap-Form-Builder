<template>
  <strong>
    <span
      class="editable editable-label"
      contenteditable="true"
      v-on:focusout="updateLabel($event, index)"
    >{{ value }}</span>
  </strong>
</template>

<script>
import methods from '../../../store/methods';

export default {
  props: ['value', 'index'],
  methods,
};
</script>
