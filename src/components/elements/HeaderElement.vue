<template>
<div v-bind:class="{
    h1: field.tagname === 'h1' || field.tagname === undefined,
    h2: field.tagname === 'h2',
    h3: field.tagname === 'h3',
    h4: field.tagname === 'h4',
    h5: field.tagname === 'h5',
    h6: field.tagname === 'h6'
}">
    <span
        class="editable editable-label"
        contenteditable="true"
        v-on:focusout="updateLabel($event, index)"
    >{{field.label === undefined ? custom.label : field.label}}</span><br />
    <small class="editable"
        data-text="Type a subheader"
        contenteditable="true"
        ref="subheader"
        v-on:focusout="updateSubHeader($event, index)"
    >{{field.subheader}}</small>
</div>
</template>

<script>
import $ from 'jquery';
export default {
    props: ["field", "index", "fields"],
    data: function () {
        return {
          message: 'Type a subheader',
            custom: {
                name: "header",
                label: "Header",
                subheader: "",
                tagname: "h1",
                textalign: "text-left",
                subfields: []
            }
    }
  },
  methods: {
      updateLabel: function(e, index) {
          this.$store.commit("updateFieldLabel", {index: index, label: e.target.innerHTML});
      },
      updateSubHeader: function(e, index) {
        let text = e.target.innerHTML
        this.$store.commit("updateFieldSubHeader", {index: index, subheader: text});
        this.$refs.subheader.innerHTML = text;
      }
  },
  mounted() {
    //if (field.name === undefined) {
      this.$store.commit('updateFieldElement', {
          index: this.index,
          data: this.custom
      });
    //}
  }
}

</script>
