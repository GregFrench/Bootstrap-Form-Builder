<template>
<div>
    <AppHeader></AppHeader>

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
                    <div class="row">
                        <div v-for="subfield in activeSubFields(field.subfields)" class="col-xs-6">
                            <!--<input v-if="subfield.type === 'prefix' || subfield.type === 'suffix'" type="text" :name="subfield.name" class="form-control" size="4" :placeholder="subfield.placeholder">-->

                            <input type="text" :name="subfield.name" class="form-control" :placeholder="subfield.placeholder">

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
                <div class="row" v-for="subfield in activeIndexSubFields()">
                    <div class="col-sm-6">{{subfield.label_display}}</div>
                    <div class="col-sm-6 col-padding">
                        <input type="text" class="form-control" v-on:keyup="editSubFieldLabel()" v-model="subfield.label">
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
    import AppHeader from './AppHeader'
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
                        tagname: "h1",
                        textalign: "text-left",
                        subfields: []

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
                        tagname: "input",
                        subfields: []
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
                        tagname: "input",
                        subfields: []
                    },
                    "textarea": {
                        name: "textarea",
                        label: "Textarea",
                        type: "textarea",
                        tagname: "textarea",
                        subfields: []
                    },
                    "checkboxes": {
                        name: "checkboxes",
                        label: "Checkboxes",
                        type: "checkboxes",
                        tagname: "input",
                        options: "Option 1\nOption 2\nOption 3",
                        subfields: []
                    },
                    "radio_buttons": {
                        name: "radio_buttons",
                        label: "Radio Buttons",
                        type: "radio_buttons",
                        tagname: "input",
                        options: "Option 1\nOption 2\nOption 3",
                        subfields: []
                    },
                    "select": {
                        name: "select",
                        label: "Select",
                        type: "select",
                        tagname: "select",
                        options: "Option 1\nOption 2\nOption 3",
                        subfields: []
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
                activeIndexSubFields: function() {

                    return this.fields[this.activeIndex].subfields.filter(function(subfield) {

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
                editSubFieldLabel: function() {

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

                        console.log(this.subfields)

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
                        id: this.fields.length,
                        name: element.name,
                        type: element.type,
                        label: element.label,
                        options: element.options,
                        subfields: element.subfields.slice(0),
                        subheader: element.subheader,
                        subheader_update: true,
                        tagname: element.tagname,
                        textalign: element.textalign,
                        visibility: element.visibility,
                        isFocused: true,
                        order_rank: newIndex
                    });

                    this.$store.commit('updateFields', {fields: this.fields});

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

                },
                updateSubHeader: function(index) {

                    var text = $(".editable-sub-" + index).eq(0).text();

                    this.fields[this.activeIndex].subheader = text;

                    // reupdate text to deal with bug of vue being updated
                    // and rendering text twice
                    $(".editable-sub-" + index).eq(0).text(text);

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

                        that.$store.commit('updateFields', {fields: that.fields});

                        that.elementFocus(newIndex);

                    }

                }

            });

        },
        components: {
            AppHeader
        }
    }

</script>
