const express = require('express')
const server = express()

server.get('/', (req, res) =>{
console.log(req);
res.send('Api Tienda')
})

server.listen(3000, ()=>{
    console.log('servidor corriendo en: http://localhost:3000');
})
