const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//nos ayuda a analizar el cuerpo de la solicitud POST
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use(bodyParser.json());
app.use(cors());
 
apiRouter.use(cookieParser());

//cargamos el archivo de rutas
app.use(require('./routes/index'));

app.listen(process.env.PORT||3300,() => {
    console.log("Servidor corriendo en el puerto 3300");
});

module.exports = app;