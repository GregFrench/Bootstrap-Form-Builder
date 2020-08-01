<template>
  <div>
    <Label
      :value="field.label"
      :index="index"
    />

    <div
      v-for="(option, index) in splitStringByLine(field.options)"
      class="form-check"
      :key="index"
    >
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" value="">{{option}}
      </label>
    </div>
  </div>
</template>

<script>
import Label from './properties/Label.vue';

export default {
  props: ['field', 'index'],
  methods: {
    splitStringByLine(str) {
      return str.split('\n');
    },
  },
  components: {
    Label,
  },
};
</script>
