<template>
<div>
 <Label
    :value="field.label"
    :index="index"
  />
  <textarea class="form-control"></textarea>
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
