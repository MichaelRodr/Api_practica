const {Router} = require('express');
const router = Router();

const movies = require('./sample.json');
//console.log(movies);

router.get('/',(req,res)=>{
    res.json(movies);
});

router.post('/',(req,res)=>{
    const {title,director,year,rating} = req.body;//Se obtienen los datos
    
    if(title && director && year && rating) { //Se verifican que estan los datos
       
        const id = movies.length + 1;
        
        const newMovie = {...req.body, id };   //Se guardan los datos
        
        console.log(newMovie);
        
        res.json('Data is Saved');
    }else{
        res.send('Error sent data is not correct');
    }
});



module.exports = router;