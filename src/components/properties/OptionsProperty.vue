<template>
<div class="form-group">
  <label>Options</label>
  <textarea
    class="form-control"
    rows="5"
    v-model="options"
  ></textarea>
</div>
</template>

<script>
export default {
  computed: {
    options: {
      get() {
        const state = { ...this.$store.state };

        return state.fields[state.activeIndex].options;
      },
      set(options) {
        this.$store.commit('updateOptions', options);
      },
    },
  },
};
</script>
