const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port =3001;
const enquiry= require('./enquiry');
app.use(cors({
    origin: 'http://localhost:4200',
}));
app.use(bodyParser.json());

var myLogger1 = function (req, res, next) {
    console.log("myLogger1",req.body);
    next()
}
var myLogger2 = function (req, res, next) {
    console.log("myLogger2",req.body);
    next()
}
app.use(myLogger1);
app.use(myLogger2);

app.get('/', function(req,res){
    enquiry.getEnquiry(req.body)
    .then(data=>{
        res.json(data);
    })
})
app.post('/create', function(req,res){
    let data = req.body;
    data.createdAt= new Date();
    enquiry.createEnquiry(data)
    .then (data=>{
        res.json(data);
    })
})

app.post('/search', function(req,res){
    
    
    enquiry.searchEnquiry(req.body.firstName)
    .then (data=>{
        res.json(data);
    });
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`)
})
    
    


