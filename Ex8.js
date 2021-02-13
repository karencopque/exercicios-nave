const pessoas = [
  { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
  { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
  { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
  { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 }
];
let total = pessoas.reduce((total, pessoa) => total + pessoa.idade, 0)

console.log(total)



//E.8 Imprima a soma das idades (dica: utilize reduce)