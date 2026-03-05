const express = require('express')
const server = express()
const data = require('./data.json')

server.get('/', (req, res) =>{
console.log(req);
res.json(data)
})

server.listen(3000, ()=>{
    console.log('servidor corriendo en: http://localhost:3000');
})
