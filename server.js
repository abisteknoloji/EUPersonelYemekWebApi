
var http= require('http');
var request = require("request")
var cheerio = require("cheerio");
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.type('text/json');
    request("http://www.erciyes.edu.tr/kategori/KAMPUSTE-YASAM/Yemek-Hizmetleri/22/167",function (error,response,html){
    
        if (!error && response.statusCode == 200) {
    
            var $ = cheerio.load(html);
            var yemek=$(".Personel .ListeSatir")[0];
            res.send($(yemek).text());
        
        }
        else 
        
            console.log(error);
            
        
        
    });//endgit ofrequest
});

var port = process.env.port ||   process.env.PORT  || 1337;

http.createServer(app).listen(port , function(){
  console.log('Express server listening on port ' + port);
});