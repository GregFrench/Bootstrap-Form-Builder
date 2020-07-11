<template>
  <div v-bind:class="{
    h1: field.tagname === 'h1',
    h2: field.tagname === 'h2',
    h3: field.tagname === 'h3',
    h4: field.tagname === 'h4',
    h5: field.tagname === 'h5',
    h6: field.tagname === 'h6'
  }">
    <span
      class="editable editable-label"
      contenteditable="true"
      @focusout="updateLabel"
    >{{field.label}}</span><br />
    <small
      class="editable"
    ><contenteditable
      data-text="Type a subheader"
      tag="div"
      v-model="subHeader"
      :noNL="true"
    />
    </small>

  </div>
</template>

<script>
export default {
  props: ['field'],
  computed: {
    subHeader: {
      get() {
        const state = { ...this.$store.state };

        return state.fields[state.activeIndex].subheader;
      },
      set(value) {
        this.$store.commit('updateFieldSubHeader', value);
      },
    },
  },
  methods: {
    updateLabel(e) {
      this.$store.commit('updateFieldLabel', e.target.innerText);
    },
    updateSubHeader(result) {
      this.$store.commit('updateFieldSubHeader', result);
    },
  },
};
</script>
