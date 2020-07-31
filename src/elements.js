export default [{
  id: 'header',
  text: 'Header',
  icon: 'fa-heading',
  name: 'header',
  label: 'Header',
  subheader: '',
  type: 'header',
  tagname: 'h1',
  textalign: 'text-left',
  html: [{
    type: 'element',
    tagName: '{tagname}',
    attributes: [{
      name: 'class',
      value: ['{textalign}'],
    }],
    children: [{
      type: 'text',
      value: '{label}',
    }, {
      type: 'element',
      tagName: 'small',
      is_not_empty: '{subheader}',
      children: [{
        type: 'text',
        value: '{subheader}',
      }],
    }],
  }],
}, {
  id: 'name',
  text: 'Full Name',
  icon: 'fa-user',
  name: 'name',
  label: 'Name',
  type: 'name',
  html: [{
    type: 'element',
    tagName: 'div',
    attributes: [{
      name: 'class',
      value: ['row'],
    }],
    children: [{
      type: 'element',
      tagName: 'div',
      attributes: [{
        name: 'class',
        value: ['col'],
      }],
      children: [{
        type: 'element',
        tagName: 'input',
        attributes: [{
          name: 'type',
          value: 'text',
        }, {
          name: 'class',
          value: ['form-control'],
        }, {
          name: 'placeholder',
          value: 'First name',
        }],
        hasEndTag: false,
      }],
    }, {
      type: 'element',
      tagName: 'div',
      attributes: [{
        name: 'class',
        value: ['col'],
      }],
      children: [{
        type: 'element',
        tagName: 'input',
        attributes: [{
          name: 'type',
          value: 'text',
        }, {
          name: 'class',
          value: ['form-control'],
        }, {
          name: 'placeholder',
          value: 'Last name',
        }],
        hasEndTag: false,
      }],
    }],
  }],
  subfields: [{
    name: 'prefix',
    label: 'Prefix',
    label_display: 'Prefix',
    type: 'prefix',
    placeholder: 'prefix',
    active: 0,
  }, {
    name: 'first_name',
    label: 'First Name',
    label_display: 'First Name',
    type: 'first_name',
    placeholder: 'first name',
    active: 1,
  }, {
    name: 'middle_name',
    label: 'Middle Name',
    label_display: 'Middle Name',
    type: 'middle_name',
    placeholder: 'middle name',
    active: 0,
  }, {
    name: 'last_name',
    label: 'Last Name',
    label_display: 'Last Name',
    type: 'last_name',
    placeholder: 'last name',
    active: 1,
  }, {
    name: 'suffix',
    label: 'Suffix',
    label_display: 'Suffix',
    type: 'suffix',
    placeholder: 'suffix',
    active: 0,
  }],
}, {
  id: 'email',
  text: 'Email',
  icon: 'fa-envelope',
  name: 'email',
  label: 'Email',
  type: 'email',
  placeholder: 'email',
  tagname: 'input',
  html: {},
}, {
  id: 'address',
  text: 'Address',
  icon: 'fa-map-marker-alt',
  name: 'address',
  label: 'Address',
  type: 'address',
  html: {},
  subfields: [{
    name: 'street_address',
    label: 'Street Address',
    label_display: 'Street Address',
    type: 'street_address',
    placeholder: 'street address',
    active: 1,
  }, {
    name: 'street_address_line_2',
    label: 'Street Address Line 2',
    label_display: 'Street Address Line 2',
    type: 'street_address_line_2',
    placeholder: 'street address line 2',
    active: 1,
  }, {
    name: 'city',
    label: 'City',
    label_display: 'City',
    type: 'city',
    placeholder: 'city',
    active: 1,
  }, {
    name: 'state',
    label: 'State',
    label_display: 'State',
    type: 'state',
    placeholder: 'state',
    active: 1,
  }, {
    name: 'zip_code',
    label: 'Zip Code',
    label_display: 'Zip Code',
    type: 'zip_code',
    placeholder: 'zip code',
    active: 1,
  }, {
    name: 'country',
    label: 'Country',
    label_display: 'Country',
    type: 'country',
    placeholder: 'country',
    active: 1,
  }],
}, {
  id: 'input',
  text: 'Input',
  name: 'input',
  label: 'Input',
  type: 'text',
  tagname: 'input',
  html: {},
}, {
  id: 'textarea',
  text: 'Textarea',
  name: 'textarea',
  label: 'Textarea',
  type: 'textarea',
  tagname: 'textarea',
  html: {},
}, {
  id: 'checkboxes',
  text: 'Checkboxes',
  name: 'checkboxes',
  label: 'Checkboxes',
  type: 'checkboxes',
  tagname: 'input',
  options: 'Option 1\nOption 2\nOption 3',
  html: {},
}, {
  id: 'radio_buttons',
  text: 'Radio Buttons',
  name: 'radio_buttons',
  label: 'Radio Buttons',
  type: 'radio_buttons',
  tagname: 'input',
  options: 'Option 1\nOption 2\nOption 3',
  html: {},
}, {
  id: 'select',
  text: 'Select',
  name: 'select',
  label: 'Select',
  type: 'select',
  tagname: 'select',
  options: 'Option 1\nOption 2\nOption 3',
  html: {},
}, {
  id: 'file',
  text: 'File Upload',
  name: 'file',
  label: 'File Upload',
  type: 'file',
  tagname: 'file',
  html: {},
}];
