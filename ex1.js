/* Elabore um programa para armazenamento e exibição de chamados de manutenção, com Data, Cliente, Local e descrição. */
var listaChamados = [];
var i = 0;

function adicionarChamado(){
	// Aqui vai o código para adicionar um chamado
var chamado = {};
chamado.data = prompt("Digite a data do chamado:");
chamado.cliente = prompt("Agora digite o nome do cliente:");
chamado.local = prompt("Digite o local onde será realizado o chamado:");
chamado.descricao = prompt("Digite a descrição");

listaChamados[i] = chamado;

i++
    


}
function adicionarResposta(){
    // aqui vai o código para adicionar a resposta do chamado
    var resposta = {};
    resposta.conclusao = prompt("Data da conclusão:");
    resposta.solucao = prompt("Como você solucionou o problema:");
    i++

}

function adicionarResposta(){
	// Aqui vai o código para listar os chamados.

console.log("==== Chamados ====");
    for (var i = 0; i < listaChamados.length; i++){
console.log("Data:", listaChamados[i].data);
console.log("Cliente:", listaChamados[i].cliente);
console.log("Local:", listaChamados[i].local);
console.log("Descrição:", listaChamados[i].descricao);

    }




}
function listarResposta(){
 console.log("==== Resposta ====");
 for(var i = 0; i < listarResposta; i++){
    console.log("Data da Conclusão de chamado:",  listarResposta[i].conclusao);
    console.log("Solução:", listarResposta[i].solucao);
    
}

}

var continua = 's';
while(continua == 's'){
		var opcao = parseInt(prompt("O que deseja Fazer:\n 1- Adicionar chamado\n 2 - listar chamado \n3 - listar resposta "));
		
		if(opcao == 1){adicionarChamado();}else {opcao == 2} {adicionarResposta();} {opcao == 3} {listarResposta();} 
		
		continua = prompt("Deseja fazer novas tarefas? Digite s para confirmar:");
}

