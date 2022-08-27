const {connection} = require("./config.db");

const getContents = () => {
    return new Promise((resolve, reject)=>{
        connection.query('SELECT * FROM content', (error, categories)=>{
            if(error){
                return reject({error : true,data : error});
            }
            return resolve({error : false,data : categories});
        });
    });
};

const createContent = (name,url,description) => {
    return new Promise((resolve, reject)=>{
        connection.query('INSERT INTO content (name,url,description) VALUES (?,?,?)', [name,url,description], (error, result)=>{
            if(error){
                return reject({error : true,data : error});
            }
            return resolve({error : false,data :result.insertId});
        });
    });
};


module.exports.contentRespository = {
    getContents : getContents,
    createContent : createContent
};