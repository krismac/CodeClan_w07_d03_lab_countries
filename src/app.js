const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();

  const displayDiv = document.querySelector('#country');
  const countryDisplay = new DisplayView(displayDiv);
  countryDisplay.bindEvents();

  const countriesDataSource = new Countries();
  countriesDataSource.getData();
});
