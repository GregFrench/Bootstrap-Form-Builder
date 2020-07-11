<template>
  <div class="form-group">
    <label>Duplicate Question</label>
    <div class="radio-wrapper">
      <label class="radio-inline single-button">
        <input type="radio" name="optradio" v-on:click="duplicate()">+ Duplicate
      </label>
      <small
        class="form-text text-muted"
      >Duplicate this question with all saved settings.
      </small>
    </div>
  </div>
</template>
