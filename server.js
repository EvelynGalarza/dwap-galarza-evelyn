const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

const port =process.env.PORT || 3000;
app.get('/',(req,res)=>{ 
    res.render('home');
});
//HELPERS


app.listen(port,()=>{
    //La retroalimentaión que aparezca en el terminal
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});