let produtos = Array();

function criar_produto(id, nome, qtd) { // aqui tem uma fake api, aqui passamos um post (criar um novo produto )
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p;
}

function adicionar_produto(p) {  // aqui damos um PUSH, para salvar os produtos no array 
    produtos.push(p);
}

function listar_produtos() { // para listar todos os produtos usamos o GET
    return produtos;
}

function editar_produto(id, qtdAtual) { // aqui temos PUT
    let pEditado;
    produtos.forEach((p) => { // method para encontrar o produto pelo id que será atualizado 
        if(p.id == id){
            p.qtd = qtdAtual;
        }
        pEditado = produtos;
    });
    return pEditado;
}

function remover_produto(id) { // aqui é um DEL para deletetar o produto 
    produtos = produtos.filter((p) => {
        return p.id != id
    })
    return {};
}

module.exports = {
    criar_produto,
    adicionar_produto,
    listar_produtos,
    editar_produto,
    remover_produto
}