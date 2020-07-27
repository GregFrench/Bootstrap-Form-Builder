import methods from '../../src/store/methods';

describe('methods', () => {
  it('updateLabel() commits a mutation to update the label at field index 0', () => {
    const commit = jest.fn();
    const label = 'New Label';
    const index = 0;

    methods.updateLabel({ commit }, { target: { innerText: label } }, index);

    expect(commit).toHaveBeenCalledWith('updateField', {
      index,
      data: {
        label,
      },
    });
  });

  it('updateLabel() commits a mutation to update the label with "New Label 2" at field index 0', () => {
    const commit = jest.fn();
    const label = 'New Label 2';
    const index = 0;

    methods.updateLabel({ commit }, { target: { innerText: label } }, index);

    expect(commit).toHaveBeenCalledWith('updateField', {
      index,
      data: {
        label,
      },
    });
  });

  it('updateLabel() commits a mutation to update the label at field index 1', () => {
    const commit = jest.fn();
    const label = 'New Label';
    const index = 1;

    methods.updateLabel({ commit }, { target: { innerText: label } }, index);

    expect(commit).toHaveBeenCalledWith('updateField', {
      index,
      data: {
        label,
      },
    });
  });
});
