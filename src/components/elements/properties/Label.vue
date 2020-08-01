<template>
  <strong>
    <span
      class="editable editable-label"
      contenteditable="true"
      v-on:focusout="updateLabel($event, index)"
      ref="label"
      spellcheck="false"
    >{{ value }}</span>
  </strong>
</template>

<script>
import methods from '../../../store/methods';

export default {
  props: ['value', 'index'],
  methods,
  mounted() {
    const div = this.$refs.label;

    setTimeout(() => {
      div.focus();

      window.getSelection().selectAllChildren(
        div,
      );
    }, 0);
  },
};
</script>
