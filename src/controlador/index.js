const { ObjectId } = require('mongodb')
const productosModel = require('../modelo/indexmo')

const product = require('../modelo/Esquema_producto')

class producto{
    static async getAll(req, res){
        const {data, error} = await productosModel.getAll()
       error ? res.status(400).json({error: 'No se encuentran productos'})
       : res.status(200).json(data)
        
    }
    static async getByID(req, res){
       // const {data, error} //llamar modelo
       const {id} = req.params
       if (!id) return res.status(400).json({error: 'No se proporciona id'})
       const {data, error} = await productosModel.getByID(id)

       error ? res.status(400).json({error: "no existe el producto"})
       : res.status(200).json(data)
    }
static async createOne(req, res){
    const body = req.body
    console.log(body);
    
    try {
        const producto1 = product.parse(body)
        const {data, error} = await productosModel.createOne(producto1)
        if (data) return res.status(200).json(data)       
    } catch (error) {
        res.status(400).json({error: 'los datos enviados son incorrectos'+ error.errors})
    }
    
    //console.log(producto1);
       
}

}

module.exports = producto