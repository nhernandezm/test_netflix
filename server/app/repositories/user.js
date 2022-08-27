const {connection} = require("./config.db");

const getUser = (idUser) => {
    return new Promise((resolve, reject)=>{
        connection.query('SELECT * FROM user WHERE id = ?', [idUser], (error, users)=>{
            if(error){
                return reject({error : true,data : error});
            }
            return resolve({error : false,data : users[0]});
        });
    });
};

const getUserByUserName = (userName) => {
    return new Promise((resolve, reject)=>{
        connection.query('SELECT * FROM user WHERE user_name = ?', [userName], (error, users)=>{
            if(error){
                return reject({error : true,data : error});
            }
            return resolve({error : false,data : users[0]});
        });
    });
};

const createUser = (userName,name,lastName,password,role) => {
    return new Promise((resolve, reject)=>{
        connection.query('INSERT INTO user (user_name, name,last_name, password,role) VALUES (?,?,?,?,?)', [userName,name,lastName,password,role], (error, result)=>{
            if(error){
                return reject({error : true,data : error});
            }
            return resolve({error : false,data :result.insertId});
        });
    });
};


module.exports.userRespository = {
    getUser : getUser,
    createUser : createUser,
    getUserByUserName : getUserByUserName
};