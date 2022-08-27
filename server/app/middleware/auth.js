
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
     
    if(token === undefined  ){
         
            return res.json({
                message: "Access Denied! Unauthorized User"
              });
    } else{
 
        jsonwebtoken.verify(token, process.env.SECRET_KEY, (err, authData)=>{
            if(err){
                res.json({
                    message: "Invalid Token..."
                  });
 
            } else{
                
                
               const role = authData.user.role;
               if(role === "user"){
 
                next();
               } else{
                   return res.json({
                       message: "Access Denied! you are not an Admin"
                     });
 
               }
            }
        })
    };

};