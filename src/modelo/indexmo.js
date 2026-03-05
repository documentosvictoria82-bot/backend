const data = require('../../data.json')

class productos_modelo{
    static getAll(){
        if(!data) return{data:null, error:true};
        return {data,error: false};
    }
}

module.exports = productos_modelo;