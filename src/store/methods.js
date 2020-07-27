export default {
  updateLabel(e, index) {
    this.$store.commit('updateField', {
      index,
      data: {
        label: e.target.innerText,
      },
    });
  },
};
