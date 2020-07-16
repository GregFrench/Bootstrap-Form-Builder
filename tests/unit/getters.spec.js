import getters from '../../src/store/getters';

describe('getters', () => {
  it('html() returns correct output for a header element with default values', () => {
    // mock state
    const state = {
      fields: [{
        id: 'header',
        name: 'header',
        label: 'Header',
        subheader: '',
        type: 'header',
        tagname: 'h1',
        textalign: 'text-left',
      }],
    };

    // get the result from the getter
    const result = getters.html(state);

    // assert the result
    expect(result).toBe('<h1>\n  Header\n</h1>');
  });

  it('html() returns correct output for a header element with modified values', () => {
    // mock state
    const state = {
      fields: [{
        id: 'header',
        name: 'header',
        label: 'Form Title',
        subheader: 'Great Form!',
        type: 'header',
        tagname: 'h2',
        textalign: 'text-center',
      }],
    };

    // get the result from the getter
    const result = getters.html(state);

    // assert the result
    expect(result).toBe('<h2 class="text-center">\n  Form Title\n  <small>\n    Great Form!\n  </small>\n</h2>');
  });
});
