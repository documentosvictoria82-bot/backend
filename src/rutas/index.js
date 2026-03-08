const express = require('express')
const ruta = express.Router()
const productos = require('../controlador/index')


ruta.get('/producto', productos.getAll)
ruta.get('/producto/:id', productos.getByID)

//ruta.post('/productos', ()=>{
//    res.send(".")
//})

module.exports = ruta