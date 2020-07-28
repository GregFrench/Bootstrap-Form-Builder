<template>
  <div
    v-bind:class="{ 'element-properties-show': showPropertiesSidebar === true }"
    class="element-properties"
    >
      <div class="element-main-header">
        <span v-if="fieldType === 'header'">Header</span>
        <span v-if="fieldType === 'name'">Full Name</span>
        <span v-if="fieldType === 'address'">Address</span> Properties
          <span
            v-on:click="closeSidebar()"
            class="glyphicon glyphicon-remove pull-right form-elements-remove"
          ></span>
        </div>
        <div class="element-property">
          <LabelProperty
            :index="index"
            :text="fieldType === 'header' ? 'Heading Text' : 'Label Text'"
          />
        </div>
        <div v-if="fieldType === 'header'" class="element-property">
          <SubHeaderProperty />
        </div>
        <div v-if="fieldType === 'header'" class="element-property">
          <TagnameProperty />
        </div>
        <div v-if="fieldType === 'header'" class="element-property">
          <TextAlignmentProperty />
        </div>
        <div
          v-if="fieldType === 'checkboxes'
          || fieldType === 'radio_buttons'
          || fieldType === 'select'"
          class="element-property"
        >
          <OptionsProperty />
        </div>
        <div v-if="fieldType === 'name'" class="element-property">
          <NameProperty />
        </div>
        <div v-if="fieldType === 'address'" class="element-property">
          <AddressProperty />
        </div>
        <div class="element-property">
          <DuplicateQuestionProperty />
        </div>
    </div>
</template>

<script>
import AddressProperty from './properties/AddressProperty.vue';
import DuplicateQuestionProperty from './properties/DuplicateQuestionProperty.vue';
import LabelProperty from './properties/LabelProperty.vue';
import NameProperty from './properties/NameProperty.vue';
import OptionsProperty from './properties/OptionsProperty.vue';
import SubHeaderProperty from './properties/SubHeaderProperty.vue';
import TagnameProperty from './properties/TagnameProperty.vue';
import TextAlignmentProperty from './properties/TextAlignmentProperty.vue';

export default {
  props: ['showPropertiesSidebar'],
  components: {
    AddressProperty,
    DuplicateQuestionProperty,
    LabelProperty,
    NameProperty,
    OptionsProperty,
    SubHeaderProperty,
    TagnameProperty,
    TextAlignmentProperty,
  },
  computed: {
    fieldType() {
      const state = { ...this.$store.state };

      return state.fields.length > 0 ? state.fields[state.activeIndex].type : '';
    },
    index() {
      return this.$store.state.activeIndex;
    },
  },
  methods: {
    closeSidebar() {
      this.$store.commit('togglePropertiesSidebar', {
        state: false,
      });
    },
  },
};
</script>
