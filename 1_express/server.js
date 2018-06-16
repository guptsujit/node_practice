const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public')); // here we can also provide below callback

// this function will execute on "/" path
app.use("/",(req,res,next)=>{
 //next function is neccessary otherwise express will not no where to go after adding public
   res.cookie("cookieNmae","cookieValue");
    next();

});

app.get('/', (req, res) => {
    res.render('simpletext');
})
//displaying json data
app.get('/car', (req, res) => {
    let obj = {
        brands: "brands1",
        models: "models1"
    }
    res.send(obj);
})
//displaying html file
app.get('/signup', (req, res) => {
    html = __dirname + "/index.html";
    res.sendFile(html);
})

//reading param 
app.get('/user/:id/:groupid', (req, res) => {
    let id = req.params.id;
    let groupid = req.params.groupid;
    res.send("userid is" + id + "and group id is" +groupid);
})
//reading query string 
//enter the below url in the browser address bar http://localhost:3000/student/?id=10&groupid=19
//it will give id =10 and groupid = 19 
app.get('/student', (req, res) => {
    let id = req.query.id;
    let groupid = req.query.groupid;
    res.send("userid is" + id + "and group id is" +groupid);
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
    res.send('Page Pattern Match');
 })
// if port is defined it will get defined port otherwise will use 3000
const port = process.env.port || 3000;
app.listen(port);

