const {Router} = require('express');
const router = Router();

//Routes
app.get('/',(req,res) =>{
    res.json({'Title':'hello World'});
});