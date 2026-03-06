const express = require('express')
const server = express()
const dotenv = require('dotenv')
dotenv.config()
const ruta_productos = require('./src/rutas/index')

const PORT = process.env.PORT || 3000

server.get('/', (req, res) =>{
res.send('API TIENDA')
})

server.use('/api', ruta_productos )

server.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
})
