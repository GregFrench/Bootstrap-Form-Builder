<template>
  <div>
    <Label
      :value="field.label"
      :index="index"
    />
    <input type="file" class="form-control-file border">
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
