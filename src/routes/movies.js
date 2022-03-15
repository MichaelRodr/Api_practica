const {Router} = require('express');
const router = Router();

//Es un paquete que permite manipular arreglos
const _ = require('underscore');

const movies = require('./sample.json');// Archivo .Json que emula DB  
//console.log(movies);

router.get('/',(req,res)=>{
    res.json(movies);
});

router.post('/',(req,res)=>{
    
    const { title, director, year, rating }= req.body;//Se obtienen los datos
    
    if(title && director && year && rating) { //Se verifican que estan los datos
       
        const id = movies.length + 1;// Incrementa el ID 
        const newMovie = {id, ...req.body };   //Se guardan los datos
        movies.push(newMovie);
        res.json(movies)
    }else{
        res.status(500).json({"error":"There was an error."});
    }
        
    
});

router.put('/:id',(req, res) => {
    
    const { id } = req.params;
    const { title, director, year, rating }= req.body;
   
    if( title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if(movie.id == id) {
                movie.title = director;
                movie.director = title;
                movie.year = year;
                movie.rating = rating;
            }
        });
       
        res.json(movies);
        
    } else {
        res.status(500).json({error: 'Datos incorrectos'});
    }
});

router.delete('/:id',(req,res)=>{
    const {id} =req.params; // Valor que viene desde la solicitud 
    _.each(movies,(movie,i)=>{
       if(movie.id == id) {
           movies.splice(i, 1);
       } 
    });
    res.send(movies);
});


module.exports = router;