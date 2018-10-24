const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function(container){
  this.container = container;
};


DisplayView.prototype.bindEvents = function(){
  PubSub.subscribe('Country:selected-country-ready', (event) => {
    const country = event.detail;
    this.render(country);
  });
};


module.exports = DisplayView;
