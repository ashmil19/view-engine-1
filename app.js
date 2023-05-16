const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/',(req, res)=>{
    
    const players = ['Messi','Ronaldo','Neymar','Mbappe','Salah','Ozil','Benzina','Halland','Dybala'];

    res.render('index',{players});
})