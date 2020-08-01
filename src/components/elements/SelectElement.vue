<template>
<div>
  <Label
    :value="field.label"
    :index="index"
  />
  <select class="form-control">
    <option
      v-for="(option, index) in splitStringByLine(field.options)"
      :key="index"
    >
      {{option}}
    </option>
  </select>
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
