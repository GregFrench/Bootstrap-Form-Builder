<template>
  <div v-bind:class="{ 'form-elements-show': showElementsSidebar === true }" class="form-elements">
    <div class="element-main-header">Form Elements
      <span
        v-on:click="closeSidebar()"
        class="glyphicon glyphicon-remove pull-right form-elements-remove"
      ></span>
    </div>

    <div :id="element.id"
      class="element-container"
      v-for="(element, id) in elements"
      v-bind:key="id"
      v-on:click="addElement(element.name)"
    >
      <div v-if="element.icon !== undefined" class="element-icon">
        <span class="glyphicon" :class="element.icon"></span>
      </div>
      <div class="element-text">
        {{element.text.toUpperCase()}}
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
    elements() {
      return elements;
    },
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
      addElement(name) {
        const element = elements.find((el) => el.name === name);

        this.$store.commit('addFieldElement', {
          index: this.fieldsArr.length,
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
            order_rank: this.fieldsArr.length,
          },
        });
      },
    };
  },
};
</script>
