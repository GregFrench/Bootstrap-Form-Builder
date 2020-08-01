<template>
  <strong>
    <span
      class="editable editable-label"
      contenteditable="true"
      v-on:focusout="updateLabel($event, index)"
      ref="myid"
    >{{ value }}</span>
  </strong>
</template>

<script>
import methods from '../../../store/methods';

export default {
  props: ['value', 'index'],
  methods,
  mounted() {
    console.log(this.$refs.myid);
    const div = this.$refs.myid;
    setTimeout(() => {
      div.focus();
      console.log(div);

      window.getSelection().selectAllChildren(
        div,
      );
    }, 0);
  },
};
</script>
