const pessoas = [
  { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
  { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
  { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
  { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
];

const temPessoasComMenos25 = pessoas.some(p => p.idade < 25)
if (temPessoasComMenos25) {
  console.log("tem pessoas com menos de 25")
}








//E.9 Imprima se existir alguém com menos 25 anos.