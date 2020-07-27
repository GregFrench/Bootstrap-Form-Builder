export default {
  updateLabel(store, e, index) {
    store.commit('updateField', {
      index,
      data: {
        label: e.target.innerText,
      },
    });
  },
};
