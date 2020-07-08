<template>
<div>
    <AppHeader></AppHeader>

<div class="content-container build-container build-body">
  <div v-on:click="openElementsSidebar()" v-if="!showElementsSidebar" class="add-form">
    <div class="add-form-text">
      Add Form Element
    </div>
    <div class="circle-normal"><span class="glyphicon glyphicon-plus"></span></div>

    <div class="circle-ripple circle-ripple-1"></div>
    <div class="circle-ripple circle-ripple-2"></div>
  </div>

  <ElementsSidebar v-bind:showElementsSidebar="showElementsSidebar" />

  <div class="sortable-container">
    <div v-bind:class="{ 'sortable-border': fieldsArr.length === 0 }" class="sortable">
      <div
        :id="'list-' + index"
        v-on:click="elementFocus(index)"
        v-bind:class="{ 'focused-element': field.isFocused === true }"
        tabindex="0"
        class="form-group form-element-container"
        v-for="(field, index) in fieldsArr"
        :key="field.id"
        ref="element"
      >
      <div v-bind:class="{ hide: field.isFocused === false }" class="action-circles">

      <div v-on:click="editElementProperties()" class="action-circle properties-circle">
        <span class="glyphicon glyphicon-cog properties-cog"></span>
        <span class="properties-text">Properties</span>
      </div>
      <div v-on:click="deleteElement(index)" class="action-circle delete-circle">
        <span class="glyphicon glyphicon-trash delete-trash"></span>
        <span class="delete-text">Remove</span>
      </div>
    </div>

    <HeaderElement
      v-if="field.type === 'header'"
      v-bind:class="field.textalign"
      v-bind:field="field"
      v-bind:index="index"
      v-bind:isFocused="field.isFocused"
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
                  >
                </SelectElement>

                <div v-if="field.visibility === 'hidden'" class="element-not-visible">
                    <span class="glyphicon glyphicon-exclamation-sign"></span>
                    This field is hidden and will not be seen on the form.
                </div>
            </div>
        </div>
    </div>

  <div
    v-bind:class="{ 'element-properties-show': showElementProperties === true }"
    class="element-properties">
    <div class="element-main-header">
        <span v-if="type === 'header'">Header</span>
        <span v-if="type === 'name'">Full Name</span>
        <span v-if="type === 'address'">Address</span> Properties
            <span
              v-on:click="removeElementProperties()"
              class="glyphicon glyphicon-remove pull-right form-elements-remove"
            ></span>
        </div>
        <div v-if="type === 'header'" class="element-property">
            <div class="form-group">
                <label>Heading Text</label>
                <input type="text" class="form-control" v-on:keyup="editLabel()" v-model="label">
            </div>
        </div>
        <div v-if="type !== 'header'" class="element-property">
            <div class="form-group">
                <label>Label Text</label>
                <input type="text" class="form-control" v-on:keyup="editLabel()" v-model="label">
            </div>
        </div>
        <div v-if="type === 'header'" class="element-property">
            <div class="form-group">
                <label>Sub-Heading Text</label>
                <input
                  type="text"
                  class="form-control"
                  v-on:keyup="editSubHeader()"
                  v-model="subheader">
                <small class="form-text text-muted">Small text below the heading.</small>
            </div>
        </div>
        <div v-if="type === 'header'" class="element-property">
            <TagnameProperty />
        </div>
        <div v-if="type === 'header'" class="element-property">
            <div class="form-group">
                <label>Text Alignment</label>
                <div class="radio-wrapper">
                    <label
                      v-bind:class="{
                        'label-active': textalign === null || textalign === 'text-left'
                      }"
                      class="radio-inline">
                    <input
                      type="radio"
                      name="optradio"
                      v-on:click="editTextAlign('text-left')"
                      v-model="textalign"
                      value="text-left">Left
                    </label>
                    <label
                      v-bind:class="{
                        'label-active': textalign === 'text-center'
                      }"
                      class="radio-inline">
                    <input
                      v-on:click="editTextAlign('text-center')"
                      type="radio" name="optradio"
                      v-model="textalign"
                      value="text-center">Center
                    </label>
                    <label
                      v-bind:class="{
                        'label-active': textalign === 'text-right'
                      }"
                      class="radio-inline"
                    >
                    <input
                      v-on:click="editTextAlign('text-right')"
                      type="radio"
                      name="optradio"
                      v-model="textalign"
                      value="text-right"
                    >Right
                    </label>
                </div>
            </div>
        </div>
        <div
          v-if="type === 'checkboxes' || type === 'radio_buttons' || type === 'select'"
          class="element-property"
        >
            <div class="form-group">
                <label>Options</label>
                <textarea
                  class="form-control"
                  rows="5"
                  v-on:keyup="editOptions()"
                  v-model="options"
                ></textarea>
            </div>
        </div>
        <div class="element-property">
            <div class="form-group">
                <label>Duplicate Question</label>
                <div class="radio-wrapper">
                    <label class="radio-inline single-button">
                    <input type="radio" name="optradio" v-on:click="duplicate()">+ Duplicate
                    </label>
                    <small
                      class="form-text text-muted">
                      Duplicate this question with all saved settings.
                    </small>
                </div>
            </div>
        </div>
        <div v-if="type === 'name' && typeof fieldsArr[activeIndex] !== 'undefined'">
            <div class="element-property">
                <div
                  class="row"
                  v-for="(subfield, sub_index) in activeSubFields(fieldsArr[activeIndex].subfields)"
                  :key="sub_index"
      >
                    <div class="col-sm-6">{{subfield.label_display}}</div>
                    <div class="col-sm-6 col-padding">
                        <input type="text" class="form-control" v-model="subfield.label">
                    </div>
                </div>
            </div>

            <div
              v-for="(subfield, sub_index) in subfieldsNameToggle(subfields)"
              class="element-property"
              :key="sub_index"
            >
              <label v-if="subfield.type === 'middle_name'">Middle Name</label>
              <label v-if="subfield.type === 'prefix'">Prefix</label>
              <label v-if="subfield.type === 'suffix'">Suffix</label>
                <div>
                    <label class="switch">
                        <input
                          v-if="subfield.type === 'middle_name'"
                          type="checkbox"
                          v-on:click="nameToggle(2)"
                          v-model="subfield.active"
                        >
                        <input
                          v-if="subfield.type === 'prefix'"
                          type="checkbox"
                          v-on:click="nameToggle(0)"
                          v-model="subfield.active"
                        >
                        <input
                          v-if="subfield.type === 'suffix'"
                          type="checkbox"
                          v-on:click="nameToggle(4)"
                          v-model="subfield.active"
                        >

                        <div class="slider">
                            <div
                              class="switch-on"
                              v-bind:class="{
                                'switch-on-active': subfield.active === 1
                              }">
                                ON
                            </div>
                            <div
                              class="switch-off"
                              v-bind:class="{
                                'switch-off-active': subfield.active === 1
                              }">
                                OFF
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div v-if="type === 'address'">
            <div class="element-property">
                <div
                  class="row"
                  v-for="(subfield, sub_index) in activeSubFields(subfields)" :key="sub_index"
                >
                    <div class="col-sm-6">{{subfield.label_display}}</div>
                    <div class="col-sm-6 col-padding">
                        <input type="text" class="form-control" v-model="subfield.label">
                    </div>
                </div>
            </div>
            <div v-for="(subfield, index) in subfields" class="element-property" :key="index">
                <label>{{subfield.label_display}}</label>
                <div>
                    <label class="switch">
                        <input
                          type="checkbox"
                          v-on:click="addressToggle(index)"
                          v-model="subfield.active"
                        >

                        <div class="slider">
                            <div
                              class="switch-on"
                              v-bind:class="{
                                'switch-on-active': subfield.active === 1
                              }"
                            >
                                ON
                            </div>
                            <div
                              class="switch-off"
                              v-bind:class="{
                                'switch-off-active': subfield.active === 1
                              }"
                            >
                                OFF
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import $ from 'jquery';
import AppHeader from '../components/AppHeader.vue';
import ElementsSidebar from '../components/ElementsSidebar.vue';

import HeaderElement from '../components/elements/HeaderElement.vue';
import NameElement from '../components/elements/NameElement.vue';
import EmailElement from '../components/elements/EmailElement.vue';
import AddressElement from '../components/elements/AddressElement.vue';
import InputElement from '../components/elements/InputElement.vue';
import TextareaElement from '../components/elements/TextareaElement.vue';
import CheckboxesElement from '../components/elements/CheckboxesElement.vue';
import RadioButtonsElement from '../components/elements/RadioButtonsElement.vue';
import SelectElement from '../components/elements/SelectElement.vue';

import elements from '../elements';

// properties
import TagnameProperty from '../components/properties/TagnameProperty.vue';

import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/sortable';

export default {
  computed: {
    // change name to 'fields' after switch
    fieldsArr() {
      return this.$store.state.fields;
    },
    showElementsSidebar() {
      return this.$store.state.showElementsSidebar;
    },
  },
  data() {
    return {
      activeIndex: null,
      hasFields: false,
      label: null,
      middleName: null,
      options: '',
      prevIndex: null,
      showAddForm: true,
      showElementProperties: false,
      subfields: [],
      subheader: null,
      textalign: 'text-left',
      type: null,
      visibility: null,
      activeSubFields(subfields) {
        return subfields.filter((subfield) => subfield.active === 1);
      },
      activeIndexSubFields() {
        return this
          .fieldsArr[this.activeIndex]
          .subfields.filter((subfield) => subfield.active === 1);
      },
      addFormElements() {
        this.showAddForm = false;
        this.showElementProperties = false;
      },
      addressToggle(num) {
        if (this.fieldsArr[this.activeIndex].subfields[num].active === true) {
          this.fieldsArr[this.activeIndex].subfields[num].active = 1;
        } else {
          this.fieldsArr[this.activeIndex].subfields[num].active = 0;
        }
      },
      // delete field by deleting element from page, array, and db
      deleteElement(index) {
        this.fieldsArr.splice(index, 1);
      },
      duplicate() {
        this.receiveElement(
          JSON.parse(
            JSON.stringify(
              this.fieldsArr[this.activeIndex],
            ),
          ), this.activeIndex + 1,
        );

        this.elementFocus(this.activeIndex + 1);
      },
      editElementProperties() {
        this.showAddForm = true;
        this.showElementProperties = true;
      },
      editLabel() {
        // this.fieldsArr[this.activeIndex].label = this.label;
        this.$store.commit('updateFieldLabel', { index: this.activeIndex, label: this.label });
      },
      editOptions() {
        this.fieldsArr[this.activeIndex].options = this.options;
      },
      editSubHeader() {
        this.fieldsArr[this.activeIndex].subheader = this.subheader;
      },
      editTextAlign(textalign) {
        this.fieldsArr[this.activeIndex].textalign = textalign;
      },
      elementFocus(index) {
        if (this.fieldsArr[index] !== undefined) {
          this.activeIndex = index;
          this.label = this.fieldsArr[index].label;
          this.options = this.fieldsArr[index].options;
          this.type = this.fieldsArr[index].type;
          this.textalign = this.fieldsArr[index].textalign;
          this.subfields = this.fieldsArr[index].subfields;
          this.subheader = this.fieldsArr[index].subheader;
          this.visibility = this.fieldsArr[index].visibility;

          this.$store.commit('resetIsFocused', {});
          this.$store.commit('updateFieldIsFocused', { index, visible: true });

          // this.$nextTick(() => this.$refs.element.focus());
          // window.getSelection().removeAllRanges();
        }
      },
      nameToggle(num) {
        if (this.fieldsArr[this.activeIndex].subfields[num].active === true) {
          this.fieldsArr[this.activeIndex].subfields[num].active = 1;
        } else {
          this.fieldsArr[this.activeIndex].subfields[num].active = 0;
        }
      },
      receiveElement(element, newIndex) {
        this.$store.commit('addFieldElement', {
          index: newIndex,
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
            order_rank: newIndex,
          },
        });
      },
      removeElementProperties() {
        this.showElementProperties = false;
      },
      removeFormElements() {
        this.showAddForm = true;
      },
      openElementsSidebar() {
        this.$store.commit('toggleElementsSidebar', {
          state: true,
        });
      },
      subfieldsNameToggle(subfields) {
        return subfields.filter((subfield) => subfield.type === 'prefix'
                        || subfield.type === 'middle_name'
                        || subfield.type === 'suffix');
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

      that.showElementProperties = false;
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
          const element = $.extend(true, {}, elements[ui.item.attr('id')]);

          $(this).removeAttr('data-previndex');
          $(ui.helper).replaceWith('');

          that.receiveElement(element, newIndex);
          that.elementFocus(newIndex);

          that.prevIndex = newIndex;
        }
      },
      update(event, ui) {
        if (ui.item.index() !== -1) {
          const newIndex = ui.item.index();
          const oldIndex = parseInt($(this).attr('data-previndex'), 10);

          $(this).removeAttr('data-previndex');
          $(ui.helper).replaceWith('');

          that.fieldsArr.splice(newIndex, 0, that.fieldsArr.splice(oldIndex, 1)[0]);
          that.$store.commit('updateFields', { fields: that.fields });

          that.elementFocus(newIndex);
        }
      },
    });
  },
  components: {
    AppHeader,
    ElementsSidebar,
    HeaderElement,
    NameElement,
    EmailElement,
    AddressElement,
    InputElement,
    TagnameProperty,
    TextareaElement,
    CheckboxesElement,
    RadioButtonsElement,
    SelectElement,
  },
};
</script>
