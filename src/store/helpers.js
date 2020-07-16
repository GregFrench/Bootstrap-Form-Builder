export default {
  getHtml(obj, field, depth = 0) {
    let result = '';
    let showElement = true;

    if (obj.type === 'element') {

      if (obj.is_not_empty !== undefined) {
        const matches = obj.is_not_empty.match(/^{(.*)}$/) || [];
        if (field[matches[1]].trim() === '') {
          showElement = false;
        }
      }

      if (showElement === true) {
        for (let i = 0; i < depth; i += 1) {
          result += ' ';
        }

        const matches = obj.value.match(/^{(.*)}$/) || [];

        if (!matches.length) {
          result += `<${obj.value}>`;
        } else if (field.textalign === 'text-left') {
          result += `<${field[matches[1]]}>`;
        } else {
          result += `<${field[matches[1]]} class="${field.textalign}">`;
        }

        if (obj.newline !== false) {
          result += '\n';
        }
      }
    } else if (obj.type === 'text') {
      for (let i = 0; i < depth; i += 1) {
        result += ' ';
      }

      const matches = obj.value.match(/^{(.*)}$/) || [];

      if (!matches.length) {
        result += obj.value;
      } else {
        result += field[matches[1]];
      }

      if (obj.newline !== false) {
        result += '\n';
      }
    } else if (obj.type === 'break') {
      result += '<br />\n';
    }

    if (obj.children !== undefined && showElement === true) {
      for (let i = 0; i < obj.children.length; i += 1) {
        result += this.getHtml(obj.children[i], field, depth + 2);
      }
    }

    if (obj.type === 'element') {

      if (obj.is_not_empty !== undefined) {
        const matches = obj.is_not_empty.match(/^{(.*)}$/) || [];
        if (field[matches[1]].trim() === '') {
          showElement = false;
        }
      }

      if (showElement === true) {
        for (let i = 0; i < depth; i += 1) {
          result += ' ';
        }
        const matches = obj.value.match(/^{(.*)}$/) || [];

        if (!matches.length) {
          result += `</${obj.value}>`;
        } else {
          result += `</${field[matches[1]]}>`;
        }

        result += '\n';
      }
    }

    return result;
  },
};
