export default {
    state: {
        count: 0,
        fields: []
    },
    mutations: {
        updateFields(state, payload) {
            state.fields = payload.fields
        },
        updateTagname(state, payload) {
            state.fields[payload.index].tagname = payload.tagname;
        }
    }
}