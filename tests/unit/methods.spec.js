import methods from '../../src/store/methods';

describe('methods', () => {
  const store = {
    $store: {
      commit: jest.fn(),
    },
  };

  it('updateLabel() commits a mutation to update the label at field index 0', () => {
    const label = 'New Label';
    const index = 0;

    methods.updateLabel.apply(store, [{ target: { innerText: label } }, index]);

    expect(store.$store.commit).toHaveBeenCalledWith('updateField', {
      index,
      data: {
        label,
      },
    });
  });

  it('updateLabel() commits a mutation to update the label with "New Label 2" at field index 0', () => {
    const label = 'New Label 2';
    const index = 0;

    methods.updateLabel.apply(store, [{ target: { innerText: label } }, index]);

    expect(store.$store.commit).toHaveBeenCalledWith('updateField', {
      index,
      data: {
        label,
      },
    });
  });

  it('updateLabel() commits a mutation to update the label at field index 1', () => {
    const label = 'New Label';
    const index = 1;

    methods.updateLabel.apply(store, [{ target: { innerText: label } }, index]);

    expect(store.$store.commit).toHaveBeenCalledWith('updateField', {
      index,
      data: {
        label,
      },
    });
  });
});
