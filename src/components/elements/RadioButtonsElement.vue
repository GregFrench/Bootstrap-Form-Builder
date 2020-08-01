<template>
<div>
  <Label
      :value="field.label"
      :index="index"
    />
  <div class="form-element">
    <div v-for="(option, index) in splitStringByLine(field.options)" class="radio" :key="index">
      <label><input type="radio" :name="option">{{option}}</label>
    </div>
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
