const express = require('express')
const server = express();
const dotenv = require('dotenv')
dotenv.config()
const ruta_productos = require('./src/rutas/index')

const PORT = process.env.PORT || 3000

server.use(express.json());

server.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers","X-Requested-With, Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next()
    
})

server.get('/', (req, res) =>{
res.send('API TIENDA')
})

server.use('/api', ruta_productos )

server.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
})
