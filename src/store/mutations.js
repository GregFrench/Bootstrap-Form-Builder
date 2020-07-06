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
  updateFields(state, payload) {
    state.fields = payload.fields;
  },
  updateFieldElement(state, payload) {
    state.fields.splice(payload.index, 1, { ...state.fields[payload.index], ...payload.data });
  },
  updateFieldIsFocused(state, payload) {
    state.fields[payload.index].isFocused = payload.visible;
  },
  updateFieldLabel(state, payload) {
    state.fields[payload.index].label = payload.label;
  },
  updateFieldSubHeader(state, payload) {
    state.fields[payload.index].subheader = payload.subheader;
  },
  updateFieldTagname(state, payload) {
    state.fields[payload.index].tagname = payload.tagname;
  },
};
