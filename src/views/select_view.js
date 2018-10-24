const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Country:country-loaded', (event) => {
    const countryData = event.detail;
    this.populate(countryData);
    console.log("countryData", countryData);
  });


  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value.name;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};


SelectView.prototype.populate = function(countryData){
  countryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
