const countries = [
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AS", name: "American Samoa" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AI", name: "Anguilla" },
  { code: "AQ", name: "Antarctica" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AW", name: "Aruba" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BM", name: "Bermuda" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BV", name: "Bouvet Island" },
  { code: "BR", name: "Brazil" },
  { code: "IO", name: "British Indian Ocean Territory" },
  { code: "BN", name: "Brunei Darussalam" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CV", name: "Cabo Verde" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "KY", name: "Cayman Islands" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CX", name: "Christmas Island" },
  { code: "CC", name: "Cocos (Keeling) Islands" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Congo, Democratic Republic of the" },
  { code: "CK", name: "Cook Islands" },
  { code: "CR", name: "Costa Rica" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CW", name: "Curaçao" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czechia" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "SZ", name: "Eswatini" },
  { code: "ET", name: "Ethiopia" },
  { code: "FK", name: "Falkland Islands" },
  { code: "FO", name: "Faroe Islands" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GF", name: "French Guiana" },
  { code: "PF", name: "French Polynesia" },
  { code: "TF", name: "French Southern Territories" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GI", name: "Gibraltar" },
  { code: "GR", name: "Greece" },
  { code: "GL", name: "Greenland" },
  { code: "GD", name: "Grenada" },
  { code: "GP", name: "Guadeloupe" },
  { code: "GU", name: "Guam" },
  { code: "GT", name: "Guatemala" },
  { code: "GG", name: "Guernsey" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HM", name: "Heard Island and McDonald Islands" },
  { code: "VA", name: "Holy See" },
  { code: "HN", name: "Honduras" },
  { code: "HK", name: "Hong Kong" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IM", name: "Isle of Man" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JE", name: "Jersey" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "KP", name: "Korea (North)" },
  { code: "KR", name: "Korea (South)" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Lao People's Democratic Republic" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MO", name: "Macao" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MQ", name: "Martinique" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "YT", name: "Mayotte" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia" },
  { code: "MD", name: "Moldova" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MS", name: "Montserrat" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NC", name: "New Caledonia" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NU", name: "Niue" },
  { code: "NF", name: "Norfolk Island" },
  { code: "MK", name: "North Macedonia" },
  { code: "MP", name: "Northern Mariana Islands" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palau" },
  { code: "PS", name: "Palestine" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PN", name: "Pitcairn" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "PR", name: "Puerto Rico" },
  { code: "QA", name: "Qatar" },
  { code: "RE", name: "Réunion" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russian Federation" },
  { code: "RW", name: "Rwanda" },
  { code: "BL", name: "Saint Barthélemy" },
  { code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "MF", name: "Saint Martin" },
  { code: "PM", name: "Saint Pierre and Miquelon" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapore" },
  { code: "SX", name: "Sint Maarten" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "GS", name: "South Georgia and the South Sandwich Islands" },
  { code: "SS", name: "South Sudan" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SJ", name: "Svalbard and Jan Mayen" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syrian Arab Republic" },
  { code: "TW", name: "Taiwan" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TH", name: "Thailand" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TG", name: "Togo" },
  { code: "TK", name: "Tokelau" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TC", name: "Turks and Caicos Islands" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "UM", name: "United States Minor Outlying Islands" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Viet Nam" },
  { code: "VG", name: "Virgin Islands (British)" },
  { code: "VI", name: "Virgin Islands (U.S.)" },
  { code: "WF", name: "Wallis and Futuna" },
  { code: "EH", name: "Western Sahara" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
  { code: "AX", name: "Åland Islands" }
];

// EU VAT rates
const EU_VAT_RATES = {
  "AT": { standard: 20, countryCode: "AT" }, // Austria
  "BE": { standard: 21, countryCode: "BE" }, // Belgium
  "BG": { standard: 20, countryCode: "BG" }, // Bulgaria
  "HR": { standard: 25, countryCode: "HR" }, // Croatia
  "CY": { standard: 19, countryCode: "CY" }, // Cyprus
  "CZ": { standard: 21, countryCode: "CZ" }, // Czech Republic
  "DK": { standard: 25, countryCode: "DK" }, // Denmark
  "EE": { standard: 24, countryCode: "EE" }, // Estonia
  "FI": { standard: 25.5, countryCode: "FI" }, // Finland
  "FR": { standard: 20, countryCode: "FR" }, // France
  "DE": { standard: 19, countryCode: "DE" }, // Germany
  "GR": { standard: 24, countryCode: "GR" }, // Greece
  "HU": { standard: 27, countryCode: "HU" }, // Hungary
  "IE": { standard: 23, countryCode: "IE" }, // Ireland
  "IT": { standard: 22, countryCode: "IT" }, // Italy
  "LV": { standard: 21, countryCode: "LV" }, // Latvia
  "LT": { standard: 21, countryCode: "LT" }, // Lithuania
  "LU": { standard: 17, countryCode: "LU" }, // Luxembourg
  "MT": { standard: 18, countryCode: "MT" }, // Malta
  "NL": { standard: 21, countryCode: "NL" }, // Netherlands
  "PL": { standard: 23, countryCode: "PL" }, // Poland
  "PT": { standard: 23, countryCode: "PT" }, // Portugal
  "RO": { standard: 21, countryCode: "RO" }, // Romania
  "SK": { standard: 23, countryCode: "SK" }, // Slovakia
  "SI": { standard: 22, countryCode: "SI" }, // Slovenia
  "ES": { standard: 21, countryCode: "ES" }, // Spain
  "SE": { standard: 25, countryCode: "SE" }, // Sweden
};

const EU_COUNTRY_CODES = Object.keys(EU_VAT_RATES);

// State management
let state = {
  invoiceData: {
      invoiceNumber: "0001",
      issueDate: new Date().toISOString().split('T')[0],
      dueDate: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split('T')[0],
      companyLogoUrl: "",
      companyName: "Sunergos IT LLC",
      companyAddress: "Martir Marius Ciopec 18\nsc. C, et. 3, ap. 16\n300732 Timisoara\nsupport@gitdigest.ai",
      companyCountry: "RO",
      customerName: "Acme Inc.",
      customerAddress: "123 Main St\nManhattan, NY 10001\njdoe@acme.com",
      customerCountry: "US",
      customerVat: "",
      items: [
          { id: "1", description: "Lifetime access to Git Digest", quantity: 1, unitPrice: 500.00 }
      ],
      isReverseCharge: true,
      notes: ""
  },
  businesses: [],
  clients: [],
  selectedBusinessId: "",
  selectedClientId: "",
  hasUnsavedBusinessChanges: false,
  hasUnsavedClientChanges: false
};

// Load from localStorage
function loadFromStorage() {
  const savedInvoice = localStorage.getItem('invoiceData');
  if (savedInvoice) {
      try {
          const parsed = JSON.parse(savedInvoice);
          if (parsed.items) {
              state.invoiceData = parsed;
          }
      } catch (e) {
          console.error('Failed to load invoice data:', e);
      }
  }

  const savedStore = localStorage.getItem('invoice-storage');
  if (savedStore) {
      try {
          const parsed = JSON.parse(savedStore);
          state.businesses = parsed.state.businesses || [];
          state.clients = parsed.state.clients || [];
      } catch (e) {
          console.error('Failed to load store data:', e);
      }
  }
}

// Save to localStorage
function saveToStorage() {
  localStorage.setItem('invoiceData', JSON.stringify(state.invoiceData));
  localStorage.setItem('invoice-storage', JSON.stringify({
      state: {
          businesses: state.businesses,
          clients: state.clients
      }
  }));
}

function formatCurrency(number) {
    if (number === null || number === undefined || isNaN(number)) return "$0.00";
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(number));
}

// Update UI from state
function updateUI() {
  // Update form fields
  document.getElementById('invoiceNumber').value = state.invoiceData.invoiceNumber;
  document.getElementById('issueDate').value = state.invoiceData.issueDate;
  document.getElementById('dueDate').value = state.invoiceData.dueDate;
  document.getElementById('companyName').value = state.invoiceData.companyName;
  document.getElementById('companyAddress').value = state.invoiceData.companyAddress;
  document.getElementById('companyCountry').value = state.invoiceData.companyCountry;
  document.getElementById('customerName').value = state.invoiceData.customerName;
  document.getElementById('customerAddress').value = state.invoiceData.customerAddress;
  document.getElementById('customerCountry').value = state.invoiceData.customerCountry;
  document.getElementById('customerVat').value = state.invoiceData.customerVat;
  document.getElementById('reverseCharge').checked = state.invoiceData.isReverseCharge;
  document.getElementById('notes').value = state.invoiceData.notes;

  // Update logo
  updateLogo();

  // Update VAT field visibility
  const isEUCustomer = EU_COUNTRY_CODES.includes(state.invoiceData.customerCountry);
  document.getElementById('customerVat').style.display = isEUCustomer ? 'block' : 'none';

  // Update reverse charge
  updateReverseCharge();

  // Update totals
  updateTotals();

  // Update items table
  renderItems();

  // Update business/client dropdowns
  updateBusinessDropdown();
  updateClientDropdown();

  // Update unsaved changes indicators
  document.getElementById('businessUnsaved').style.display = state.hasUnsavedBusinessChanges ? 'block' : 'none';
  document.getElementById('businessSaveBtn').style.display = state.selectedBusinessId || state.hasUnsavedBusinessChanges ? 'inline-block' : 'none';
  document.getElementById('clientUnsaved').style.display = state.hasUnsavedClientChanges ? 'block' : 'none';
  document.getElementById('clientSaveBtn').style.display = state.selectedClientId || state.hasUnsavedClientChanges ? 'inline-block' : 'none';
}

// Logo handling
function updateLogo() {
  const logoImg = document.getElementById('companyLogoImg');
  const logoSelect = document.getElementById('logoSelect');
  const customLogoUrl = document.getElementById('customLogoUrl');
  
  const isCustom = !['data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20557.3%20179.1%22%20style%3D%22enable-background%3Anew%200%200%20557.3%20179.1%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%2329A9E1%3B%7D.st1%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cpath%20d%3D%22M176.6%2C112.3c-5.6%2C0-11.7-1.8-18.3-5.2l4.2-8.7c3.6%2C2.2%2C9.9%2C5.1%2C15%2C5.1c3.4%2C0%2C6-2.2%2C6-5.1c0-3.1-2.2-4.7-7-5.6l-5.3-1c-3-0.5-6.7-2.7-8.3-4.6c-1.6-1.9-2.6-5.2-2.6-8.1c0-8.9%2C7-14.8%2C17.5-14.8c7.3%2C0%2C12%2C2.2%2C16.2%2C4.2l-3.9%2C8c-4.5-2.3-7.8-3.3-11.2-3.3c-3.5%2C0-5.8%2C1.8-5.8%2C4.4c0%2C2.3%2C1.5%2C3.5%2C5.7%2C4.6l5.5%2C1.4c5.6%2C1.4%2C7.4%2C3.1%2C9%2C5.1c1.7%2C2.1%2C2.5%2C4.7%2C2.5%2C7.7C196%2C105.9%2C188.2%2C112.3%2C176.6%2C112.3z%22%2F%3E%3Cpath%20d%3D%22M234.6%2C112.1c-1.5-1.1-2.7-2.6-3.5-4.4c-2.9%2C2.8-7.2%2C4.3-11.9%2C4.3c-6.4%2C0-11.9-3-13.4-7.3c-0.7-2-1-4.4-1-9v-29l11.7-2.2v29.1c0%2C4.1%2C0.4%2C6.2%2C1%2C7.4c0.6%2C1.2%2C2.4%2C2.1%2C4.2%2C2.1c2.9%2C0%2C6.5-2.1%2C7.3-4.3V66.9l11.3-2.4v34.6c0%2C3%2C1%2C6.1%2C2.7%2C8.2L234.6%2C112.1z%22%2F%3E%3Cpath%20d%3D%22M276.8%2C110.9V81.4c0-5.1-0.9-6.6-4-6.6c-2.4%2C0-5.5%2C1.6-8.2%2C4.1v32h-11.9V78c0-3.9-0.5-7.6-1.6-10.6l10.5-3c1.1%2C1.9%2C1.7%2C3.8%2C1.7%2C5.7c1.8-1.2%2C3.3-2.3%2C5.2-3.4c2.4-1.2%2C5.5-1.9%2C8.1-1.9c5%2C0%2C9.5%2C2.7%2C10.9%2C6.6c0.6%2C1.7%2C0.9%2C3.6%2C0.9%2C6.5v33.1H276.8z%22%2F%3E%3Cpath%20d%3D%22M311.9%2C91.9v0.4c0%2C7%2C3.5%2C11%2C9.6%2C11c4.1%2C0%2C7.9-1.5%2C11.5-4.5l4.6%2C7.1c-5.2%2C4.2-10.7%2C6.3-17.1%2C6.3c-13%2C0-21.4-9.2-21.4-23.5c0-8.1%2C1.7-13.5%2C5.7-18c3.7-4.2%2C8.2-6.1%2C14.3-6.1c5.2%2C0%2C10.2%2C1.8%2C13.1%2C4.8c4.2%2C4.2%2C6%2C10.4%2C6%2C19.8v2.7H311.9z%20M325.8%2C82.7c0-3.4-0.4-5.1-1.4-6.8c-1.2-1.8-2.8-2.7-5.2-2.7c-4.5%2C0-7.1%2C3.5-7.1%2C9.8v0.2h13.7V82.7z%22%2F%3E%3Cpath%20d%3D%22M370%2C75.9c-1.2-0.6-2.1-0.9-3.5-0.9c-2.7%2C0-5%2C1.2-7.3%2C3.8v32h-11.9V80.6c0-6.1-0.7-10.7-1.7-13.3l10.6-2.8c1.1%2C1.9%2C1.7%2C3.9%2C1.9%2C6.5c2.6-3.5%2C6.2-6.5%2C10.6-6.5c1.8%2C0%2C2.6%2C0.2%2C4.4%2C1L370%2C75.9z%22%2F%3E%3Cpath%20d%3D%22M414.1%2C73.9c-1.2%2C0-2.4-0.2-3.1-0.3c1.8%2C2.1%2C2.7%2C4.4%2C2.7%2C7.4c0%2C7.8-7.1%2C13.5-16.7%2C13.5c-0.5%2C0-0.9%2C0-1.8-0.1c-3%2C1.4-4.7%2C2.5-4.7%2C3.7c0%2C0.6%2C0.7%2C1.1%2C1.9%2C1.1l6.4%2C0.1c6.9%2C0.1%2C10.5%2C1.2%2C13.7%2C4.1c2.7%2C2.5%2C3.9%2C5.6%2C3.9%2C9.6c0%2C3.8-1.2%2C6.7-3.6%2C9.4c-4%2C4.2-10.8%2C5.8-17.9%2C5.8c-6.5%2C0-13.1-1.1-17.2-4.9c-2.5-2.3-3.7-5-3.7-8.1c0-2.5%2C0.6-3.7%2C1.1-4.6h11c-0.4%2C1.1-0.5%2C1.7-0.5%2C2.9c0%2C3.6%2C3%2C5.6%2C8.5%2C5.6c3%2C0%2C5.6-0.4%2C7.4-1.5c1.8-1.1%2C2.9-2.7%2C2.9-4.6c0-4.1-3.6-5.3-8.3-5.4l-5-0.1c-5.3-0.1-8.8-0.5-10.9-1.4c-2.1-0.8-3.5-2.8-3.5-5.9c0-2.9%2C0.9-5.7%2C8.3-7.6c-6.6-1.7-9.7-5.8-9.7-12.6c0-9.3%2C7.5-15.3%2C19.1-15.3c2.6%2C0%2C4.9%2C0.4%2C8.1%2C1.2c2.5%2C0.6%2C4.1%2C1%2C5.6%2C1c3.3%2C0%2C6.6-1.4%2C9.4-3.9l5%2C7.5C419.8%2C72.9%2C417.3%2C73.9%2C414.1%2C73.9z%20M394.2%2C73.4c-4.5%2C0-7.1%2C2.5-7.1%2C6.7c0%2C4.6%2C2.8%2C6.5%2C7%2C6.5c4.7%2C0%2C7.3-2.3%2C7.3-6.5C401.4%2C75.9%2C398.8%2C73.4%2C394.2%2C73.4z%22%2F%3E%3Cpath%20d%3D%22M458.7%2C105.6c-3.5%2C3.9-8%2C6.3-15%2C6.3c-12.3%2C0-20.4-9.2-20.4-23.5s8.1-23.7%2C20.4-23.7c6.5%2C0%2C11.5%2C2.2%2C15.4%2C6.8c3.6%2C4.2%2C5.2%2C9.2%2C5.2%2C16.6C464.3%2C95.8%2C462.6%2C101.1%2C458.7%2C105.6z%20M449%2C75.8c-1.2-1.5-3-2.4-5.1-2.4c-2.8%2C0-5.1%2C1.8-6.1%2C4.6c-0.8%2C2.4-1.2%2C5.6-1.2%2C10.1c0%2C5.2%2C0.5%2C9.1%2C1.5%2C11.4c1.1%2C2.5%2C3.7%2C3.7%2C6%2C3.7c5.1%2C0%2C7.3-4.6%2C7.3-15.3C451.4%2C81.8%2C450.6%2C77.9%2C449%2C75.8z%22%2F%3E%3Cpath%20d%3D%22M488.4%2C112.3c-5.6%2C0-11.7-1.8-18.3-5.2l4.2-8.7c3.6%2C2.2%2C9.9%2C5.1%2C15%2C5.1c3.4%2C0%2C6-2.2%2C6-5.1c0-3.1-2.2-4.7-7-5.6l-5.3-1c-3-0.5-6.7-2.7-8.3-4.6c-1.6-1.9-2.6-5.2-2.6-8.1c0-8.9%2C7-14.8%2C17.5-14.8c7.3%2C0%2C12%2C2.2%2C16.2%2C4.2l-3.9%2C8c-4.5-2.3-7.8-3.3-11.2-3.3c-3.5%2C0-5.8%2C1.8-5.8%2C4.4c0%2C2.3%2C1.5%2C3.5%2C5.7%2C4.6l5.5%2C1.4c5.6%2C1.4%2C7.4%2C3.1%2C9%2C5.1c1.7%2C2.1%2C2.5%2C4.7%2C2.5%2C7.7C507.8%2C105.9%2C500%2C112.3%2C488.4%2C112.3z%22%2F%3E%3C%2Fg%3E%3Ccircle%20class%3D%22st0%22%20cx%3D%2289.6%22%20cy%3D%2289.6%22%20r%3D%2240.1%22%2F%3E%3Cpath%20d%3D%22M98.6%2C81.7l-1.9-1.3l-7-5.2c-7.1-5.2-8.2-8.7-8.2-13.5c0%2C0%2C0-0.1%2C0-0.1c1.8%2C2%2C4.4%2C3.3%2C8%2C3.3c6.6%2C0%2C11.2-4.9%2C11.2-11.3c0-0.9-0.1-1.7-0.3-2.5c8.8%2C2%2C13.9%2C6.6%2C16.2%2C8.7c0-8.6%2C0.9-18.4%2C1.3-20c-1.1%2C0-4.1-0.4-9.3-1.2c-3.6-0.7-8.1-1.2-13.8-1.2c-20.2%2C0-32.4%2C12.9-32.4%2C28.3c0%2C9.9%2C3.4%2C19.5%2C18.7%2C29.2l1.3%2C0.8l7.2%2C4.8c8.5%2C5.9%2C10.3%2C9.8%2C10.3%2C15.1c0%2C1.4-0.2%2C2.7-0.5%2C3.9c-1.8-3.6-5.4-6.1-9.9-6.1c-7.8%2C0-11%2C6.3-11%2C11.3c0%2C0.9%2C0.1%2C1.7%2C0.3%2C2.6c-7.7-1.6-14.2-5.7-18.4-10.4c0.1%2C6.9-0.9%2C16.1-1.5%2C18.6c5.3%2C3.6%2C16.6%2C5.8%2C25.5%2C5.8c6.1%2C0%2C15-1.3%2C22.2-5.7c9.7-6.1%2C13.5-16.6%2C13.5-24.7C120.2%2C99.8%2C115.4%2C92.2%2C98.6%2C81.7z%22%2F%3E%3Cpolygon%20class%3D%22st1%22%20points%3D%2289.6%2C69.3%2097.5%2C80.9%20111%2C84.8%20102.4%2C95.8%20102.8%2C109.8%2089.6%2C105.1%2076.5%2C109.8%2076.9%2C95.8%2068.3%2C84.8%2081.8%2C80.9%20%22%2F%3E%3C%2Fsvg%3E', ''].includes(state.invoiceData.companyLogoUrl);

  if (isCustom) {
      logoSelect.value = 'custom';
      customLogoUrl.style.display = 'block';
      customLogoUrl.value = state.invoiceData.companyLogoUrl;
  } else {
      logoSelect.value = state.invoiceData.companyLogoUrl;
      customLogoUrl.style.display = 'none';
  }

  if (state.invoiceData.companyLogoUrl && isValidImageUrl(state.invoiceData.companyLogoUrl)) {
      logoImg.src = state.invoiceData.companyLogoUrl;
      logoImg.style.display = 'block';
  } else {
      logoImg.style.display = 'none';
  }
}

function isValidImageUrl(url) {
  if (!url) return false;
  if (url.startsWith('/') || url.startsWith('data:')) return true;
  try {
      new URL(url);
      return true;
  } catch {
      return false;
  }
}

// VAT and reverse charge
function updateReverseCharge() {
  const isEUCompany = EU_COUNTRY_CODES.includes(state.invoiceData.companyCountry);
  const isEUCustomer = EU_COUNTRY_CODES.includes(state.invoiceData.customerCountry);
  const hasVat = !!state.invoiceData.customerVat;
  const differentCountries = state.invoiceData.companyCountry !== state.invoiceData.customerCountry;

  const reverseChargeCheckbox = document.getElementById('reverseCharge');
  const reverseChargeNote = document.getElementById('reverseChargeNote');

  // Enable/disable checkbox
  reverseChargeCheckbox.disabled = !isEUCompany || !isEUCustomer || !hasVat || !differentCountries;

  // Show/hide note
  if (isEUCompany && isEUCustomer && hasVat && differentCountries) {
      reverseChargeNote.style.display = 'inline';
  } else {
      reverseChargeNote.style.display = 'none';
  }
}

function shouldApplyVAT() {
  const isEUCompany = EU_COUNTRY_CODES.includes(state.invoiceData.companyCountry);
  const isEUCustomer = EU_COUNTRY_CODES.includes(state.invoiceData.customerCountry);

  // B2C: EU company selling to EU customer - always apply VAT
  if (isEUCompany && isEUCustomer && !state.invoiceData.customerVat) {
      return true;
  }

  // B2B: EU company selling to EU business with VAT number - reverse charge
  if (isEUCompany && isEUCustomer && state.invoiceData.customerVat && state.invoiceData.customerCountry !== state.invoiceData.companyCountry) {
      return false; // Reverse charge applies
  }

  // B2B: Same country - always apply VAT
  if (isEUCompany && isEUCustomer && state.invoiceData.customerCountry === state.invoiceData.companyCountry) {
      return true;
  }

  return false;
}

function getApplicableVATRate() {
  if (!shouldApplyVAT()) return 0;

  const isEUCompany = EU_COUNTRY_CODES.includes(state.invoiceData.companyCountry);
  if (isEUCompany && EU_VAT_RATES[state.invoiceData.companyCountry]) {
      return EU_VAT_RATES[state.invoiceData.companyCountry].standard;
  }

  return 0;
}

// Calculate totals
function updateTotals() {
  const subtotal = state.invoiceData.items.reduce((acc, item) => {
      const quantity = Number(item.quantity) || 0;
      const unitPrice = Number(item.unitPrice) || 0;
      return acc + (quantity * unitPrice);
  }, 0);
  
  const taxRate = getApplicableVATRate();
  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount;

  // Update DOM elements with proper null checks
  const subtotalEl = document.getElementById('subtotal');
  const taxRateEl = document.getElementById('taxRate');
  const taxAmountEl = document.getElementById('taxAmount');
  const totalEl = document.getElementById('total');
  const amountDueEl = document.getElementById('amountDue');
  const totalDueEl = document.getElementById('totalDue');

  if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
  if (taxRateEl) taxRateEl.textContent = taxRate;
  if (taxAmountEl) taxAmountEl.textContent = formatCurrency(taxAmount);
  if (totalEl) totalEl.textContent = formatCurrency(total);
  if (amountDueEl) amountDueEl.textContent = formatCurrency(total);

  // Update due date text
  if (totalDueEl) {
      const dueDate = new Date(state.invoiceData.dueDate);
      const dueDateText = dueDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
      totalDueEl.innerHTML = `${formatCurrency(total)} due ${dueDateText}`;
  }
}

// Items management
function renderItems() {
  const tbody = document.getElementById('itemsTableBody');
  tbody.innerHTML = '';

  const taxRate = getApplicableVATRate();
  const isEUCustomer = EU_COUNTRY_CODES.includes(state.invoiceData.customerCountry);

  state.invoiceData.items.forEach((item, index) => {
      const quantity = Number(item.quantity) || 0;
      const unitPrice = Number(item.unitPrice) || 0;
      const itemTotal = quantity * unitPrice;
      
      const tr = document.createElement('tr');
      tr.className = 'border-b border-gray-200';
      tr.innerHTML = `
          <td class="p-1 sm:p-2 align-top">
              <textarea data-item-id="${item.id}" data-field="description" placeholder="Product or service description\nAdd details here..." class="text-sm editable-textarea">${item.description}</textarea>
          </td>
          <td class="p-1 sm:p-2 align-top text-right">
              <input type="number" data-item-id="${item.id}" data-field="quantity" value="${quantity}" placeholder="1" class="w-12 sm:w-16 text-right text-xs sm:text-base">
          </td>
          <td class="p-1 sm:p-2 align-top text-right">
              <input type="number" data-item-id="${item.id}" data-field="unitPrice" value="${unitPrice}" placeholder="0.00" step="0.01" class="w-16 sm:w-24 text-right text-xs sm:text-base">
          </td>
          <td class="p-1 sm:p-2 align-top text-right text-xs sm:text-sm text-gray-600">
              ${shouldApplyVAT() ? `${taxRate}%` : (isEUCustomer && state.invoiceData.isReverseCharge ? '0%<sup>[1]</sup>' : '0%')}
          </td>
          <td class="p-1 sm:p-2 align-top text-right text-xs sm:text-sm text-gray-800">${formatCurrency(itemTotal)}</td>
          ${index > 0 ? `<td class="p-1 sm:p-2 align-top text-right no-print"><button onclick="removeItem('${item.id}')" class="btn-remove">&times;</button></td>` : '<td></td>'}
      `;
      tbody.appendChild(tr);
  });

  // Add event listeners to item fields
  document.querySelectorAll('[data-item-id]').forEach(el => {
      el.addEventListener('input', (e) => {
          const itemId = e.target.dataset.itemId;
          const field = e.target.dataset.field;
          const value = field === 'description' ? e.target.value : (parseFloat(e.target.value) || 0);
          
          // Update the item in state
          state.invoiceData.items = state.invoiceData.items.map(item =>
              item.id === itemId ? { ...item, [field]: value } : item
          );
          
          // If quantity or unit price changed, update the amount display
          if (field === 'quantity' || field === 'unitPrice') {
              const item = state.invoiceData.items.find(item => item.id === itemId);
              if (item) {
                  const quantity = Number(item.quantity) || 0;
                  const unitPrice = Number(item.unitPrice) || 0;
                  const itemTotal = quantity * unitPrice;
                  // Find the amount cell for this item and update it
                  const row = e.target.closest('tr');
                  const amountCell = row.querySelector('td:nth-last-child(2)');
                  if (amountCell) {
                      amountCell.textContent = formatCurrency(itemTotal);
                  }
              }
          }
          
          saveToStorage();
          updateTotals();
      });
  });
}

function addItem() {
  const newItem = {
      id: Date.now().toString(),
      description: "",
      quantity: 1,
      unitPrice: 0
  };
  state.invoiceData.items.push(newItem);
  saveToStorage();
  renderItems();
  updateTotals();
}

function removeItem(itemId) {
  state.invoiceData.items = state.invoiceData.items.filter(item => item.id !== itemId);
  saveToStorage();
  renderItems();
  updateTotals();
}

// Business/Client management
function updateBusinessDropdown() {
  const select = document.getElementById('businessSelect');
  const currentValue = select.value;
  
  // Clear options except first two
  while (select.options.length > 2) {
      select.remove(2);
  }
  
  // Add businesses
  state.businesses.forEach(business => {
      const option = document.createElement('option');
      option.value = business.id;
      option.textContent = business.name;
      select.appendChild(option);
  });
  
  select.value = currentValue || '';
}

function updateClientDropdown() {
  const select = document.getElementById('clientSelect');
  const currentValue = select.value;
  
  // Clear options except first two
  while (select.options.length > 2) {
      select.remove(2);
  }
  
  // Add clients
  state.clients.forEach(client => {
      const option = document.createElement('option');
      option.value = client.id;
      option.textContent = client.name;
      select.appendChild(option);
  });
  
  select.value = currentValue || '';
}

function checkBusinessChanges() {
  if (!state.selectedBusinessId || state.selectedBusinessId === "new") {
      state.hasUnsavedBusinessChanges = false;
      return;
  }

  const business = state.businesses.find(b => b.id === state.selectedBusinessId);
  if (business) {
      state.hasUnsavedBusinessChanges = 
          business.name !== state.invoiceData.companyName ||
          business.address !== state.invoiceData.companyAddress ||
          business.country !== state.invoiceData.companyCountry ||
          business.logoUrl !== state.invoiceData.companyLogoUrl;
  }
}

function checkClientChanges() {
  if (!state.selectedClientId || state.selectedClientId === "new") {
      state.hasUnsavedClientChanges = false;
      return;
  }

  const client = state.clients.find(c => c.id === state.selectedClientId);
  if (client) {
      state.hasUnsavedClientChanges = 
          client.name !== state.invoiceData.customerName ||
          client.address !== state.invoiceData.customerAddress ||
          client.country !== state.invoiceData.customerCountry ||
          client.vat !== state.invoiceData.customerVat;
  }
}

// Initialize
function init() {
  // Load data
  loadFromStorage();

  // Populate country dropdowns
  const companyCountrySelect = document.getElementById('companyCountry');
  const customerCountrySelect = document.getElementById('customerCountry');
  
  countries.forEach(country => {
      const option1 = document.createElement('option');
      option1.value = country.code;
      option1.textContent = country.name;
      companyCountrySelect.appendChild(option1);

      const option2 = document.createElement('option');
      option2.value = country.code;
      option2.textContent = country.name;
      customerCountrySelect.appendChild(option2);
  });

  // Set initial values
  updateUI();

  // Add event listeners
  // Invoice fields
  document.getElementById('invoiceNumber').addEventListener('input', (e) => {
      state.invoiceData.invoiceNumber = e.target.value;
      saveToStorage();
  });

  document.getElementById('issueDate').addEventListener('change', (e) => {
      state.invoiceData.issueDate = e.target.value;
      saveToStorage();
  });

  document.getElementById('dueDate').addEventListener('change', (e) => {
      state.invoiceData.dueDate = e.target.value;
      saveToStorage();
      updateTotals();
  });

  document.getElementById('companyName').addEventListener('input', (e) => {
      state.invoiceData.companyName = e.target.value;
      saveToStorage();
      checkBusinessChanges();
      updateUI();
  });

  document.getElementById('companyAddress').addEventListener('input', (e) => {
      state.invoiceData.companyAddress = e.target.value;
      saveToStorage();
      checkBusinessChanges();
      updateUI();
  });

  document.getElementById('companyCountry').addEventListener('change', (e) => {
      state.invoiceData.companyCountry = e.target.value;
      
      // Update reverse charge
      const isEUCompany = EU_COUNTRY_CODES.includes(e.target.value);
      const isEUCustomer = EU_COUNTRY_CODES.includes(state.invoiceData.customerCountry);
      const hasVat = !!state.invoiceData.customerVat;
      const differentCountries = e.target.value !== state.invoiceData.customerCountry;
      
      if (isEUCompany && isEUCustomer && hasVat && differentCountries) {
          state.invoiceData.isReverseCharge = true;
          state.invoiceData.notes = "Tax to be paid on a reverse-charge basis";
      } else if (state.invoiceData.notes === "Tax to be paid on a reverse-charge basis") {
          state.invoiceData.isReverseCharge = false;
          state.invoiceData.notes = "";
      }
      
      saveToStorage();
      checkBusinessChanges();
      updateUI();
  });

  document.getElementById('customerName').addEventListener('input', (e) => {
      state.invoiceData.customerName = e.target.value;
      saveToStorage();
      checkClientChanges();
      updateUI();
  });

  document.getElementById('customerAddress').addEventListener('input', (e) => {
      state.invoiceData.customerAddress = e.target.value;
      saveToStorage();
      checkClientChanges();
      updateUI();
  });

  document.getElementById('customerCountry').addEventListener('change', (e) => {
      state.invoiceData.customerCountry = e.target.value;
      
      // Update reverse charge
      const isEUCompany = EU_COUNTRY_CODES.includes(state.invoiceData.companyCountry);
      const isEUCustomer = EU_COUNTRY_CODES.includes(e.target.value);
      const hasVat = !!state.invoiceData.customerVat;
      const differentCountries = state.invoiceData.companyCountry !== e.target.value;
      
      if (isEUCompany && isEUCustomer && hasVat && differentCountries) {
          state.invoiceData.isReverseCharge = true;
          state.invoiceData.notes = "Tax to be paid on a reverse-charge basis";
      } else if (state.invoiceData.notes === "Tax to be paid on a reverse-charge basis") {
          state.invoiceData.isReverseCharge = false;
          state.invoiceData.notes = "";
      }
      
      saveToStorage();
      checkClientChanges();
      updateUI();
  });

  document.getElementById('customerVat').addEventListener('input', (e) => {
      state.invoiceData.customerVat = e.target.value;
      
      // Update reverse charge
      const isEUCompany = EU_COUNTRY_CODES.includes(state.invoiceData.companyCountry);
      const isEUCustomer = EU_COUNTRY_CODES.includes(state.invoiceData.customerCountry);
      const hasVat = !!e.target.value;
      const differentCountries = state.invoiceData.companyCountry !== state.invoiceData.customerCountry;
      
      if (isEUCompany && isEUCustomer && hasVat && differentCountries) {
          state.invoiceData.isReverseCharge = true;
          state.invoiceData.notes = "Tax to be paid on a reverse-charge basis";
      } else if (state.invoiceData.notes === "Tax to be paid on a reverse-charge basis") {
          state.invoiceData.isReverseCharge = false;
          state.invoiceData.notes = "";
      }
      
      saveToStorage();
      checkClientChanges();
      updateUI();
  });

  document.getElementById('reverseCharge').addEventListener('change', (e) => {
      state.invoiceData.isReverseCharge = e.target.checked;
      if (e.target.checked) {
          state.invoiceData.notes = "Tax to be paid on a reverse-charge basis";
      } else if (state.invoiceData.notes === "Tax to be paid on a reverse-charge basis") {
          state.invoiceData.notes = "";
      }
      saveToStorage();
      updateUI();
  });

  document.getElementById('notes').addEventListener('input', (e) => {
      state.invoiceData.notes = e.target.value;
      saveToStorage();
  });

  // Logo handling
  document.getElementById('logoSelect').addEventListener('change', (e) => {
      if (e.target.value === 'custom') {
          state.invoiceData.companyLogoUrl = 'https://';
      } else {
          state.invoiceData.companyLogoUrl = e.target.value;
      }
      saveToStorage();
      checkBusinessChanges();
      updateUI();
  });

  document.getElementById('customLogoUrl').addEventListener('input', (e) => {
      state.invoiceData.companyLogoUrl = e.target.value;
      saveToStorage();
      checkBusinessChanges();
      updateUI();
  });

  // Business/Client selectors
  document.getElementById('businessSelect').addEventListener('change', (e) => {
      const businessId = e.target.value;
      state.selectedBusinessId = businessId;

      if (businessId === "new") {
          // Reset to default
          state.invoiceData.companyName = "Sunergos IT LLC";
          state.invoiceData.companyAddress = "Martir Marius Ciopec 18\nsc. C, et. 3, ap. 16\n300732 Timisoara\nsupport@gitdigest.ai";
          state.invoiceData.companyCountry = "RO";
          state.invoiceData.companyLogoUrl = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20557.3%20179.1%22%20style%3D%22enable-background%3Anew%200%200%20557.3%20179.1%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%2329A9E1%3B%7D.st1%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cpath%20d%3D%22M176.6%2C112.3c-5.6%2C0-11.7-1.8-18.3-5.2l4.2-8.7c3.6%2C2.2%2C9.9%2C5.1%2C15%2C5.1c3.4%2C0%2C6-2.2%2C6-5.1c0-3.1-2.2-4.7-7-5.6l-5.3-1c-3-0.5-6.7-2.7-8.3-4.6c-1.6-1.9-2.6-5.2-2.6-8.1c0-8.9%2C7-14.8%2C17.5-14.8c7.3%2C0%2C12%2C2.2%2C16.2%2C4.2l-3.9%2C8c-4.5-2.3-7.8-3.3-11.2-3.3c-3.5%2C0-5.8%2C1.8-5.8%2C4.4c0%2C2.3%2C1.5%2C3.5%2C5.7%2C4.6l5.5%2C1.4c5.6%2C1.4%2C7.4%2C3.1%2C9%2C5.1c1.7%2C2.1%2C2.5%2C4.7%2C2.5%2C7.7C196%2C105.9%2C188.2%2C112.3%2C176.6%2C112.3z%22%2F%3E%3Cpath%20d%3D%22M234.6%2C112.1c-1.5-1.1-2.7-2.6-3.5-4.4c-2.9%2C2.8-7.2%2C4.3-11.9%2C4.3c-6.4%2C0-11.9-3-13.4-7.3c-0.7-2-1-4.4-1-9v-29l11.7-2.2v29.1c0%2C4.1%2C0.4%2C6.2%2C1%2C7.4c0.6%2C1.2%2C2.4%2C2.1%2C4.2%2C2.1c2.9%2C0%2C6.5-2.1%2C7.3-4.3V66.9l11.3-2.4v34.6c0%2C3%2C1%2C6.1%2C2.7%2C8.2L234.6%2C112.1z%22%2F%3E%3Cpath%20d%3D%22M276.8%2C110.9V81.4c0-5.1-0.9-6.6-4-6.6c-2.4%2C0-5.5%2C1.6-8.2%2C4.1v32h-11.9V78c0-3.9-0.5-7.6-1.6-10.6l10.5-3c1.1%2C1.9%2C1.7%2C3.8%2C1.7%2C5.7c1.8-1.2%2C3.3-2.3%2C5.2-3.4c2.4-1.2%2C5.5-1.9%2C8.1-1.9c5%2C0%2C9.5%2C2.7%2C10.9%2C6.6c0.6%2C1.7%2C0.9%2C3.6%2C0.9%2C6.5v33.1H276.8z%22%2F%3E%3Cpath%20d%3D%22M311.9%2C91.9v0.4c0%2C7%2C3.5%2C11%2C9.6%2C11c4.1%2C0%2C7.9-1.5%2C11.5-4.5l4.6%2C7.1c-5.2%2C4.2-10.7%2C6.3-17.1%2C6.3c-13%2C0-21.4-9.2-21.4-23.5c0-8.1%2C1.7-13.5%2C5.7-18c3.7-4.2%2C8.2-6.1%2C14.3-6.1c5.2%2C0%2C10.2%2C1.8%2C13.1%2C4.8c4.2%2C4.2%2C6%2C10.4%2C6%2C19.8v2.7H311.9z%20M325.8%2C82.7c0-3.4-0.4-5.1-1.4-6.8c-1.2-1.8-2.8-2.7-5.2-2.7c-4.5%2C0-7.1%2C3.5-7.1%2C9.8v0.2h13.7V82.7z%22%2F%3E%3Cpath%20d%3D%22M370%2C75.9c-1.2-0.6-2.1-0.9-3.5-0.9c-2.7%2C0-5%2C1.2-7.3%2C3.8v32h-11.9V80.6c0-6.1-0.7-10.7-1.7-13.3l10.6-2.8c1.1%2C1.9%2C1.7%2C3.9%2C1.9%2C6.5c2.6-3.5%2C6.2-6.5%2C10.6-6.5c1.8%2C0%2C2.6%2C0.2%2C4.4%2C1L370%2C75.9z%22%2F%3E%3Cpath%20d%3D%22M414.1%2C73.9c-1.2%2C0-2.4-0.2-3.1-0.3c1.8%2C2.1%2C2.7%2C4.4%2C2.7%2C7.4c0%2C7.8-7.1%2C13.5-16.7%2C13.5c-0.5%2C0-0.9%2C0-1.8-0.1c-3%2C1.4-4.7%2C2.5-4.7%2C3.7c0%2C0.6%2C0.7%2C1.1%2C1.9%2C1.1l6.4%2C0.1c6.9%2C0.1%2C10.5%2C1.2%2C13.7%2C4.1c2.7%2C2.5%2C3.9%2C5.6%2C3.9%2C9.6c0%2C3.8-1.2%2C6.7-3.6%2C9.4c-4%2C4.2-10.8%2C5.8-17.9%2C5.8c-6.5%2C0-13.1-1.1-17.2-4.9c-2.5-2.3-3.7-5-3.7-8.1c0-2.5%2C0.6-3.7%2C1.1-4.6h11c-0.4%2C1.1-0.5%2C1.7-0.5%2C2.9c0%2C3.6%2C3%2C5.6%2C8.5%2C5.6c3%2C0%2C5.6-0.4%2C7.4-1.5c1.8-1.1%2C2.9-2.7%2C2.9-4.6c0-4.1-3.6-5.3-8.3-5.4l-5-0.1c-5.3-0.1-8.8-0.5-10.9-1.4c-2.1-0.8-3.5-2.8-3.5-5.9c0-2.9%2C0.9-5.7%2C8.3-7.6c-6.6-1.7-9.7-5.8-9.7-12.6c0-9.3%2C7.5-15.3%2C19.1-15.3c2.6%2C0%2C4.9%2C0.4%2C8.1%2C1.2c2.5%2C0.6%2C4.1%2C1%2C5.6%2C1c3.3%2C0%2C6.6-1.4%2C9.4-3.9l5%2C7.5C419.8%2C72.9%2C417.3%2C73.9%2C414.1%2C73.9z%20M394.2%2C73.4c-4.5%2C0-7.1%2C2.5-7.1%2C6.7c0%2C4.6%2C2.8%2C6.5%2C7%2C6.5c4.7%2C0%2C7.3-2.3%2C7.3-6.5C401.4%2C75.9%2C398.8%2C73.4%2C394.2%2C73.4z%22%2F%3E%3Cpath%20d%3D%22M458.7%2C105.6c-3.5%2C3.9-8%2C6.3-15%2C6.3c-12.3%2C0-20.4-9.2-20.4-23.5s8.1-23.7%2C20.4-23.7c6.5%2C0%2C11.5%2C2.2%2C15.4%2C6.8c3.6%2C4.2%2C5.2%2C9.2%2C5.2%2C16.6C464.3%2C95.8%2C462.6%2C101.1%2C458.7%2C105.6z%20M449%2C75.8c-1.2-1.5-3-2.4-5.1-2.4c-2.8%2C0-5.1%2C1.8-6.1%2C4.6c-0.8%2C2.4-1.2%2C5.6-1.2%2C10.1c0%2C5.2%2C0.5%2C9.1%2C1.5%2C11.4c1.1%2C2.5%2C3.7%2C3.7%2C6%2C3.7c5.1%2C0%2C7.3-4.6%2C7.3-15.3C451.4%2C81.8%2C450.6%2C77.9%2C449%2C75.8z%22%2F%3E%3Cpath%20d%3D%22M488.4%2C112.3c-5.6%2C0-11.7-1.8-18.3-5.2l4.2-8.7c3.6%2C2.2%2C9.9%2C5.1%2C15%2C5.1c3.4%2C0%2C6-2.2%2C6-5.1c0-3.1-2.2-4.7-7-5.6l-5.3-1c-3-0.5-6.7-2.7-8.3-4.6c-1.6-1.9-2.6-5.2-2.6-8.1c0-8.9%2C7-14.8%2C17.5-14.8c7.3%2C0%2C12%2C2.2%2C16.2%2C4.2l-3.9%2C8c-4.5-2.3-7.8-3.3-11.2-3.3c-3.5%2C0-5.8%2C1.8-5.8%2C4.4c0%2C2.3%2C1.5%2C3.5%2C5.7%2C4.6l5.5%2C1.4c5.6%2C1.4%2C7.4%2C3.1%2C9%2C5.1c1.7%2C2.1%2C2.5%2C4.7%2C2.5%2C7.7C507.8%2C105.9%2C500%2C112.3%2C488.4%2C112.3z%22%2F%3E%3C%2Fg%3E%3Ccircle%20class%3D%22st0%22%20cx%3D%2289.6%22%20cy%3D%2289.6%22%20r%3D%2240.1%22%2F%3E%3Cpath%20d%3D%22M98.6%2C81.7l-1.9-1.3l-7-5.2c-7.1-5.2-8.2-8.7-8.2-13.5c0%2C0%2C0-0.1%2C0-0.1c1.8%2C2%2C4.4%2C3.3%2C8%2C3.3c6.6%2C0%2C11.2-4.9%2C11.2-11.3c0-0.9-0.1-1.7-0.3-2.5c8.8%2C2%2C13.9%2C6.6%2C16.2%2C8.7c0-8.6%2C0.9-18.4%2C1.3-20c-1.1%2C0-4.1-0.4-9.3-1.2c-3.6-0.7-8.1-1.2-13.8-1.2c-20.2%2C0-32.4%2C12.9-32.4%2C28.3c0%2C9.9%2C3.4%2C19.5%2C18.7%2C29.2l1.3%2C0.8l7.2%2C4.8c8.5%2C5.9%2C10.3%2C9.8%2C10.3%2C15.1c0%2C1.4-0.2%2C2.7-0.5%2C3.9c-1.8-3.6-5.4-6.1-9.9-6.1c-7.8%2C0-11%2C6.3-11%2C11.3c0%2C0.9%2C0.1%2C1.7%2C0.3%2C2.6c-7.7-1.6-14.2-5.7-18.4-10.4c0.1%2C6.9-0.9%2C16.1-1.5%2C18.6c5.3%2C3.6%2C16.6%2C5.8%2C25.5%2C5.8c6.1%2C0%2C15-1.3%2C22.2-5.7c9.7-6.1%2C13.5-16.6%2C13.5-24.7C120.2%2C99.8%2C115.4%2C92.2%2C98.6%2C81.7z%22%2F%3E%3Cpolygon%20class%3D%22st1%22%20points%3D%2289.6%2C69.3%2097.5%2C80.9%20111%2C84.8%20102.4%2C95.8%20102.8%2C109.8%2089.6%2C105.1%2076.5%2C109.8%2076.9%2C95.8%2068.3%2C84.8%2081.8%2C80.9%20%22%2F%3E%3C%2Fsvg%3E";
          state.hasUnsavedBusinessChanges = false;
      } else if (businessId) {
          const business = state.businesses.find(b => b.id === businessId);
          if (business) {
              state.invoiceData.companyName = business.name;
              state.invoiceData.companyAddress = business.address;
              state.invoiceData.companyCountry = business.country;
              state.invoiceData.companyLogoUrl = business.logoUrl;
              state.hasUnsavedBusinessChanges = false;
          }
      }

      saveToStorage();
      updateUI();
  });

  document.getElementById('clientSelect').addEventListener('change', (e) => {
      const clientId = e.target.value;
      state.selectedClientId = clientId;

      if (clientId === "new") {
          // Reset to default
          state.invoiceData.customerName = "Acme Inc.";
          state.invoiceData.customerAddress = "123 Main St\nManhattan, NY 10001\njdoe@acme.com";
          state.invoiceData.customerCountry = "US";
          state.invoiceData.customerVat = "";
          state.hasUnsavedClientChanges = false;
      } else if (clientId) {
          const client = state.clients.find(c => c.id === clientId);
          if (client) {
              state.invoiceData.customerName = client.name;
              state.invoiceData.customerAddress = client.address;
              state.invoiceData.customerCountry = client.country;
              state.invoiceData.customerVat = client.vat;
              state.hasUnsavedClientChanges = false;
          }
      }

      saveToStorage();
      updateUI();
  });

  // Save buttons
  document.getElementById('businessSaveBtn').addEventListener('click', () => {
      if (state.selectedBusinessId && state.selectedBusinessId !== "new") {
          // Update existing
          state.businesses = state.businesses.map(b => 
              b.id === state.selectedBusinessId ? {
                  ...b,
                  name: state.invoiceData.companyName,
                  address: state.invoiceData.companyAddress,
                  country: state.invoiceData.companyCountry,
                  logoUrl: state.invoiceData.companyLogoUrl
              } : b
          );
      } else {
          // Add new
          const newBusiness = {
              id: Date.now().toString(),
              name: state.invoiceData.companyName,
              address: state.invoiceData.companyAddress,
              country: state.invoiceData.companyCountry,
              logoUrl: state.invoiceData.companyLogoUrl
          };
          state.businesses.push(newBusiness);
          state.selectedBusinessId = newBusiness.id;
      }
      state.hasUnsavedBusinessChanges = false;
      saveToStorage();
      updateUI();
  });

  document.getElementById('clientSaveBtn').addEventListener('click', () => {
      if (state.selectedClientId && state.selectedClientId !== "new") {
          // Update existing
          state.clients = state.clients.map(c => 
              c.id === state.selectedClientId ? {
                  ...c,
                  name: state.invoiceData.customerName,
                  address: state.invoiceData.customerAddress,
                  country: state.invoiceData.customerCountry,
                  vat: state.invoiceData.customerVat
              } : c
          );
      } else {
          // Add new
          const newClient = {
              id: Date.now().toString(),
              name: state.invoiceData.customerName,
              address: state.invoiceData.customerAddress,
              country: state.invoiceData.customerCountry,
              vat: state.invoiceData.customerVat
          };
          state.clients.push(newClient);
          state.selectedClientId = newClient.id;
      }
      state.hasUnsavedClientChanges = false;
      saveToStorage();
      updateUI();
  });

  // Add event listeners for print and add item buttons
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', function() {
      window.print();
    });
  }

  const addItemBtn = document.getElementById('addItemBtn');
  if (addItemBtn) {
    addItemBtn.addEventListener('click', function() {
      addItem();
    });
  }
}

// Make removeItem available globally for dynamically created buttons
window.removeItem = removeItem;

// Start the app
document.addEventListener('DOMContentLoaded', init);
