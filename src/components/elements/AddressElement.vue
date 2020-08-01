<template>
<div>
  <div class="form-row">
    <div class="col">
      <Label
        :value="field.label"
        :index="index"
      />
      <div v-if="field.subfields[0].active === 1" class="form-group">
        <input
          type="text"
          :name="field.subfields[0].name"
          class="form-control"
          :placeholder="field.subfields[0].placeholder"
        >

        <span class="help-block">{{field.subfields[0].label}}</span>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col">
      <div v-if="field.subfields[1].active === 1" class="form-group">

        <input
          type="text"
          :name="field.subfields[1].name"
          class="form-control"
          :placeholder="field.subfields[1].placeholder"
        >

        <span class="help-block">{{field.subfields[1].label}}</span>
      </div>
    </div>
  </div>
  <div v-if="field.subfields[2].active === 1 || field.subfields[3].active === 1" class="form-row">
      <div v-if="field.subfields[2].active === 1" class="col">
          <input
            type="text"
            :name="field.subfields[2].name"
            class="form-control"
            :placeholder="field.subfields[2].placeholder"
          >
          <span class="help-block">{{field.subfields[2].label}}</span>
      </div>
      <div v-if="field.subfields[3].active === 1" class="col">

        <input
          type="text"
          :name="field.subfields[3].name"
          class="form-control"
          :placeholder="field.subfields[3].placeholder"
        >

        <span class="help-block">{{field.subfields[3].label}}</span>
      </div>
  </div>
  <div v-if="field.subfields[4].active === 1 || field.subfields[5].active === 1" class="form-row">
      <div v-if="field.subfields[4].active === 1" class="col">

        <input
          type="text"
          :name="field.subfields[4].name"
          class="form-control"
          :placeholder="field.subfields[4].placeholder"
        >

          <span class="help-block">{{field.subfields[4].label}}</span>
      </div>
      <div v-if="field.subfields[5].active === 1" class="col">

          <select class="form-control" :name="field.subfields[5].name">
              <option value="">Country...</option>
          </select>

          <span class="help-block">{{field.subfields[5].label}}</span>
      </div>
  </div>
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
