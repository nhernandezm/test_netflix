const express = require("express");
const { hashSync, genSaltSync } = require("bcrypt");
const jsonwebtoken = require('jsonwebtoken');
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const {userRespository} = require("../repositories/user");

const register = async (req, res, next) => {

    try{
        const userName = req.body.userName;
        const name = req.body.name;
        const lastName = req.body.lastName;
        let password = req.body.password;  
  
        if (!userName || !name || !lastName || !password) {
            return res.json({
                code : 400,
                message: "userName,name,lastName,password required."
            });
        }
  
        const salt = genSaltSync(10);
        password = hashSync(password, salt);
               
        let resultCreateUser  = await userRespository.createUser(userName,name,lastName,password);
        if(resultCreateUser.error){
            return res.json({
                code : 400,
                message: resultCreateUser.data.sqlMessage
            });
        }
        let userId = resultCreateUser.data;
        let errorCrearusuario = "";

        if(userId == null){
            return res.json({
                code : 500,
                message: errorCrearusuario
            });
        }

        user = await userRespository.getUser(userId);
         
        const jsontoken = jsonwebtoken.sign({user: user}, process.env.SECRET_KEY, { expiresIn: '30m'} );
 
        res.json({token: jsontoken});
 
    } catch(e){    
        console.log(e);
        return res.json({
            code : 400,
            message: e.data.sqlMessage
        });
    }
    
}

//ruta
app.route("/register")
.post(register);


module.exports = app;