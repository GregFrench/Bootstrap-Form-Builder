<template>
<div v-bind:class="{
    h1: field.tagname === 'h1' || field.tagname === undefined,
    h2: field.tagname === 'h2',
    h3: field.tagname === 'h3',
    h4: field.tagname === 'h4',
    h5: field.tagname === 'h5',
    h6: field.tagname === 'h6'
}">
    <span
        class="editable editable-label"
        contenteditable="true"
        v-on:focusout="updateLabel($event, index)"
    >{{field.label === undefined ? custom.label : field.label}}</span><br />
    <small class="editable"
        data-text="Type a subheader"
        contenteditable="true"
        ref="subheader"
        v-on:focusout="updateSubHeader($event, index)"
    >{{field.subheader}}</small>
</div>
</template>

<script>
export default {
  props: ['field', 'index'],
  methods: {
    updateLabel(e, index) {
      this.$store.commit('updateFieldLabel', { index, label: e.target.innerHTML });
    },
    updateSubHeader(e, index) {
      const text = e.target.innerHTML;
      this.$store.commit('updateFieldSubHeader', { index, subheader: text });
      this.$refs.subheader.innerHTML = text;
    },
  },
};
</script>
