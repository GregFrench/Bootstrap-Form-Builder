import { mutations } from '../../src/store';

// destructure assign 'mutations'
const { deleteField, updateField } = mutations;

describe('mutations', () => {
  it('deleteField removes a second field object from the array of three fields', () => {
    // mock state
    const state = {
      fields: [{
        name: 'obj1',
      }, {
        name: 'obj2',
      }, {
        name: 'obj3',
      }],
    };

    // apply mutation
    deleteField(state, 1);

    // assert result
    expect(state.fields).toStrictEqual([{
      name: 'obj1',
    }, {
      name: 'obj3',
    }]);
  });

  it('deleteField removes the first field object from the array of one field', () => {
    // mock state
    const state = {
      fields: [{
        name: 'obj1',
      }],
    };

    // apply mutation
    deleteField(state, 0);

    // assert result
    expect(state.fields).toStrictEqual([]);
  });

  it('updateField updates the first field object name in the array', () => {
    // mock state
    const state = {
      fields: [{
        name: 'obj1',
      }],
    };

    // apply mutation
    updateField(state, {
      index: 0,
      data: {
        name: 'test',
      },
    });

    // assert result
    expect(state.fields).toStrictEqual([{
      name: 'test',
    }]);
  });

  it('updateField updates the first field object name in the array by changing it to "obj2"', () => {
    // mock state
    const state = {
      fields: [{
        name: 'obj1',
      }],
    };

    // apply mutation
    updateField(state, {
      index: 0,
      data: {
        name: 'obj2',
      },
    });

    // assert result
    expect(state.fields).toStrictEqual([{
      name: 'obj2',
    }]);
  });

  it('updateField updates the first field object label in the array', () => {
    // mock state
    const state = {
      fields: [{
        label: 'Label',
      }],
    };

    // apply mutation
    updateField(state, {
      index: 0,
      data: {
        label: 'New Label',
      },
    });

    // assert result
    expect(state.fields).toStrictEqual([{
      label: 'New Label',
    }]);
  });

  it('updateField updates the second field object label in the array', () => {
    // mock state
    const state = {
      fields: [{
        label: 'Label',
      }, {
        label: 'Label2',
      }],
    };

    // apply mutation
    updateField(state, {
      index: 1,
      data: {
        label: 'New Label2',
      },
    });

    // assert result
    expect(state.fields).toStrictEqual([{
      label: 'Label',
    }, {
      label: 'New Label2',
    }]);
  });
});
