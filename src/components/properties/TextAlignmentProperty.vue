<template>
  <div class="form-group">
    <label>Text Alignment</label>
    <div class="radio-wrapper">
      <TextAlignmentButton text="Left" classLabel="text-left" />
      <TextAlignmentButton text="Center" classLabel="text-center" />
      <TextAlignmentButton text="Right" classLabel="text-right" />
    </div>
  </div>
</template>

<script>
import TextAlignmentButton from './helper/TextAlignmentButton.vue';

export default {
  components: {
    TextAlignmentButton,
  },
};
</script>
