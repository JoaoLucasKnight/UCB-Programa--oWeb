const express = require ('express');

// função que organiza e gerencia as rotas 
const router = express.Router();
const calculadoraController = require ('../controller/calculadoraController');

//rota raiz ='/'  
router.get('/', calculadoraController.IndexView);
router.post('/calcular', calculadoraController.calcular)

// deixa a função disponivel para a aplicação 
module.exports = router;