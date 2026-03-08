const dotenv = require('dotenv')

dotenv.config()

const {MongoClient} = require('mongodb')

async function conectar_a_Mongo(){


try {const cliente = new MongoClient(process.env.MONGOURL)
     await cliente.connect()
     console.log("conectado a Mongo")
       return cliente

    } catch (error) {
      console.log("Error al intentar conectar con Mongo")
      return null

    }

   }

   async function  desconectado_de_Mongo(){
   try { const cliente = new MongoClient(process.env.MONGOURL)
    await cliente.close()
          console.log("Desconectado de Mongo");

    } catch (error) {

       console.log("Error al desconectar Mongo", error);

    }

   }



module.exports = {conectar_a_Mongo, desconectado_de_Mongo}