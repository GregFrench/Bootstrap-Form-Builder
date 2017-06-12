<template>
<div>
    <header class="site-header">
      <div class="container">
          <div class="row">
              <div class="col-sm-4">
                  <a href="./#/myforms" class="logo">FormBuilder</a>
              </div>
              <div class="col-sm-4 text-center">
                  
                  <p class="save">All changes saved at <span class="save-time"></span>. <span class="glyphicon glyphicon-repeat"></span></p>
              </div>
              <div class="col-sm-4 text-center">
                  <a href="#">Add Collaborators</a>
              </div>
          </div>
      </div>
    </header>
    <nav class="site-nav">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    &nbsp;
                </div>
                <div class="col-sm-6 text-center">
                    <ul>
                        <li><a href="#">Build</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Publish</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    &nbsp;
                </div>
            </div>
        </div>
    </nav>

<div class="content-container build-container build-body">
    <div v-on:click="addFormElements()" v-if="showAddForm" class="add-form">
        <div class="add-form-text">
            Add Form Element
        </div>
        <div class="circle-normal"><span class="glyphicon glyphicon-plus"></span></div>
        
        <div class="circle-ripple circle-ripple-1"></div>
        <div class="circle-ripple circle-ripple-2"></div>
    </div>

    <div v-bind:class="{ 'form-elements-show': showAddForm === false }" class="form-elements">
        <div class="element-main-header">Form Elements
        <span v-on:click="removeFormElements()" class="glyphicon glyphicon-remove pull-right form-elements-remove"></span>
        </div>

        <div id="header" class="element-container">
            <div class="element-icon">
                <span class="glyphicon glyphicon-header"></span>
            </div>
            <div class="element-text">
                Header
            </div>
        </div>
        <div id="name" class="element-container">
            <div class="element-icon">
                <span class="glyphicon glyphicon-user"></span>
            </div>
            <div class="element-text">
                Full Name
            </div>
        </div>
        <div id="email" class="element-container">
            <div class="element-icon">
                <span class="glyphicon glyphicon-envelope"></span>
            </div>
            <div class="element-text">
                Email
            </div>
        </div>
        <div id="address" class="element-container">
            <div class="element-icon">
                <span class="glyphicon glyphicon-map-marker"></span>
            </div>
            <div class="element-text">
                Address
            </div>
        </div>
        <div id="input" class="element-container">
            <div class="element-text">
                Input
            </div>
        </div>
        <div id="textarea" class="element-container">
            <div class="element-text">
                Textarea
            </div>
        </div>
        <div id="checkboxes" class="element-container">
            <div class="element-text">
                Checkboxes
            </div>
        </div>
        <div id="radio_buttons" class="element-container">
            <div class="element-text">
                Radio Buttons
            </div>
        </div>
        <div id="select" class="element-container">
            <div class="element-text">
                Select
            </div>
        </div>
    </div>

    <div class="sortable-container">
        <div v-bind:class="{ 'sortable-border': fields.length === 0 }" class="sortable">
            <div :id="'list-' + index" v-on:click="elementFocus(index)" v-bind:class="{ 'focused-element': field.isFocused === true }" tabindex="-1" class="form-group form-element-container" v-for="(field, index) in fields" :key="field.id">
                <div v-bind:class="{ hide: field.isFocused === false }" class="action-circles">

                    <div v-on:click="editElementProperties(index)" class="action-circle properties-circle">
                        <span class="glyphicon glyphicon-cog properties-cog"></span> <span class="properties-text">Properties</span>
                    </div>
                    <div v-on:click="deleteElement(index)" class="action-circle delete-circle">
                        <span class="glyphicon glyphicon-trash delete-trash"></span> <span class="delete-text">Remove</span>
                    </div>
                </div>
                <div v-if="field.type === 'header'" v-bind:class="field.textalign">
                    <h1 v-if="field.tagname === 'h1' || field.tagname === null">
                        <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
                        <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '' && field.subheader !== undefined)" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
                    </h1>
                    <h2 v-if="field.tagname === 'h2'">
                        <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
                        <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '' && field.subheader !== undefined)" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
                    </h2>
                    <h3 v-if="field.tagname === 'h3'">
                        <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
                        <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
                    </h3>
                    <h4 v-if="field.tagname === 'h4'">
                        <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
                        <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
                    </h4>
                    <h5 v-if="field.tagname === 'h5'">
                        <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
                        <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
                    </h5>
                    <h6 v-if="field.tagname === 'h6'">
                        <span class="editable editable-label" contenteditable="true" v-on:focusout="updateLabel(index)">{{field.label}}</span><br />
                        <small class="editable" :class="'editable-sub-' + index" v-if="field.isFocused || (field.subheader !== null && field.subheader !== '')" contenteditable="true" data-text="Type a subheader" v-on:focusout="updateSubHeader(index)">{{field.subheader}}</small>
                    </h6>
                </div>
                <div v-if="field.type === 'name'">
                    <label class="editable editable-label" contenteditable="true">{{field.label}}</label>
                    <div class="form-inline">
                        <div v-for="subfield in activeSubFields(field.subfields)" class="form-group" style="padding: 5px;">
                            <input v-if="subfield.type === 'prefix' || subfield.type === 'suffix'" type="text" :name="subfield.name" class="form-control" size="4" :placeholder="subfield.placeholder">

                            <input v-if="subfield.type === 'first_name' || subfield.type === 'last_name' || subfield.type === 'middle_name'" type="text" :name="subfield.name" class="form-control" :placeholder="subfield.placeholder">

                            <span class="help-block">{{subfield.label}}</span>
                        </div>
                    </div>
                </div>
                <div v-if="field.type === 'text'">
                    <label class="editable editable-label" contenteditable="true">{{field.label}}</label>
                    <input type="text" name="input" class="form-control">
                </div>
                <div v-if="field.type === 'email'">
                    <label class="editable editable-label" v-on:focusout="updateLabel(index)" contenteditable="true">{{field.label}}</label>
                    <input type="email" name="email" class="form-control">
                </div>
                <div v-if="field.type === 'address'">
                    <label class="editable editable-label" contenteditable="true">{{field.label}}</label>
                    <div v-if="field.subfields[0].active === 1" class="form-group">

                        <input type="text" :name="field.subfields[0].name" class="form-control" :placeholder="field.subfields[0].placeholder">

                        <span class="help-block">{{field.subfields[0].label}}</span>
                    </div>
                    <div v-if="field.subfields[1].active === 1" class="form-group">

                        <input type="text" :name="field.subfields[1].name" class="form-control" :placeholder="field.subfields[1].placeholder">

                        <span class="help-block">{{field.subfields[1].label}}</span>
                    </div>
                    <div v-if="field.subfields[2].active === 1 || field.subfields[3].active === 1" class="form-inline">
                        <div v-if="field.subfields[2].active === 1" class="form-group">

                            <input type="text" :name="field.subfields[2].name" class="form-control" :placeholder="field.subfields[2].placeholder">

                            <span class="help-block">{{field.subfields[2].label}}</span>
                        </div>
                        <div v-if="field.subfields[3].active === 1" class="form-group">

                            <input type="text" :name="field.subfields[3].name" class="form-control" :placeholder="field.subfields[3].placeholder">

                            <span class="help-block">{{field.subfields[3].label}}</span>
                        </div>
                    </div>
                    <div v-if="field.subfields[4].active === 1 || field.subfields[5].active === 1" class="form-inline">
                        <div v-if="field.subfields[4].active === 1" class="form-group">

                            <input type="text" :name="field.subfields[4].name" class="form-control" :placeholder="field.subfields[4].placeholder">

                            <span class="help-block">{{field.subfields[4].label}}</span>
                        </div>
                        <div v-if="field.subfields[5].active === 1" class="form-group">

                            <select class="form-control" :name="field.subfields[5].name">
                                <option value="">Country...</option>
                                <option value="Afganistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bonaire">Bonaire</option>
                                <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Canary Islands">Canary Islands</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Channel Islands">Channel Islands</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos Island">Cocos Island</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote DIvoire">Cote D'Ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Curaco">Curacao</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="East Timor">East Timor</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands">Falkland Islands</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Ter">French Southern Ter</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Great Britain">Great Britain</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran">Iran</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea North">Korea North</option>
                                <option value="Korea Sout">Korea South</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Laos">Laos</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libya">Libya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macau">Macau</option>
                                <option value="Macedonia">Macedonia</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Midway Islands">Midway Islands</option>
                                <option value="Moldova">Moldova</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Nambia">Nambia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherland Antilles">Netherland Antilles</option>
                                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                <option value="Nevis">Nevis</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau Island">Palau Island</option>
                                <option value="Palestine">Palestine</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Phillipines">Philippines</option>
                                <option value="Pitcairn Island">Pitcairn Island</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Republic of Montenegro">Republic of Montenegro</option>
                                <option value="Republic of Serbia">Republic of Serbia</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russia</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="St Barthelemy">St Barthelemy</option>
                                <option value="St Eustatius">St Eustatius</option>
                                <option value="St Helena">St Helena</option>
                                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                <option value="St Lucia">St Lucia</option>
                                <option value="St Maarten">St Maarten</option>
                                <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
                                <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
                                <option value="Saipan">Saipan</option>
                                <option value="Samoa">Samoa</option>
                                <option value="Samoa American">Samoa American</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syria">Syria</option>
                                <option value="Tahiti">Tahiti</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Erimates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States of America">United States of America</option>
                                <option value="Uraguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Vatican City State">Vatican City State</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                <option value="Wake Island">Wake Island</option>
                                <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zaire">Zaire</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select>

                            <span class="help-block">{{field.subfields[5].label}}</span>
                        </div>
                    </div>
                </div>
                <div v-if="field.type === 'textarea'">
                    <label class="editable" contenteditable="true">{{field.label}}</label>
                    <textarea class="form-control"></textarea>
                </div>
                <div v-if="field.type === 'checkboxes'">
                    <label class="editable" contenteditable="true">{{field.label}}</label>
                    <div class="form-element">
                        <div class="outer">
                            <div v-for="option in splitStringByLine(field.options)" class="checkbox">
                                <label><input type="checkbox" value="">{{option}}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="field.type === 'checkboxes_horizontal'">
                    <label class="editable" contenteditable="true">{{field.label}}</label>
                    <div class="form-element">
                        <label class="checkbox-inline"><input type="checkbox" value="">Option 1</label>
                        <label class="checkbox-inline"><input type="checkbox" value="">Option 2</label>
                        <label class="checkbox-inline"><input type="checkbox" value="">Option 3</label>
                    </div>
                </div>
                <div v-if="field.type === 'radio_buttons'">
                    <label class="editable" contenteditable="true">{{field.label}}</label>
                    <div class="form-element">
                        <div v-for="option in splitStringByLine(field.options)" class="radio">
                            <label><input type="radio" :name="option">{{option}}</label>
                        </div>
                    </div>
                </div>
                <div v-if="field.type === 'select'">
                    <label class="editable editable-label" contenteditable="true">{{field.label}}</label>
                    <select class="form-control">
                        <option v-for="option in splitStringByLine(field.options)">{{option}}</option>
                    </select>
                </div>

                <div v-if="field.visibility === 'hidden'" class="element-not-visible">
                    <span class="glyphicon glyphicon-exclamation-sign"></span> This field is hidden and will not be seen on the form.
                </div>
            </div>
        </div>
    </div>

    <div v-bind:class="{ 'element-properties-show': showElementProperties === true }" class="element-properties">
        <div class="element-main-header">
        <span v-if="type === 'header'">Header</span>
        <span v-if="type === 'name'">Full Name</span>
        <span v-if="type === 'address'">Address</span> Properties
            <span v-on:click="removeElementProperties()" class="glyphicon glyphicon-remove pull-right form-elements-remove"></span>
        </div>
        <div v-if="type === 'header'" class="element-property">
            <div class="form-group">
                <label>Heading Text</label>
                <input type="text" class="form-control" v-on:keyup="editLabel()" v-model="label">
            </div>
        </div>
        <div v-if="type === 'text' || type === 'email'" class="element-property">
            <div class="form-group">
                <label>Label Text</label>
                <input type="text" class="form-control" v-on:keyup="editLabel()" v-model="label">
            </div>
        </div>
        <div v-if="type === 'header'" class="element-property">
            <div class="form-group">
                <label>Sub-Heading Text</label>
                <input type="text" class="form-control" v-on:keyup="editSubHeader()" v-model="subheader">
                <small class="form-text text-muted">Small text below the heading.</small>
            </div>
        </div>
        <div v-if="type === 'header'" class="element-property">
            <div class="form-group">
                <label>Heading Size</label>
                <div class="radio-wrapper">
                    <label v-bind:class="{ 'label-active': tagname === null || tagname === 'h1' }" class="radio-inline">
                        <input type="radio" name="optradio" v-on:click="editTagName()" v-model="tagname" value="h1">H1
                    </label>
                    <label v-bind:class="{ 'label-active': tagname === 'h2' }" class="radio-inline">
                        <input v-on:click="editTagName()" type="radio" name="optradio" v-model="tagname" value="h2">H2
                    </label>
                    <label v-bind:class="{ 'label-active': tagname === 'h3' }" class="radio-inline">
                        <input v-on:click="editTagName()" type="radio" name="optradio" v-model="tagname" value="h3">H3
                    </label>
                    <label v-bind:class="{ 'label-active': tagname === 'h4' }" class="radio-inline">
                        <input type="radio" name="optradio" v-on:click="editTagName()" v-model="tagname" value="h4">H4
                    </label>
                    <label v-bind:class="{ 'label-active': tagname === 'h5' }" class="radio-inline">
                        <input v-on:click="editTagName()" type="radio" name="optradio" v-model="tagname" value="h5">H5
                    </label>
                    <label v-bind:class="{ 'label-active': tagname === 'h6' }" class="radio-inline">
                        <input v-on:click="editTagName()" type="radio" name="optradio" v-model="tagname" value="h6">H6
                    </label>
                </div>
            </div>
        </div>
        <div v-if="type === 'header'" class="element-property">
            <div class="form-group">
                <label>Text Alignment</label>
                <div class="radio-wrapper">
                    <label v-bind:class="{ 'label-active': textalign === null || textalign === 'text-left' }" class="radio-inline">
                    <input type="radio" name="optradio" v-on:click="editTextAlign()" v-model="textalign" value="text-left">Left
                    </label>
                    <label v-bind:class="{ 'label-active': textalign === 'text-center' }" class="radio-inline">
                    <input v-on:click="editTextAlign()" type="radio" name="optradio" v-model="textalign" value="text-center">Center
                    </label>
                    <label v-bind:class="{ 'label-active': textalign === 'text-right' }" class="radio-inline">
                    <input v-on:click="editTextAlign()" type="radio" name="optradio" v-model="textalign" value="text-right">Right
                    </label>
                </div>
            </div>
        </div>
        <div v-if="type === 'checkboxes' || type === 'radio_buttons' || type === 'select'" class="element-property">
            <div class="form-group">
                <label>Options</label>
                <textarea class="form-control" rows="5" v-on:keyup="editOptions()" v-model="options">{{options}}</textarea>
            </div>
        </div>
        <div class="element-property">
            <div class="form-group">
                <label>Duplicate Question</label>
                <div class="radio-wrapper">
                    <label class="radio-inline single-button">
                    <input type="radio" name="optradio" v-on:click="duplicate()">+ Duplicate
                    </label>
                    <small class="form-text text-muted">Duplicate this question with all saved settings.</small>
                </div>
            </div>
        </div>
        <div v-if="type === 'name'">
            <div class="element-property">
                <div class="row" v-for="subfield in activeSubFields(subfields)">
                    <div class="col-sm-6">{{subfield.label_display}}</div>
                    <div class="col-sm-6 col-padding">
                        <input type="text" class="form-control" v-model="subfield.label">
                    </div>
                </div>
            </div>
            <div v-for="subfield in subfieldsNameToggle(subfields)" class="element-property">
                <label v-if="subfield.type === 'middle_name'">Middle Name</label>
                <label v-if="subfield.type === 'prefix'">Prefix</label>
                <label v-if="subfield.type === 'suffix'">Suffix</label>
                <div>
                    <label class="switch">
                        <input v-if="subfield.type === 'middle_name'" type="checkbox" v-on:click="nameToggle(2)" v-model="subfield.active">
                        <input v-if="subfield.type === 'prefix'" type="checkbox" v-on:click="nameToggle(0)" v-model="subfield.active">
                        <input v-if="subfield.type === 'suffix'" type="checkbox" v-on:click="nameToggle(4)" v-model="subfield.active">

                        <div class="slider">
                            <div class="switch-on" v-bind:class="{'switch-on-active': subfield.active === 1}">
                                ON
                            </div>
                            <div class="switch-off" v-bind:class="{'switch-off-active': subfield.active === 1}">
                                OFF
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div v-if="type === 'address'">
            <div class="element-property">
                <div class="row" v-for="subfield in activeSubFields(subfields)">
                    <div class="col-sm-6">{{subfield.label_display}}</div>
                    <div class="col-sm-6 col-padding">
                        <input type="text" class="form-control" v-model="subfield.label">
                    </div>
                </div>
            </div>
            <div v-for="(subfield, index) in subfields" class="element-property">
                <label>{{subfield.label_display}}</label>
                <div>
                    <label class="switch">
                        <input type="checkbox" v-on:click="addressToggle(index)" v-model="subfield.active">

                        <div class="slider">
                            <div class="switch-on" v-bind:class="{'switch-on-active': subfield.active === 1}">
                                ON
                            </div>
                            <div class="switch-off" v-bind:class="{'switch-off-active': subfield.active === 1}">
                                OFF
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="element-property">
            <label>Hide field</label>
            <div>
                <label class="switch">
                    <input type="checkbox" value="hidden" v-on:click="switchToggle()" v-model="visibility">
                    <div class="slider">
                        <div class="switch-on" v-bind:class="{'switch-on-active': visibility === 'hidden'}">
                            ON
                        </div>
                        <div class="switch-off" v-bind:class="{'switch-off-active': visibility === 'hidden'}">
                            OFF
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </div>

</div>
</div>
</template>

<script>

    import $ from 'jquery';
    import 'jquery-ui/ui/widgets/draggable.js';
    import 'jquery-ui/ui/widgets/sortable.js';
    import { mapState } from 'vuex'

    export default {
        computed: mapState([
          // map this.count to store.state.count
          'count'
        ]),
        data() {
            return {
                elements: {
                    "header": {
                        name: "header",
                        label: "Header",
                        type: "header",
                        tagname: "h1"
                    },
                    "name": {
                        name: "name",
                        label: "Name",
                        type: "name",
                        subfields: [
                            {
                                name: "prefix",
                                label: "Prefix",
                                label_display: "Prefix",
                                type: "prefix",
                                placeholder: "prefix",
                                active: 0
                            },
                            {
                                name: "first_name",
                                label: "First Name",
                                label_display: "First Name",
                                type: "first_name",
                                placeholder: "first name",
                                active: 1
                            },
                            {
                                name: "middle_name",
                                label: "Middle Name",
                                label_display: "Middle Name",
                                type: "middle_name",
                                placeholder: "middle name",
                                active: 0
                            },
                            {
                                name: "last_name",
                                label: "Last Name",
                                label_display: "Last Name",
                                type: "last_name",
                                placeholder: "last name",
                                active: 1
                            },
                            {
                                name: "suffix",
                                label: "Suffix",
                                label_display: "Suffix",
                                type: "suffix",
                                placeholder: "suffix",
                                active: 0
                            }
                        ]
                    },
                    "email": {
                        name: "email",
                        label: "Email",
                        type: "email",
                        tagname: "input"
                    },
                    "address": {
                        name: "address",
                        label: "Address",
                        type: "address",
                        subfields: [
                            {
                                name: "street_address",
                                label: "Street Address",
                                label_display: "Street Address",
                                type: "street_address",
                                placeholder: "street address",
                                active: 1
                            },
                            {
                                name: "street_address_line_2",
                                label: "Street Address Line 2",
                                label_display: "Street Address Line 2",
                                type: "street_address_line_2",
                                placeholder: "street address line 2",
                                active: 1
                            },
                            {
                                name: "city",
                                label: "City",
                                label_display: "City",
                                type: "city",
                                placeholder: "city",
                                active: 1
                            },
                            {
                                name: "state",
                                label: "State",
                                label_display: "State",
                                type: "state",
                                placeholder: "state",
                                active: 1
                            },
                            {
                                name: "zip_code",
                                label: "Zip Code",
                                label_display: "Zip Code",
                                type: "zip_code",
                                placeholder: "zip code",
                                active: 1
                            },
                            {
                                name: "country",
                                label: "Country",
                                label_display: "Country",
                                type: "country",
                                placeholder: "country",
                                active: 1
                            }
                        ]
                    },
                    "input": {
                        name: "input",
                        label: "Input",
                        type: "text",
                        tagname: "input"
                    },
                    "textarea": {
                        name: "textarea",
                        label: "Textarea",
                        type: "textarea",
                        tagname: "textarea"
                    },
                    "checkboxes": {
                        name: "checkboxes",
                        label: "Checkboxes",
                        type: "checkboxes",
                        tagname: "input",
                        options: "Option 1\nOption 2\nOption 3"
                    },
                    "radio_buttons": {
                        name: "radio_buttons",
                        label: "Radio Buttons",
                        type: "radio_buttons",
                        tagname: "input",
                        options: "Option 1\nOption 2\nOption 3"
                    },
                    "select": {
                        name: "select",
                        label: "Select",
                        type: "select",
                        tagname: "select",
                        options: "Option 1\nOption 2\nOption 3"
                    }
                },
                activeIndex: null,
                fields: [],
                hasFields: false,
                label: null,
                middleName: null,
                options: "",
                showAddForm: true,
                showElementProperties: false,
                subfields: [],
                subheader: null,
                tagname: null,
                textalign: "text-left",
                type: null,
                visibility: null,
                activeSubFields: function(subfields) {

                    return subfields.filter(function(subfield) {

                        return subfield.active === 1;

                    });

                },
                addFormElements: function() {

                    this.showAddForm = false;
                    this.showElementProperties = false;

                },
                addressToggle: function(num) {

                    if (this.fields[this.activeIndex].subfields[num].active === true) {

                        this.fields[this.activeIndex].subfields[num].active = 1;
                        
                    } else {

                        this.fields[this.activeIndex].subfields[num].active = 0;

                    }

                },
                // delete field by deleting element from page, array, and db
                deleteElement: function(index) {

                    this.fields.splice(index, 1);

                },
                duplicate: function() {

                    this.receiveElement(this.fields[this.activeIndex], this.activeIndex + 1);

                    this.elementFocus(this.activeIndex + 1);

                },
                editElementProperties: function(index) {

                    this.showAddForm = true;
                    this.showElementProperties = true;

                },
                editLabel: function() {

                    this.fields[this.activeIndex].label = this.label;

                },
                editOptions: function() {

                    this.fields[this.activeIndex].options = this.options;

                },
                editSubHeader: function() {

                    this.fields[this.activeIndex].subheader = this.subheader;
                    
                },
                editTagName: function() {

                    this.fields[this.activeIndex].tagname = this.tagname;

                },
                editTextAlign: function() {

                    this.fields[this.activeIndex].textalign = this.textalign;

                },
                elementFocus: function(index) {

                    if (this.fields[index] !== undefined) {

                        this.activeIndex = index;
                        this.label = this.fields[index].label;
                        this.options = this.fields[index].options;
                        this.type = this.fields[index].type;
                        this.tagname = this.fields[index].tagname;
                        this.textalign = this.fields[index].textalign;
                        this.subfields = this.fields[index].subfields;
                        this.subheader = this.fields[index].subheader;
                        this.visibility = this.fields[index].visibility;

                        this.fields.forEach(function (field) {

                            field.isFocused = false;

                        });

                        this.fields[index].isFocused = true;

                    }

                },
                nameToggle: function(num) {

                    if (this.fields[this.activeIndex].subfields[num].active === true) {

                        this.fields[this.activeIndex].subfields[num].active = 1;
                        
                    } else {

                        this.fields[this.activeIndex].subfields[num].active = 0;

                    }

                },
                receiveElement: function(element, newIndex) {

                    this.fields.splice(newIndex, 0, {
                        name: element.name,
                        type: element.type,
                        label: element.label,
                        options: element.options,
                        subfields: element.subfields,
                        subheader: element.subheader,
                        subheader_update: true,
                        tagname: element.tagname,
                        textalign: element.textalign,
                        visibility: element.visibility,
                        isFocused: true,
                        order_rank: newIndex
                    });

                },
                removeElementProperties: function() {

                    this.showElementProperties = false;

                },
                removeFormElements: function() {

                    this.showAddForm = true;

                },
                splitStringByLine: function(str) {

                    return str.split("\n");

                },
                subfieldsNameToggle: function(subfields) {

                    return subfields.filter(function(subfield) {

                        return subfield.type === 'prefix' ||
                        subfield.type === 'middle_name' ||
                        subfield.type === 'suffix';

                    });

                },
                switchToggle: function() {

                    if (this.visibility === true) {

                        this.visibility = "hidden";
                        
                    } else {

                        this.visibility = null;

                    }

                    this.fields[this.activeIndex].visibility = this.visibility;


                },
                updateLabel: function(index) {

                    var text = $("[contenteditable='true']").eq(index).text();

                    $.ajax({
                        url: 'fields/' + index,
                        type: 'POST',
                        data: {
                            _token: Laravel.csrfToken,
                            label: text,
                            form_id: form_id,
                            _method: "PATCH"
                        }
                    });

                },
                updateSubHeader: function(index) {

                    var text = $(".editable-sub-" + index).eq(0).text();

                    this.fields[this.activeIndex].subheader = text;

                    // reupdate text to deal with bug of vue being updated
                    // and rendering text twice
                    $(".editable-sub-" + index).eq(0).text(text);

                    $.ajax({
                        url: 'fields/' + this.activeIndex,
                        type: 'POST',
                        data: {
                            _token: Laravel.csrfToken,
                            subheader: text,
                            subheader_update: true,
                            form_id: form_id,
                            _method: "PATCH"
                        }
                    });

                }
            }
        },
        mounted() {

            var that = this;

            $('body').click(function (evt){   

                if (evt.target.className == "form-element-container" ||
                    evt.target.className == "element-properties") {
                    return;
                }

                //For descendants of "form-element-container" being clicked, remove this check if you do not want to put constraint on descendants.
                if ($(evt.target).closest('.form-element-container').length ||
                    $(evt.target).closest('.element-properties').length) {
                    return;
                }         

                //Do processing of click event here for every element except with classname 'form-element-container'
                that.fields.forEach(function (field) {

                    field.isFocused = false;
                    that.showElementProperties = false;

                });

            });

            function setHeight() {

                var height = $(window).height();
                var offset = $('.sortable-container').offset().top;

                height = height - offset;
                $('.sortable-container').css({'height': height});
                $('.form-elements').css({'height': height});
                $('.element-properties').css({'height': height});

            }

            setHeight();

            $(window).resize(function(){
                setHeight();
            });

            $(".element-container").draggable({
                opacity: 0.7,
                helper: "clone",
                connectToSortable: ".sortable"
            });

            $('.sortable').sortable({
                axis: "y",
                cancel: '.editable',
                start: function(e, ui) {

                    // creates a temporary attribute on the element with the old index
                    $(this).attr('data-previndex', ui.item.index());

                },
                receive: function (event, ui) {

                    if (ui.item.attr("id")) {

                        var newIndex = parseInt($(this).data("ui-sortable").currentItem.index()),
                            element = that.elements[ui.item.attr("id")];

                        $(this).removeAttr('data-previndex');
                        $(ui.helper).replaceWith("");
                        
                        that.receiveElement(element, newIndex);

                        that.elementFocus(newIndex);

                    }

                },
                update: function (event, ui) {

                    if (ui.item.index() !== -1) {

                        var newIndex = ui.item.index();

                        var oldIndex = parseInt($(this).attr('data-previndex'));
                        $(this).removeAttr('data-previndex');

                        $(ui.helper).replaceWith("");

                        that.fields.splice(newIndex, 0, that.fields.splice(oldIndex, 1)[0]);

                        that.elementFocus(newIndex);

                        $.ajax({
                            url: 'fields/' + oldIndex,
                            type: 'POST',
                            data: {
                                _token: Laravel.csrfToken,
                                form_id: form_id,
                                fields: JSON.stringify(that.fields),
                                sort_fields: true,
                                rank_order: newIndex,
                                _method: "PATCH"
                            },
                            success: function(data) {

                                $('.save-time').text(new Date().toLocaleString());

                            }
                        });

                    }

                }

            });

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    color: #81D4FA;
}

.action-circle {
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: flex;
    height: 36px;
    font-size: 15px;
    overflow: hidden;
    padding: 10px;
    padding-top: 5px;
    position: absolute;
    right: -80px;
    text-align: center;
    width: 36px;
}

.action-circle:hover {
    border-radius: 500px;
    right: -144px;
    text-align: left;
    width: 100px;
}

.action-circles {
    position: relative;
}

.add-form {
    background-color: #3e4652;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border: 1px solid #000;
    cursor: pointer;
    display: block;
    //display: none;
    height: 54px;
    top: 200px;
    min-width: 140px;
    position: absolute;
    width: 140px;
    z-index: 1;
}

.add-form:hover {
    text-decoration: none;
}

.add-form-text {
    color: #fff;
    padding: 5px;
    width: 86px;
}

.body-home {
    color: #6d696e;
}

.btn-create {
    margin: auto;
    width: 95%;
}

.btn-home {
    margin-top: 50px;
    position: relative;
    z-index:3;
}

.bubble-circle {
    background-color: #2196f3;
    border-radius: 50%;
    color: #fff;
    font-size: 100px;
    height: 180px;
    margin: auto;
    margin-bottom: 25px;
    padding-top: 30px;
    width: 180px;
}

.bubble-circle-1 {
    padding-left: 35px;
}

.bubble-circle-2 {
    padding-left: 45px;
}

.bubble-circle-3 {
    padding-left: 50px;
}

.build-body {
    overflow: hidden;
}

.build-container {
    background-color: #f5f5f5;
}

.circle-ripple {
    background-color: #515863;
    border-radius: 30px;
    float: right;
    height: 54px;
    left: 86px;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 54px;
    z-index: 0;
    
}

.circle-normal {
    background-color: #3e4652;
    border-radius: 30px;
    color: #fff;
    float: right;
    height: 54px;
    opacity: 1;
    padding-top: 16px;
    position: absolute;
    right: 0;
    text-align: center;
    top: -1px;
    width: 54px;
    z-index: 1;
}

.circle-ripple-1 {
    animation: circle-ripple-1 2.5s linear 1s infinite;
    z-index: 0;
}

.circle-ripple-2 {
    animation: circle-ripple-2 2.5s linear 1.5s infinite;
    z-index: 0;
}

/* For modern browsers */
.clearfix:before,
.clearfix:after {
    content:"";
    display:table;
}
.clearfix:after {
    clear:both;
}

/* For IE 6/7 (trigger hasLayout) */
.clearfix {
    zoom:1;
}

.code-box {
    background-color: #666;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #fff;
    overflow-y: scroll;
    padding: 15px;
    margin-bottom: 25px;
    max-height: 350px;
}

.content-container {
    display: flex;
    flex-shrink: 0;
}

.col-block {
    margin-top: 20px;
}

.col-padding {
    padding-bottom: 10px;
}

[contenteditable]:focus {
    outline: 0px solid transparent;
}

[contentEditable=true]:empty:not(:focus):before{
    content:attr(data-text)
}

.delete-circle {
    background-color: #F44336;
    top: 40px;
    transition-property: all;
    transition-duration: 100ms;
    -webkit-transition-duration: 100ms;
    transition-timing-function: ease;
}

.delete-circle:hover {
    background-color: #E57373;
}

.delete-text {
    font-size: 12px;
    padding: 5px;
    padding-left: 10px;
}

.delete-trash {
    margin-top: 5px;
}


#droppable {
    padding: 25px;
}

@keyframes circle-ripple-1 {
    0% {
        border-radius: 30px;
        height: 54px;
        left: 86;
        opacity: 0.5;
        top: 0;
        width: 54px;
    }

    50%, 100% {
        border-radius: 41px;
        height: 84px;
        left: 70px;
        opacity: 0;
        top: -15px;
        width: 84px;
    }
}

@keyframes circle-ripple-2 {
    0% {
        border-radius: 30px;
        height: 54px;
        left: 86;
        opacity: 0.5;
        top: 0;
        width: 54px;
    }

    50%, 100% {
        border-radius: 41px;
        height: 84px;
        left: 70px;
        opacity: 0;
        top: -15px;
        width: 84px;
    }
}

.editable {
    cursor: default;
    display: inline-block;
}

.element-code {
    display: none;
}

.element-container {
    background-color: #3e4652;
    border-bottom: 1px solid #333a43;
    border-top: 1px solid #495261;
    color: #fff;
    cursor: move;
    display: flex;
    font-size: 15px;
}

.element-container:hover .element-icon {
    background-color: #0f83c1;
    color: #fff;
    text-decoration: none;
}

.element-container:hover .element-text {
    background-color: #2196F3;
    color: #fff;
    text-decoration: none;
}

.element-icon {
    background-color: #313841;
    box-sizing: border-box;
    font-size: 28px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    min-width: 54px;
}

.element-main-header {
    font-size: 18px;
    padding: 16px 48px 14px 18px;
}

.element-not-visible {
    background-color: #FFEB3B;
    border-radius: 5px;
    padding: 6px 9px 6px 30px;
    margin-top: 5px;
    width: 340px;
}

.element-properties {
    background-color: #3e4652;
    color: #fff;
    float: right;
    overflow-y: scroll;
    margin-right: -300px;
    min-width: 300px;
    transition-property: margin;
    transition-duration: 600ms;
    -webkit-transition-duration: 600ms;
    transition-timing-function: ease;
    width: 300px;
}

.element-properties input[type=text] {
    background-color: #535f70;
    border: 1px solid #596066;
    color: #fff;
}

.element-properties textarea {
    background-color: #535f70;
    border: 1px solid #596066;
    color: #fff;
}

.element-properties-show {
    margin-right: 0px;
}

.element-property {
    border-bottom: 1px solid #333a43;
    border-top: 1px solid #495261;
    padding: 15px;
}

.element-text {
    //border-bottom: 1px solid #212121;
    font-size: 14px;
    height: 54px;
    padding: 18px;
    text-transform: uppercase;
    //width: 246px;
    width: 300px;
}

.favorite {
    cursor: pointer;
    padding-top: 1px !important;
}

.favorited {
    color: #FFEB3B;
}

.focused-element {
    border: 2px solid #2196F3;
}

footer.site-footer {
    color: #666;
    padding: 25px 0 5px 0;
}

.form-focused {
    background-color: #e6e6e6;
}

.form-element-container {
    cursor: move;
    padding: 12px 36px;
    margin: 0;
}

.form-elements {
    background-color: #3e4652;
    color: #fff;
    float: left;
    margin-left: -300px;
    overflow-y: scroll;
    min-width: 300px;
    width: 300px;
    z-index: 2;
    transition-property: margin;
    transition-duration: 600ms;
    -webkit-transition-duration: 600ms;
    transition-timing-function: ease;
}

.form-elements-show {
    margin-left: 0px;
}

.form-elements-header {
    text-align: center;
    text-transform: uppercase;
}

.form-elements-remove {
    cursor: pointer;
}

.form-input {
    display: none;
}

.form-label {
    display: block;
    z-index: 1000;
}

.h1-home {
    color: #fff;
    font-size: 60px;
    margin: 0;
    padding-top: 100px;
}

.h2-home {
    color: #3a3a3a;
    font-size: 42px;
    font-weight: 600;
}

.home-banner-text {
    color: #fff;
    font-size: 22px;
    margin: auto;
    max-width: 800px;
    text-align: center;
}

.home-link {
    font-size: 22px;
}

.home-link:hover {
    color: #e86f69;
    text-decoration: underline;
}

.home-text {
    font-size: 18px;
}

.home-wrapper {
    
}

.home-wrapper-grey {
    background-color: #f8fafb;
}

.home-wrapper-text {
    margin: auto;
    max-width: 900px;
    padding: 114px 32px;
}

.hide {
    display: none !important;
}

.home-logo {
    color: #fff;
    display: block;
    font-size: 28px;
    margin-top: 5px;
}

.home-logo:hover {
    color: #fff;
    text-decoration: none;
}

input[readonly] {
  background-color: #fff !important;
}

input[readonly]:focus {
    outline: none !important;
}

.label-active {
    background-color: #2196F3 !important;
}

.logo {
    color: #2196F3;
    display: inline-block;
    font-size: 24px;
    margin-top: 5px;
}

.logo:hover {
    color: #2196F3;
    text-decoration: none;
}

.logo:visited {
    color: #2196F3;
    text-decoration: none;
}

.logo:link {
    text-decoration: none;
}

.logo-forms {
    color: #fff;
    display: inline-block;
    font-size: 24px;
    margin-top: 5px;
}

.logo-forms:hover {
    color: #fff;
    text-decoration: none;
}

.logo-forms:visited {
    color: #fff;
    text-decoration: none;
}

.logo-forms:link {
    text-decoration: none;
}

nav.site-nav {
    background-color: #2196F3;
}

nav.site-nav ul {
    margin: 0;
    padding: 0;
}

nav.site-nav ul li {
    display: inline;
}

nav.site-nav ul li a {
    color: #fff;
    display: inline-block;
    font-size: 18px;
    padding: 13px 27px;
    text-transform: uppercase;
}

nav.site-nav ul li a:hover {
    text-decoration: none;
}

nav.site-nav ul li a:visited {
    text-decoration: none;
}

nav.site-nav ul li a:link {
    text-decoration: none;
}

nav.site-nav ul li a:active {
    text-decoration: none;
}

section.particles {
    height: 420px;
}

.particles-overlay {
    background-color: #42A5F5;
    height: 420px;
    z-index: 2;
}

#particles-js {
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
}

.properties-circle {
    background-color: #424242;
    top: 0px;
    transition-property: all;
    transition-duration: 100ms;
    -webkit-transition-duration: 100ms;
    transition-timing-function: ease;
}

.properties-circle:hover {
    background-color: #616161;
}

.properties-cog {
    padding-top: 5px;
}

.properties-text {
    font-size: 12px;
    padding: 5px;
    padding-left: 10px;
}

label.radio-inline input {
    display: none;
}

label.radio-inline {
    background-color: #535f70;
    border: 1px solid #2f333a;
    font-size: 14px;
    margin: 0 !important;
    padding: 8px 12px 6px 12px;
    text-transform: uppercase;
}

label.radio-inline {
    border-right: none;
}

label.radio-inline:last-child {
    border: 1px solid #2f333a;
}

label.single-button {
    border-right: 1px solid #2f333a;
}

.radio-wrapper {
    font-size: 0px;
    margin: 0;
}

.rotate-90 {
    //margin-top: 10px;
    transform: rotate(90deg);
}

.save {
    color: #4CAF50;
}

.sortable {
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 20px 15% 20px 20%;
    //overflow: scroll;
    //padding: 45px 20px;
    padding: 45px 0px;
    max-width: 690px;

    /*transition-property: margin;
    transition-duration: 600ms;
    -webkit-transition-duration: 600ms;
    transition-timing-function: ease;*/
}

.sortable-border {
    border: 2px dashed #eee;
    border-radius: 5px;
    height: 130px;
}

.sortable-container {
    overflow: scroll;
    width: 100%;
}

/* The switch - the box around the slider */
.switch {
  display: inline-block;
  position: relative;
  height: 34px;
  overflow: hidden;
  width: 70px;
}

/* Hide default HTML checkbox */
.switch input {
    display:none;
}

.switch-off {
    padding: 8px 0px 6px 0px;
    position: absolute;
    right: 5px;
    transition-property: all;
    transition-duration: .4s;
    -webkit-transition-duration: .4s;
}

.switch-off-active {
    right: -32px;
}

.switch-on {
    left: -25px;
    padding: 8px 0px 6px 0px;
    position: absolute;
    transition-property: all;
    transition-duration: .4s;
    -webkit-transition-duration: .4s;
}

.switch-on-active {
    left: 5px;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 600ms;
  transition: 600ms;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(36px);
  -ms-transform: translateX(36px);
  transform: translateX(36px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.top-offset {
    margin-top: 35px;
}
</style>
