const express = require ('express');
const bigode  = require ('mustache-express');
const app = express();

app.get('/' , (req,res)=> {
    res.send("Ola mundo")
})

const PORTA = 8080;
app.listen(PORTA, function (){
    console.log("rodando")
})
