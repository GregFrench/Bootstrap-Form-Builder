<template>
  <div v-bind:class="{ 'form-elements-show': showElementsSidebar === true }" class="form-elements">
    <div class="element-main-header">Form Elements
      <span
        v-on:click="closeSidebar()"
        class="fas fa-times float-right form-elements-remove"
      ></span>
    </div>

    <div :id="element.id"
      class="element-container"
      v-for="(element, id) in elements"
      v-bind:key="id"
      v-on:click="addElement(element.name)"
    >
      <div v-if="element.icon !== undefined" class="element-icon">
        <i class="fas" :class="element.icon"></i>
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
    elements() {
      return elements;
    },
    fields() {
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
          index: this.fields.length,
          element: {
            id: this.fields.length,
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
            order_rank: this.fields.length,
          },
        });
      },
    };
  },
};
</script>
