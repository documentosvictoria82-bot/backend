const { ObjectId } = require('mongodb')
const productosModel = require('../modelo/indexmo')

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
}

module.exports = producto