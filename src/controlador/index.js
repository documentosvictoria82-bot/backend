const productos_model = require('../modelo/indexmo')

class producto{
    static getAll(req, res){
        const {data, error} = productos_model.getAll()
       error ? res.status(400).json({error: 'No se encuentran productos'})
       : res.status(200).json(data)
        
    }
}

module.exports = producto