<template>
  <div class="form-group">
    <label>{{text}}</label>
    <input
      type="text"
      class="form-control input-label"
      :value="label"
      v-on:input="updateLabel($event)"
    >
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
      this.$store.commit('updateField', {
        index: this.$store.state.activeIndex,
        data: {
          label: e.target.value,
        },
      });
    },
  },
};
</script>
