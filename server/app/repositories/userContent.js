const {connection} = require("./config.db");

const createUserContent = (idUsuario,idContent) => {
    return new Promise((resolve, reject)=>{
        connection.query('INSERT INTO user_content (id_user,id_content) VALUES (?,?)', [idUsuario,idContent], (error, result)=>{
            if(error){
                return reject({error : true,data : error});
            }
            return resolve({error : false,data :result.insertId});
        });
    });
};


module.exports.userContentRespository = {
    createUserContent : createUserContent
};