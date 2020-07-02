<template>
<div>
    <h1 v-if="field.tagname === 'h1' || field.tagname === undefined">
        <span
            class="editable editable-label"
            contenteditable="true"
            v-on:focusout="updateLabel($event, index)"
        >{{field.label === undefined ? custom.label : field.label}}</span><br />
        <!--<small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '' && field.subheader !== undefined)" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader($event, index)">{{field.subheader}}</small>-->
        <!--<small placeholder="Type a subheader" data-text="Enter text here" class="editable editable-label" contenteditable="true" v-on:focusout="updateSubHeader($event, index)"></small>-->
        <small class="editable">
          <!--<contenteditable tag="div" :contenteditable="true" v-model="message" :noNL="true" v-on:focusout="updateSubHeader($event, index)" />-->
          <div style="height: 15px; min-width: 100px;" data-text="Type a subheader" contenteditable="true"></div>
        </small>
    </h1>


    <h2 v-if="field.tagname === 'h2'">
        <span
            class="editable editable-label"
            contenteditable="true"
            v-on:focusout="updateLabel($event, index)"
        >{{field.label}}</span><br />

        <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '' && field.subheader !== undefined)" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader($event, index)">{{field.subheader}}</small>
    </h2>
    <h3 v-if="field.tagname === 'h3'">
        <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel($event, index)">{{field.label}}</span><br />
        <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader($event, index)">{{field.subheader}}</small>
    </h3>
  <h4 v-if="field.tagname === 'h4'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel($event, index)">{{field.label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader($event, index)">{{field.subheader}}</small>
  </h4>
  <h5 v-if="field.tagname === 'h5'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel($event, index)">{{field.label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader($event, index)">{{field.subheader}}</small>
  </h5>
  <h6 v-if="field.tagname === 'h6'">
    <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel($event, index)">{{field.label}}</span><br />
    <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader($event, index)">{{field.subheader}}</small>
  </h6>
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
                tagname: "h1",
                textalign: "text-left",
                subfields: []
            },
            fieldsRef: this.fields
    }
  },
  methods: {
      updateLabel: function(e, index) {
          this.fieldsRef[index].label = e.target.innerHTML;
          this.$store.commit("updateFields", {fields: this.fieldsRef});
      },
      updateSubHeader: function(e, index) {
        console.log(e.target.innerHTML)
          this.fieldsRef[index].subheader = e.target.innerHTML;
          this.$store.commit("updateFields", {fields: this.fieldsRef});

          //var text = $(".editable-sub-" + index).eq(0).text();

          //this.fields[index].subheader = text;

          // reupdate text to deal with bug of vue being updated
          // and rendering text twice
          //$(".editable-sub-" + index).eq(0).text(text);
      }
  },
  mounted() {
    console.log('header mounted')
    //if (field.name === undefined) {
      this.$store.commit('updateFieldElement', {
          index: this.index,
          data: this.custom
      });
    //}
  }
}

</script>
