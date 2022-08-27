const express = require("express");
const app = express();
const {compareSync} = require("bcrypt");
const jsonwebtoken = require('jsonwebtoken');

const dotenv = require("dotenv");
dotenv.config();

const {userRespository} = require("../repositories/user");

const login = async (req, res) => {
    try{
        const userName = req.body.userName;
        const password = req.body.password;
        let userResult = await userRespository.getUserByUserName(userName);
         
        if(userResult.error){
            return res.json({
                code:400,
                message: "Invalid user name or password 1"
            })
        }
        let user = userResult.data;

        const isValidPassword = compareSync(password, user.password);
        if(isValidPassword){
            user.password = undefined;
            const jsontoken = jsonwebtoken.sign({user: user}, process.env.SECRET_KEY, { expiresIn: '30m'} );
            res.cookie('token', jsontoken, { httpOnly: true, secure: true, SameSite: 'strict' , expires: new Date(Number(new Date()) + 30*60*1000) }); 
            res.json({token: jsontoken});
     
        }  else{
            return res.json({
                code:400,
                message: "Invalid user name or password 2"
            });
        } 
     
        } catch(e){
            console.log(e);
            return res.json({
                code:400,
                message: "Invalid user name or password 3"
            });
        }
};

//ruta
app.route("")
.post(login);

module.exports = app;