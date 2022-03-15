const {Router} = require('express');
const router = Router();

//Routes
router.get('/',(req,res) =>{
    const data = {
        'Title':'hello World',
        'wesite':'matchdev.io'
    };
    res.json(data);
});

module.exports = router;