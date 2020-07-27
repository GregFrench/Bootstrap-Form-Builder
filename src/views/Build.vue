<template>
  <div>
    <Header />
    <Nav />
    <AppHeader></AppHeader>

    <div class="content-container build-container build-body">
      <div v-on:click="openElementsSidebar()" v-if="!showElementsSidebar" class="add-form">
        <div class="add-form-text">
          Add Form Element
        </div>
        <div class="circle-normal"><span class="fas fa-plus"></span></div>

        <div class="circle-ripple circle-ripple-1"></div>
        <div class="circle-ripple circle-ripple-2"></div>
      </div>

      <ElementsSidebar v-bind:showElementsSidebar="showElementsSidebar" />

      <div class="sortable-container">
        <div v-bind:class="{ 'sortable-border': fields.length === 0 }" class="sortable">
          <div
            :id="'list-' + index"
            v-on:click="elementFocus(index)"
            v-bind:class="{ 'focused-element': field.isFocused === true }"
            tabindex="0"
            class="form-group form-element-container"
            v-for="(field, index) in fields"
            :key="field.id"
            ref="element"
          >
          <div v-bind:class="{ hide: field.isFocused === false }" class="action-circles">
            <div v-on:click="editElementProperties()" class="action-circle properties-circle">
              <span class="fas fa-cog properties-cog"></span>
              <span class="properties-text">Properties</span>
            </div>
            <div v-on:click="deleteElement(index)" class="action-circle delete-circle">
              <span class="fas fa-trash-alt delete-trash"></span>
              <span class="delete-text">Remove</span>
            </div>
          </div>

          <HeaderElement
            v-if="field.type === 'header'"
            v-bind:class="field.textalign"
            v-bind:field="field"
            v-bind:index="index"
          ></HeaderElement>

          <NameElement
            v-if="field.type === 'name'"
            v-bind:field="field"
          ></NameElement>

          <InputElement
            v-if="field.type === 'text'"
            v-bind:field="field"
          ></InputElement>

          <EmailElement
            v-if="field.type === 'email'"
            v-bind:field="field"
            v-bind:index="index"
            ></EmailElement>

          <AddressElement
            v-if="field.type === 'address'"
            v-bind:field="field"
          ></AddressElement>

          <TextareaElement
            v-if="field.type === 'textarea'"
            v-bind:field="field"
          ></TextareaElement>

          <CheckboxesElement
            v-if="field.type === 'checkboxes'"
            v-bind:field="field"
          ></CheckboxesElement>

          <RadioButtonsElement
            v-if="field.type === 'radio_buttons'"
            v-bind:field="field"
          ></RadioButtonsElement>

          <SelectElement
            v-if="field.type === 'select'"
            v-bind:field="field"
          ></SelectElement>

              <div v-if="field.visibility === 'hidden'" class="element-not-visible">
                <span class="glyphicon glyphicon-exclamation-sign"></span>
                This field is hidden and will not be seen on the form.
              </div>
            </div>
          </div>
        </div>

      <PropertiesSidebar v-bind:showPropertiesSidebar="showPropertiesSidebar" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import AppHeader from '../components/AppHeader.vue';
import ElementsSidebar from '../components/ElementsSidebar.vue';
import Header from '../components/Header.vue';
import Nav from '../components/Nav.vue';
import PropertiesSidebar from '../components/PropertiesSidebar.vue';

// elements
import AddressElement from '../components/elements/AddressElement.vue';
import CheckboxesElement from '../components/elements/CheckboxesElement.vue';
import EmailElement from '../components/elements/EmailElement.vue';
import HeaderElement from '../components/elements/HeaderElement.vue';
import InputElement from '../components/elements/InputElement.vue';
import NameElement from '../components/elements/NameElement.vue';
import RadioButtonsElement from '../components/elements/RadioButtonsElement.vue';
import SelectElement from '../components/elements/SelectElement.vue';
import TextareaElement from '../components/elements/TextareaElement.vue';

import elements from '../elements';

import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/sortable';

export default {
  computed: {
    fields() {
      return this.$store.state.fields;
    },
    showElementsSidebar() {
      return this.$store.state.showElementsSidebar;
    },
    showPropertiesSidebar() {
      return this.$store.state.showPropertiesSidebar;
    },
  },
  data() {
    return {
      hasFields: false,
      middleName: null,
      prevIndex: null,
      // delete field by deleting element from page, array, and db
      deleteElement(index) {
        this.fields.splice(index, 1);
      },
      editElementProperties() {
        this.$store.commit('toggleElementsSidebar', {
          state: false,
        });

        this.$store.commit('togglePropertiesSidebar', {
          state: true,
        });
      },
      elementFocus(index) {
        if (this.fields[index] !== undefined) {
          this.$store.commit('updateActiveIndex', index);

          this.$store.commit('resetIsFocused', {});
          this.$store.commit('updateFieldIsFocused', { index, visible: true });

          // this.$nextTick(() => this.$refs.element.focus());
          // window.getSelection().removeAllRanges();
        }
      },
      receiveElement(element, newIndex) {
        this.$store.commit('addFieldElement', {
          index: newIndex,
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
            order_rank: newIndex,
          },
        });
      },
      openElementsSidebar() {
        this.$store.commit('toggleElementsSidebar', {
          state: true,
        });
      },
    };
  },
  mounted() {
    const that = this;

    $('body').click((evt) => {
      if (evt.target.className === 'form-element-container'
                    || evt.target.className === 'element-properties') {
        return;
      }

      // For descendants of "form-element-container" being clicked,
      // remove this check if you do not want to put constraint on descendants.
      if ($(evt.target).closest('.form-element-container').length
                    || $(evt.target).closest('.element-properties').length) {
        return;
      }

      // Do processing of click event here for every element except
      // with classname 'form-element-container', 'show-embed', and 'modal'.
      if ($(evt.target).closest('.show-embed').length
                    || $(evt.target).closest('.modal').length) {
        return;
      }

      that.$store.commit('resetIsFocused', {});

      that.$store.commit('togglePropertiesSidebar', {
        state: false,
      });
    });

    function setHeight() {
      let height = $(window).height();
      const offset = $('.sortable-container').offset().top;

      height -= offset;
      $('.sortable-container').css({ height });
      $('.form-elements').css({ height });
      $('.element-properties').css({ height });
    }

    setHeight();

    $(window).resize(() => {
      setHeight();
    });

    $('.element-container').draggable({
      opacity: 0.7,
      helper: 'clone',
      connectToSortable: '.sortable',
    });

    $('.sortable').sortable({
      axis: 'y',
      cancel: '.editable',
      start(e, ui) {
        // creates a temporary attribute on the element with the old index
        $(this).attr('data-previndex', ui.item.index());
      },
      receive(event, ui) {
        if (ui.item.attr('id')) {
          const newIndex = parseInt($(this).data('ui-sortable').currentItem.index(), 10);
          const element = $.extend(true, {}, elements.find((el) => el.name === ui.item.attr('id')));

          $(this).removeAttr('data-previndex');
          $(ui.helper).replaceWith('');

          that.receiveElement(element, newIndex);
          that.elementFocus(newIndex);

          that.prevIndex = newIndex;
        }
      },
      /* update(event, ui) {
        if (ui.item.index() !== -1) {
          const newIndex = ui.item.index();
          const oldIndex = parseInt($(this).attr('data-previndex'), 10);

          $(this).removeAttr('data-previndex');
          $(ui.helper).replaceWith('');

          that.fields.splice(newIndex, 0, that.fields.splice(oldIndex, 1)[0]);
          that.$store.commit('updateFields', { fields: that.fields });

          that.elementFocus(newIndex);
        }
      }, */
    });
  },
  components: {
    AddressElement,
    AppHeader,
    CheckboxesElement,
    ElementsSidebar,
    EmailElement,
    Header,
    HeaderElement,
    InputElement,
    NameElement,
    Nav,
    PropertiesSidebar,
    RadioButtonsElement,
    SelectElement,
    TextareaElement,
  },
};
</script>
