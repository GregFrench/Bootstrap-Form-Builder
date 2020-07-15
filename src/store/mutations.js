export default {
  addFieldElement(state, payload) {
    state.fields.splice(payload.index, 0, payload.element);
  },
  resetIsFocused(state) {
    state.fields.map((field) => {
      const theField = field;
      theField.isFocused = false;

      return theField;
    });
  },
  toggleElementsSidebar(state, payload) {
    state.showElementsSidebar = payload.state;
  },
  togglePropertiesSidebar(state, payload) {
    state.showPropertiesSidebar = payload.state;
  },
  updateActiveIndex(state, index) {
    state.activeIndex = index;
  },
  updateField(state, payload) {
    state.fields[state.activeIndex][payload.field] = payload.value;
  },
  updateFields(state, payload) {
    state.fields = payload.fields;
  },
  updateFieldElement(state, payload) {
    state.fields.splice(payload.index, 1, { ...state.fields[payload.index], ...payload.data });
  },
  updateFieldIsFocused(state, payload) {
    state.fields[payload.index].isFocused = payload.visible;
  },
  updateFieldLabel(state, label) {
    state.fields[state.activeIndex].label = label;
  },
  updateFieldSubHeader(state, payload) {
    state.fields[payload.index].subheader = payload.value;
  },
  updateFieldTagname(state, payload) {
    state.fields[payload.index].tagname = payload.tagname;
  },
  updateFieldTextAlign(state, value) {
    state.fields[state.activeIndex].textalign = value;
  },
};
