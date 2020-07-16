export default {
  getHtml(obj, field, depth = 0) {
    let result = '';

    for (let i = 0; i < depth; i += 1) {
      result += ' ';
    }

    if (obj.type === 'element') {
      const matches = obj.value.match(/^{(.*)}$/) || [];

      if (!matches.length) {
        result += `<${obj.value}>`;
      } else {
        result += `<${field[matches[1]]}>`;
      }

      if (obj.newline !== false) {
        result += '\n';
      }
    } else if (obj.type === 'text') {
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

    if (obj.children !== undefined) {
      for (let i = 0; i < obj.children.length; i += 1) {
        result += this.getHtml(obj.children[i], field, depth + 2);
      }
    }

    if (obj.type === 'element') {
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

    return result;
  },
};
