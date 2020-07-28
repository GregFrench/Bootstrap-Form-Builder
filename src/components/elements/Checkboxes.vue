<template>
  <div>
    <strong>
      <label class="editable" contenteditable="true">{{field.label}}</label>
    </strong>

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
export default {
  props: ['field'],
  methods: {
    splitStringByLine(str) {
      return str.split('\n');
    },
  },
};
</script>
