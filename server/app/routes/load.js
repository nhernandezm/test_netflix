const express = require("express");
const app = express();

//conexión con la base de datos
const {loadData} = require("../repositories/loadData");

const load = async (req, res) => {

    try{
        await loadData();
    } catch(e){    
        console.log(e);
        return res.json({
            code : 400,
            message: e
        });
    }
    

    return res.json({
        code : 200,
        message: "OK"
    });
};

//ruta
app.route("/loaddata")
.get(load);

module.exports = app;