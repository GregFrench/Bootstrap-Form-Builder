<template>
  <label
    v-bind:class="{
    'label-active': textAlign === classLabel
    }"
    class="radio-inline"
  >
    <input
      type="radio"
      name="optradio"
      v-model="textAlign"
      v-bind:value="classLabel"
    >{{text}}
  </label>
</template>

<script>
export default {
  props: ['text', 'classLabel'],
  computed: {
    textAlign: {
      get() {
        const state = { ...this.$store.state };
        let result = '';

        if (state.fields.length > 0) {
          result = state.fields[state.activeIndex].textalign;
        }

        return result;
      },
      set(value) {
        this.$store.commit('updateFieldTextAlign', value);
      },
    },
  },
};
</script>
