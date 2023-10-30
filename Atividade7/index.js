const express = require ('express');
const bigode  = require ('mustache-express');
const app = express();

//render msutache 
app.engine('html', bigode());
app.set('view engine', 'html');
app.set('views', __dirname + '/pages')

app.use(express.urlencoded({extended: true}))

app.get('/' , (req,res)=> {
    res.render('form.html')
})

app.post('/dados',(req,res)=>{
    let dados ={
        nome:req.body.nome,
        CPF:req.body.cpf,
        Data_de_nascimento:req.body.data,
        Endereço:req.body.address,
        UF:req.body.uf,
        CEP:req.body.cep,
        Email:req.body.email,
        Telefone:req.body.telefone,
        Especialidade:req.body.especialidade,
        Alergico:req.body.aler,
        Informações:req.body.info,
    }

    res.render('dados.html', {dados})
})

const PORTA = 8080;
app.listen(PORTA, function (){
    console.log("rodando")
})
