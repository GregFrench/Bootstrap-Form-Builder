import elements from '../elements';
import helpers from './helpers';

export default {
  html: (state) => {
    let result = '';

    for (let i = 0; i < state.fields.length; i += 1) {
      const element = elements.find((el) => el.name === state.fields[i].name);

      for (let j = 0; j < element.html.length; j += 1) {
        result += helpers.getHtml(element.html[j], state.fields[i]);
      }
    }

    // remove empty elements
    // result = result.replace(/<[^\/>]+>[ \n\r\t]*<\/[^>]+>/, '');

    // console.log(result.match(/\n\n+/));

    // remove excess newline characters
    // result = result.replace(/\n\n+/, '');

    // trim removes the last newline
    return result.trim();
  },
};
