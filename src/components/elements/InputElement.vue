<template>
  <div>
    <Label
      :value="field.label"
      :index="index"
    />
    <input type="text" name="input" class="form-control">
  </div>
</template>

<script>
import Label from './properties/Label.vue';

export default {
  props: ['field', 'index'],
  components: {
    Label,
  },
};
</script>
