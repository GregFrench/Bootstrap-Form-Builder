<template>
  <div class="form-group">
    <label>{{text}}</label>
    <input type="text" class="form-control" :value="label" @input="updateLabel">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['text'],
  computed: {
    ...mapState({
      label: (state) => {
        let result = '';

        if (state.fields.length > 0) {
          result = state.fields[state.activeIndex].label;
        }

        return result;
      },
    }),
  },
  methods: {
    updateLabel(e) {
      this.$store.commit('updateFieldLabel', e.target.value);
    },
  },
};
</script>
