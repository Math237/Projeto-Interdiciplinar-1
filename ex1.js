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
    

}

function listarChamados(){
	// Aqui vai o código para listar os chamados.

console.log("==== Chamados ====");
    for (var i = 0; i < listaChamados.length; i++){
console.log("Data:", listaChamados[i].data);
console.log("Cliente:", listaChamados[i].cliente);
console.log("Local:", listaChamados[i].local);
console.log("Descrição:", listaChamados[i].descricao);
console.log("Data da Conclusão de chamado:",  listaChamados[i].conclusao);
console.log("Solução:",  listaChamados[i].resposta);






    }




}

var continua = 's';
while(continua == 's'){
		var opcao = parseInt(prompt("O que deseja Fazer:\n 1- Adicionar chamado\n 2 - Mostrar resposta \n3 - listar chamados "));
		
		if(opcao == 1){adicionarChamado();}else {opcao == 2} {adicionarResposta();} {opcao == 3} {listarChamados();} 
		
		continua = prompt("Deseja fazer novas tarefas? Digite s para confirmar:");
}

