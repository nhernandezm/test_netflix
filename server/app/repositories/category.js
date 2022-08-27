const {connection} = require("./config.db");

const getCategoryByName = (name) => {
    return new Promise((resolve, reject)=>{
        connection.query('SELECT * FROM category WHERE name = ?',[name], (error, categories)=>{
            if(error){
                return reject({error : true,data : error});
            }
            return resolve({error : false,data : categories[0]});
        });
    });
};

const getCategories = () => {
    return new Promise((resolve, reject)=>{
        connection.query('SELECT * FROM category', (error, categories)=>{
            if(error){
                return reject({error : true,data : error});
            }
            return resolve({error : false,data : categories});
        });
    });
};

const createCategory = (name) => {
    return new Promise((resolve, reject)=>{
        connection.query('INSERT INTO category (name) VALUES (?)', [name], (error, result)=>{
            if(error){
                return reject({error : true,data : error});
            }
            return resolve({error : false,data :result.insertId});
        });
    });
};


module.exports.categoryRespository = {
    getCategories : getCategories,
    createCategory : createCategory,
    getCategoryByName : getCategoryByName
};