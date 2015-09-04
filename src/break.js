/*
	* Break
	*  O comando break inclui um label opcional que permite ao programa encerrar a execução da estrutura que possui o
	*  nome informado na label. O comando break deve estar dentro dessa estrutura informada no label. 
	*  
	*  A estrutura que possui o nome informada na label pode ser qualquer comando block; 
	*  não é necessário que seja precedida por um loop.
 */

let mytest = 5;

for (var i = 0; i < mytest; i++) {
	console.log('> '+i);

	if(i == 2){
		console.log('Break 2');
		break;
	}
};