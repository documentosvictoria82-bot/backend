//const data = require('../../data.json')
const { ObjectId } = require('mongodb');
const { conectar_a_Mongo, desconectado_de_Mongo } = require('../config/indexconf'); 

class producModelo{
    static async getAll(){
       try {
   const Cliente_Mongo = await conectar_a_Mongo();
   if (!Cliente_Mongo){
    throw Error('Error al conectar con Mongo');
   } 
  const result = await Cliente_Mongo.db('proyectoTienda').collection('productos').find().toArray();
  
  await desconectado_de_Mongo();
  
  console.log(result);
  
  if (!result) return {data: null, error: true}
    return {data:result, error: false};

} catch (error) {
        return error
}      
    }
    static async getByID(id){
       let Cliente_Mongo;
        try {
            const Cliente_Mongo = await conectar_a_Mongo()
            if (!Cliente_Mongo) {
                throw Error ('Error al conectar a MongoDB')
            }
            const result = await Cliente_Mongo.db('proyectoTienda').collection('productos').findOne({_id: new ObjectId(id)})
            console.log(result);
            await desconectado_de_Mongo(Cliente_Mongo)
            if(!result) return {data: null, error: true}
            return {data: result, error:false}

        } catch (error) {
            return {data: null, error: true}
        }
    }
}

module.exports = producModelo