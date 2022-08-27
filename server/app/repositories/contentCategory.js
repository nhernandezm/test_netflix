const {connection} = require("./config.db");

const createContentCategory = (idContent,idCategory) => {
    return new Promise((resolve, reject)=>{
        connection.query('INSERT INTO content_category (id_content,id_category) VALUES (?,?)', [idContent,idCategory], (error, result)=>{
            if(error){
                return reject({error : true,data : error});
            }
            return resolve({error : false,data :result.insertId});
        });
    });
};


module.exports.contentCategoryRespository = {
    createContentCategory : createContentCategory
};