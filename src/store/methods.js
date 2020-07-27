export default {
  updateLabel(e, index) {
    let label = '';

    if (e.target.value !== undefined) {
      label = e.target.value;
    } else {
      label = e.target.innerText;
    }

    this.$store.commit('updateField', {
      index,
      data: {
        label,
      },
    });
  },
};
