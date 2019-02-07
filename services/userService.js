var model = require('../models/index')

const service = {}

service.getAll = () => {
    try {
        const Users = model.user.findAll({
            attributes: ['id', 'nome']
          });
        console.log(Users)
        return Users
    }
    catch(err) {
        //logger.error('Error in getting cars- ' + err);
        return 'Error in getting users- '+ err 
    }
}

service.create = (filds) => {
    try{
        Users = model.user.create({ nome: filds.nome })
        return { "sucess": true, "msg": "Usuario criado com sucesso" ,"Users": Users }    
    }
    catch(err){
        return "Error in build users- "+ err
    }
}

module.exports = service;