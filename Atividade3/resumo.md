<h2> Arrow Function<h2>

    Uma arrow function em JavaScript é uma forma concisa de escrever funções. Ela foi introduzida na linguagem para facilitar a sintaxe e a leitura de código. As arrow functions são particularmente úteis em situações onde você precisa de uma função rápida e simples, como em callbacks e funções anônimas.

    Estrutura 
~~~javascript 

    (argument1, argument2, ... argumentN) => {
}

~~~

    Exmplos: 
~~~javascript

    const soma = (a, b) => a + b;
    console.log(soma(2, 3));  // Saída: 5

~~~
    Callbacks

~~~javascript

    const numeros = [1, 2, 3, 4, 5];
    const dobrados = numeros.map(numero => numero * 2);
    console.log(dobrados);  // Saída: [2, 4, 6, 8, 10]

~~~

<h2> Promise <h2>

    A principal ideia por trás das Promises é lidar com operações que podem levar algum tempo para serem concluídas, como fazer uma requisição HTTP, acessar um arquivo no sistema de arquivos, ou executar uma tarefa demorada, de forma assíncrona.

    Exmplos: 
~~~javascript

    const minhaPromise = new Promise((resolve, reject) => {
  // Simulando uma operação assíncrona
    setTimeout(() => {
        const sucesso = true;
        if (sucesso) {
            resolve("Operação bem-sucedida!");
        } else {
            reject("Erro na operação.");
        }
    },5 X 1000);
});

    minhaPromise.then(resultado => {
        console.log(resultado);  // Saída: Operação bem-sucedida!
    }).catch(erro => {
        console.error(erro);     // Será chamado se a Promise for rejeitada
    });

~~~

    Nesse exemplo de codigo foi colocado  um tempo para simular uma função assicrona, podendo variar o resultado alterando a variavel sucesso para false ou true. A Promise pode ter um dos três estados:

* Pending (Pendente): O estado inicial, onde a Promise está aguardando a conclusão da operação assíncrona.

* Fulfilled (Cumprida): A operação assíncrona foi concluída com sucesso, e a Promise é "cumprida" com um valor resultante.

* Rejected (Rejeitada): A operação assíncrona falhou, e a Promise é "rejeitada" com um motivo de erro. 