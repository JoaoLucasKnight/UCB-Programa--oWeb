const express = require ('express');
const bigode  = require ('mustache-express');
const app = express();

//render msutache 
app.engine('html', bigode());
app.set('view engine', 'html');
app.set('views', __dirname + '/pages')

// lida com dados de formulário no formato URL-encoded. CHAVE-VALOR { extended: true } permite que você lide com objetos mais complexos, como arrays e objetos aninhados, nos dados do formulário.
app.use(express.urlencoded({extended: true}))

app.get('/' , (req,res)=> {
    res.render('form.html')
})

app.post('/dados',(req,res)=>{
    let dados ={
        nome:req.body.nome,
        CPF:req.body.cpf,
        Data_de_nascimento:req.body.data,
        Endereço:req.body.endereço,
        UF:req.body.uf,
        CEP:req.body.cep,
        Email:req.body.email,
        Telefone:req.body.telefone,
        Especialidade:req.body.especialidade,
        Alergico:req.body.alergias,
        Informações:req.body.informações,
    }

    res.render('dados.html', {dados}) // passo a variavel dados com os dados do furmuliro pra pagina /dados 
})

const PORTA = 8080;
app.listen(PORTA, function (){
    console.log("rodando")
})
