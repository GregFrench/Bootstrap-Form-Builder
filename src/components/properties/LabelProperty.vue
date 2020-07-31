<template>
  <div class="form-group">
    <label>{{text}}</label>
    <input
      type="text"
      class="form-control label-property"
      :value="label"
      v-on:input="updateLabel($event, index)"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex';
import methods from '../../store/methods';

export default {
  props: ['index', 'text'],
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
  methods,
};
</script>
