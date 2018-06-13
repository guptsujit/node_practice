const {brands} = require('./brand.js');
const {models} = require('./model.js');
//console.log(brands);//now this will return function
//console.log(models); // this will return models object 

/*module.exports = {
    brands : brands,
    models :models,
}*/
// in es6 if key and value is same then we can ignore value from object
module.exports = {
    brands,
    models,
}