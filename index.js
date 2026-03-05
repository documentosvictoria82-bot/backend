const express = require('express')
const server = express()
const ruta_productos = require('./src/rutas/index')


server.get('/', (req, res) =>{
res.send('API TIENDA')
})

server.use('/api', ruta_productos )

server.listen(3000, ()=>{
    console.log('servidor corriendo en: http://localhost:3000');
})
