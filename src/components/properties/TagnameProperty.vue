<template>
  <div class="form-group">
      <label>Heading Size</label>
      <div class="radio-wrapper">
          <label v-bind:class="{ 'label-active': tagName === null || tagName === 'h1' }" class="radio-inline">
              <input type="radio" name="optradio" v-model="tagName" value="h1">H1
          </label>
          <label v-bind:class="{ 'label-active': tagName === 'h2' }" class="radio-inline">
              <input type="radio" name="optradio" v-model="tagName" value="h2">H2
          </label>
          <label v-bind:class="{ 'label-active': tagName === 'h3' }" class="radio-inline">
              <input type="radio" name="optradio" v-model="tagName" value="h3">H3
          </label>
          <label v-bind:class="{ 'label-active': tagName === 'h4' }" class="radio-inline">
              <input type="radio" name="optradio" v-model="tagName" value="h4">H4
          </label>
          <label v-bind:class="{ 'label-active': tagName === 'h5' }" class="radio-inline">
              <input type="radio" name="optradio" v-model="tagName" value="h5">H5
          </label>
          <label v-bind:class="{ 'label-active': tagName === 'h6' }" class="radio-inline">
              <input type="radio" name="optradio" v-model="tagName" value="h6">H6
          </label>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        tagName: {
            get: function () {
                return this.$store.state.fields[this.$store.state.activeIndex].tagname;
            },
            set: function (tagname) {
                this.$store.commit('updateFieldTagname', {
                    index: this.$store.state.activeIndex,
                    tagname: tagname
                });
            }
        }
    }
}
</script>
