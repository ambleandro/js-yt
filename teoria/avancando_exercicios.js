// Exercício de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.
const listaCompras = [];

listaCompras.push("Arroz", "Feijão", "Macarrão", "Ovos", "Tomate");

listaCompras.shift();

console.log(listaCompras);

// Exercício de Manipulação de Array - find()

// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42]
// Use a função find() para encontrar o primeiro número que é divisível por 7
// e maior que 10.
const numeros = [3, 7, 14, 21, 29, 36, 42];

const resposta = numeros.find((num) => num % 7 === 0 && num > 10);

console.log(resposta);


// Exercídio de Manipulação de Array - filter()

// Dado  o array de números: [5, 10, 15, 20, 25, 30, 35, 40].
// Use a função filter() para criar um novo array que contenha apenas os 
// que são maiores que 20.
const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40];

const numeros2Array2 = numeros2.filter((num) => num > 20);

console.log(numeros2Array2)

// Exercício de Manipulação de String - split(), trim()

// Dada a string: "Bom dia, mundo!".
// Remova os espaços em branco no início e no final da string
// em seguida, divida a string em palavras.
const frase = ("    Bom dia, mundo!   ").trim()

const palavras = frase.split(" ");

console.log(palavras)

//Exercício de Manipulação de String - startswith(), endswith()

// Dada a string: "O rato roeu a roupa do rei de Roma"
//Verifique se a string começa com a palavra "O" e termina com a palavra Roma
const frase2 = "O rato roeu a roupa do rei de Roma";

const inicio = frase2.startsWith("O");
const fim = frase2.endsWith("Roma");

console.log(inicio, fim)
