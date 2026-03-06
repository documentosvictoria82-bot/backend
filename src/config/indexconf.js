//const dotenv = require('dotenv')
//dotenv.config()

//const {MongoClient} = require('mongodb')

//async function conectar_a_Mongo(){

  //  try {const cliente = new MongoClient(process.env.MONGOURL)
    //     await cliente.connect()
      //   console.log("conectado a Mongo")
        // return cliente
    //} catch (error) {
      //  console.log("Error al intentar conectar con Mongo")
        //return null
    //}
   //}

   //async function  desconectado_de_Mongo(){
    //try {
      // if (cliente){ await cliente.close()
        //console.log("Desconectado de Mongo")}
    //} catch (error) {
      //  console.log("Error al desconectar Mongo", error);
   // }
  // }

  // module.exports = {conectar_a_Mongo, desconectado_de_Mongo}

  const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require('mongodb');

// Creamos la función para obtener un cliente nuevo cada vez
async function conectar_a_Mongo() {
    try {
        const cliente = new MongoClient(process.env.MONGOURL);
        await cliente.connect();
        console.log("Conexión exitosa a MongoDB");
        return cliente;
    } catch (error) {
        console.log(" Error al intentar conectar con Mongo:", error.message);
        return null;
    }
}

async function desconectado_de_Mongo(cliente) {
    try {
        if (cliente) {
            await cliente.close();
            console.log("🔌 Desconectado de Mongo");
        }
    } catch (error) {
        console.log("Error al desconectar Mongo", error);
    }
}

module.exports = { conectar_a_Mongo, desconectado_de_Mongo };