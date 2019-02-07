var UserService = require('../services/userService')

const controller = {};

controller.getAll = (req, res) => {
    try {
        const Users = UserService.getAll(res).then(function(result){
            res.status( 200 ).json(result)
        });
        //res.status( 200 ).json(Users);
    }
    catch(err) {
        //logger.error('Error in getting cars- ' + err);
        res.status( 400 ).json('Got error in getAll');
    }
}

controller.create = (req, res) => {
    try {
        req.assert('nome', 'Campo nome é obrigatorio').notEmpty()

        errors = req.validationErrors()
        if( !errors ){
            const Users = UserService.create(req.body)
            res.status( 200 ).json(Users)
        }else{
            res.status(400).json( {'sucess': false, 'errors': errors})
        }
    }
    catch(err) {
        //logger.error('Error in getting cars- ' + err);
        res.status( 400 ).json('Got error in getAll')
    }
}
module.exports = controller;