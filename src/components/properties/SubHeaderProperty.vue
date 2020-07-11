<template>
  <div class="form-group">
    <label>Sub-Heading Text</label>
    <input type="text" class="form-control" :value="subHeader" @input="updateSubHeader">
    <small class="form-text text-muted">Small text below the heading.</small>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      subHeader: (state) => {
        let result = '';

        if (state.fields.length > 0) {
          result = state.fields[state.activeIndex].subheader;
        }

        return result;
      },
    }),
  },
  methods: {
    updateSubHeader(e) {
      this.$store.commit('updateFieldSubHeader', e.target.value);
    },
  },
};
</script>
