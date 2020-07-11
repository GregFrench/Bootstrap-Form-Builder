<template>
  <div v-bind:class="{ 'form-elements-show': showElementsSidebar === true }" class="form-elements">
    <div class="element-main-header">Form Elements
      <span
        v-on:click="closeSidebar()"
        class="glyphicon glyphicon-remove pull-right form-elements-remove"
      ></span>
    </div>

    <div id="header" class="element-container" v-on:click="test()">
      <div class="element-icon">
        <span class="glyphicon glyphicon-header"></span>
      </div>
      <div class="element-text">
        Header
      </div>
    </div>
    <div id="name" class="element-container">
      <div class="element-icon">
        <span class="glyphicon glyphicon-user"></span>
      </div>
      <div class="element-text">
        Full Name
      </div>
    </div>
    <div id="email" class="element-container">
      <div class="element-icon">
        <span class="glyphicon glyphicon-envelope"></span>
      </div>
      <div class="element-text">
        Email
      </div>
    </div>
    <div id="address" class="element-container">
      <div class="element-icon">
        <span class="glyphicon glyphicon-map-marker"></span>
      </div>
      <div class="element-text">
        Address
      </div>
    </div>
    <div id="input" class="element-container">
      <div class="element-text">
        Input
      </div>
    </div>
    <div id="textarea" class="element-container">
      <div class="element-text">
        Textarea
      </div>
    </div>
    <div id="checkboxes" class="element-container">
      <div class="element-text">
        Checkboxes
      </div>
    </div>
    <div id="radio_buttons" class="element-container">
      <div class="element-text">
        Radio Buttons
      </div>
    </div>
    <div id="select" class="element-container">
      <div class="element-text">
        Select
      </div>
    </div>
  </div>
</template>

<script>
import elements from '../elements';

export default {
  props: ['showElementsSidebar'],
  computed: {
    // change name to 'fields' after switch
    fieldsArr() {
      return this.$store.state.fields;
    },
  },
  data() {
    return {
      closeSidebar() {
        this.$store.commit('toggleElementsSidebar', {
          state: false,
        });
      },
      test() {
        const element = elements.header;

        this.$store.commit('addFieldElement', {
          index: this.fieldsArr.length - 1,
          element: {
            id: this.fieldsArr.length,
            name: element.name,
            type: element.type,
            label: element.label,
            options: element.options,
            subfields: element.subfields,
            subheader: element.subheader,
            subheader_update: true,
            placeholder: element.placeholder,
            tagname: element.tagname,
            textalign: element.textalign,
            visibility: element.visibility,
            isFocused: true,
            order_rank: this.fieldsArr.length - 1,
          },
        });
      },
    };
  },
};
</script>
