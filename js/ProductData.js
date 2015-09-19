if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    if (!localStorage.getItem('product')) {
        localStorage.setItem('product', JSON.stringify({
            "products": [{
                id: 'lap1'	,
                name: 'Dell Inspiron 3521',
                image: 'static/images/3.jpeg',
                description: "Core I7 Processor,2.2Ghz Speed,6GB Ram, 500GB Hard disk",
                price: '43,290',
                inventory: 10

            },
            {
                id: 'lap2'	,
                name: 'Lenovo Thinkpad',
                image: 'static/images/4.jpeg',
                description: "Core I7 Processor,2.2Ghz Speed,6GB Ram, 500GB Hard disk.",
                price: '60,990',
                inventory: 3
            },
            {
                id: 'lap3'    ,
                name: 'HP 4512',
                image: 'static/images/7.jpeg',
                description: "Core I7 Processor,2.2Ghz Speed,6GB Ram, 500GB Hard disk.",
                price: '40,990',
                inventory: 5
            },
            {
                id: 'lap4'    ,
                name: 'ASUS Ozone',
                image: 'static/images/8.jpeg',
                description: "Core I7 Processor,2.2Ghz Speed,6GB Ram, 500GB Hard disk.",
                price: '38,990',
                inventory: 8
            }]
        }));
    }
  }
};