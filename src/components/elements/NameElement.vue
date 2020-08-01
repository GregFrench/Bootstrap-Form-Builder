<template>
  <div>
    <Label
      :value="field.label"
      :index="index"
    />
    <div class="row">
      <div
        v-for="(subfield, index) in activeSubFields(field.subfields)"
        class="col"
        :key="index"
      >
        <input
          type="text"
          :name="subfield.name"
          class="form-control"
          :placeholder="subfield.placeholder">
        <span class="help-block">{{subfield.label}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Label from './properties/Label.vue';

export default {
  props: ['field', 'index'],
  methods: {
    activeSubFields(subfields) {
      return subfields.filter((subfield) => subfield.active === 1);
    },
  },
  components: {
    Label,
  },
};
</script>
