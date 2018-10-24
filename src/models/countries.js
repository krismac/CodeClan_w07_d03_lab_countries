const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Countries = function () {
  this.countries = null;
}

Countries.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((countryData) => {
      console.log(countryData);
  this.countries = countryData; //store is in the variable above, referencing the .joke data item from the array
  PubSub.publish('Country:country-loaded', this.countries);

});
}
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishCountryDetail(selectedIndex);
  });

Countries.prototype.publishCountryDetail = function(countryIndex){
  const selectedCountry = this.country[countryIndex];
  PubSub.publish('Country:selected-country-ready', selectedCountry)
};

module.exports = Countries;
