const http = require('http'); 
const axios = require('axios'); 

http.createServer((req, res)=>{ 
    res.write("Hello world \n"); 
    res.end();
}).listen(8000);