//const data = require('../../data.json')
const { conectar_a_Mongo, desconectado_de_Mongo } = require('../config/indexconf'); 

class productos_modelo{
    static async getAll(){
        let Cliente_Mongo;
try {
   const Cliente_Mongo = await conectar_a_Mongo();
   if (!Cliente_Mongo){
    throw Error('Error al conectar con Mongo');
   } 
  const resultado = await Cliente_Mongo.db('proyectoTienda').collection('productos').find().toArray();
  
  await desconectado_de_Mongo(Cliente_Mongo);
  
  console.log("Datos de Mongo:", resultado.length);
  
  return {data:resultado,error: false};

} catch (error) {
    console.log("error del modelo", error.message);
    if (Cliente_Mongo) await desconectado_de_Mongo(Cliente_Mongo);
    return {data:null, error}
}
      
    }
}

module.exports = productos_modelo