/* Elabore um programa para armazenamento e exibição de chamados de manutenção, com Data, Cliente, Local e descrição. */
var listaChamados = [];
var i = 0;

function adicionarChamado(){
	// Aqui vai o código para adicionar um chamado
var Chamado = {};
Chamado.data = prompt("Digite a data do chamado:");
Chamado.cliente = prompt("Agora digite o nome do cliente:");
Chamado.local = prompt("Digite o local onde será realizado o chamado:");
Chamado.descricao = prompt("Digite a descrição");

listaChamados[i] = Chamado;




}

function listarChamados(){
	// Aqui vai o código para listar os chamados.

console.log("==== Chamados Pendentes ====");
    for (var i = 0; i < listaChamados.length; i++){
console.log("Data:", listaChamados[i].data);
console.log("Cliente:", listaChamados[i].cliente);
console.log("Local:", listaChamados[i].local);
console.log("Descrição:", listaChamados[i].descricao);








    }




}

var continua = 's';
while(continua == 's'){
		var opcao = parseInt(prompt("O que deseja Fazer:\n 1- Adicionar chamado\n 2 - Listar Chamados"));
		
		if(opcao == 1){adicionarChamado();}else {listarChamados();}
		
		continua = prompt("Deseja fazer novas tarefas? Digite s para confirmar:");
}

