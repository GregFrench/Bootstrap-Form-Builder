export default {
  addAttributes(attributes = [], field) {
    let result = '';

    for (let i = 0; i < attributes.length; i += 1) {
      if (attributes[i].name === 'class') {
        result += this.addClassNames(attributes[i].value, field);
      } else {
        result += ` ${attributes[i].name}="${attributes[i].value}"`;
      }
    }

    return result;
  },
  addClassNames(elementClassNames = [], field) {
    let classNames = '';
    let result = '';

    for (let i = 0; i < elementClassNames.length; i += 1) {
      const matches = elementClassNames[i].match(/^{(.*)}$/) || [];

      if (matches.length) {
        if (field.textalign !== 'text-left') {
          classNames += field[matches[1]];
        }
      } else {
        classNames += elementClassNames[i];
      }
    }

    if (classNames !== '') {
      result = ` class="${classNames}"`;
    }

    return result;
  },
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

        const matches = obj.tagName.match(/^{(.*)}$/) || [];

        if (!matches.length) {
          result += `<${obj.tagName}`;
          result += this.addClassNames(obj.classNames, field);
          result += this.addAttributes(obj.attributes, field);
          result += '>';
        } else {
          result += `<${field[matches[1]]}`;
          result += this.addClassNames(obj.classNames, field);
          result += this.addAttributes(obj.attributes, field);
          result += '>';
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

      if (showElement === true && obj.hasEndTag !== false) {
        for (let i = 0; i < depth; i += 1) {
          result += ' ';
        }
        const matches = obj.tagName.match(/^{(.*)}$/) || [];

        if (!matches.length) {
          result += `</${obj.tagName}>`;
        } else {
          result += `</${field[matches[1]]}>`;
        }

        result += '\n';
      }
    }

    return result;
  },
};
