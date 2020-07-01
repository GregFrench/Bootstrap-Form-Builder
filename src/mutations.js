export default {
    updateFields(state, payload) {
        state.fields = payload.fields;
    },
    updateHeader(state, payload) {
        state.fields[payload.index] = payload.data;
    },
    updateTagname(state, payload) {
        state.fields[payload.index].tagname = payload.tagname;
    }
};