const commandLineArgs = require('command-line-args');
const fs = require('fs');

const optionDefinitions = [
    {name : 'name', type : String},
    {name : 'order', type : String},
    {name : 'payment' , type : Number},
    {name : 'exit', type : Boolean}
];

const filecontent = fs.readFileSync('db.json');
const getJsonData = JSON.parse(filecontent);
let saveIt= (data)=>{
const toString = JSON.stringify(data);
fs.writeFileSync('db.json',toString);
}
//console.log(getJsonData);
const options = commandLineArgs(optionDefinitions);

if(options.name){
    getJsonData.name = options.name;
    saveIt(getJsonData);
    console.log(`Hello ${options.name} , We are serving pizza , burger, sandwitch`);
}else if(options.order){
    getJsonData.order = options.order;
    saveIt(getJsonData);
    console.log(`You have entered ${options.order} , that would be of 25rs. Please enter amount`);  
}else if(options.payment){
    getJsonData.payment = options.payment;
    saveIt(getJsonData);
    if(getJsonData.payment>25){
      const amount = getJsonData.payment-25;
      console.log(`Thank you for payment. Your change would be ${amount} Please enter exit to complete your order`);    
    }else{
       console.log('Please enter sufficiant amount for this order');
    }
  
}else if(options.exit){
    getJsonData.name = '';
    getJsonData.order = '';
    getJsonData.payment = '';
    saveIt(getJsonData);
    console.log(`Thanks. Your order has been placed`);  
}else{
    console.log(`Please enter your name`);  
}