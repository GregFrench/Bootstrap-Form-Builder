<template>
  <div>
    <div
      class="row"
      v-for="(subfield, sub_index) in activeSubFields(fieldsArr[activeIndex].subfields)"
      :key="sub_index"
    >
      <div class="col-sm-6">{{subfield.label_display}}</div>
      <div class="col-sm-6 col-padding">
        <input type="text" class="form-control" v-model="subfield.label">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeIndex() {
      return this.$store.state.activeIndex;
    },
    fieldsArr() {
      return this.$store.state.fields;
    },
  },
  data() {
    return {
      activeSubFields(subfields) {
        return subfields.filter((subfield) => subfield.active === 1);
      },
    };
  },
};
</script>
