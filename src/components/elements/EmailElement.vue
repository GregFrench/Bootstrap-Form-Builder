<template>
  <div>
    <Label
      :value="field.label"
      :index="index"
    />
    <input type="email" name="email" class="form-control" :placeholder="field.placeholder">
  </div>
</template>

<script>
import Label from './properties/Label.vue';

export default {
  props: ['field', 'index', 'fields'],
  components: {
    Label,
  },
  data() {
    return { fieldsRef: this.fields };
  },
};
</script>
