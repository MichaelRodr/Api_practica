const express = require('express');
const app = express();
const morgan = require('morgan');


//Settings
app.set('port',process.env.PORT || 3000);//process.env.PORT se utiliza para indicar que si exite un puerto predefinido por el proveesor de la nube lo utilice sino usa el puerto 3000 por defecto.
app.set('json spaces',2);

//Middleware
app.use(morgan('dev'));//Se obtiene una respuesta
app.use(express.urlencoded({extend:false}));//Recibe datos desde el formulario solo texto.
app.use(express.json());//Metodo Para entender archivos.json

//routes
app.use(require('./routes/index'));

//Starting Server
app.listen(app.get('port'),()=> {
   console.log(`Server on port${app.get('port')}`) ;
});


