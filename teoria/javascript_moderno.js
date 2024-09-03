// ES6 + => versão do JavaScript
//let e const
let n = 10;
n = 20;

const x = 15;

function testeVar() {
  var x = 1;
  if(true) {
    var x = 2;
    console.log(x);
  }

  console.log(x);
}

function testeLet() {
  let x = 1;
  if(true) {
    let x = 2;
    console.log(x);
  }

  console.log(x);
}

testeVar();
testeLet();

// arrow function
const soma = (a, b) => a + b;

console.log(soma(3, 5));

const quadrado = (numero) => numero * numero;

console.log(quadrado(4));

const cumprimento = (nome) => {
  const mensagem = `Olá, ${nome}!`; 
  return mensagem;
}

console.log(cumprimento("Matheus"));

// Template literals
// const nome2 = "Maria";
// const idade = 22;

// console.log(`Meu nome é ${nome2} e eu tenho ${idade} anos.`);

// Destructuring -> desestruturação
const pessoa = {nome: "João", idade: 40, profissao: "Programador"};

const {nome: nome2, idade: idade2, profissao} = pessoa;

console.log(nome2, profissao);

const numeros = [1, 2, 3, 4];

const [primeiro, segundo, terceiro] = numeros;

console.log(primeiro, segundo, terceiro);

// spread operator => espalhamento
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2);

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0);

console.log(soma2(1, 2, 3, 4, 5, 6, 7));

// default parameters
function saudacao(nome = "visitante") {
  console.log(`Olá, ${nome}!`);
};

saudacao();
saudacao("Matheus");

// object literals enhancements
// {nome: "Matheus"}

const nomeNovo = "Felipe";
const idadeNova = 24;

const pessoaNova = {nome: nomeNovo, idade: idadeNova};

console.log(pessoaNova);

const saudacaoObject = {
  dizerOi() {
    console.log("Oi");
  },
};

saudacaoObject.dizerOi();

// classes e heranças
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá pessoal, meu nome é ${this.nome}`);
  }
}

const joao = new Pessoa("João", 34);

console.log(joao);

joao.falar();

const pedro = new Pessoa("Pedro", 21);

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  falarFuncionario() {
    super.falar();
    console.log(`Eu ganho R$ ${this.salario}`)
  }
}

const mario = new Funcionario("Mario", 44, 3200);

console.log(mario);

mario.falar();

mario.falarFuncionario();