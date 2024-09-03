// seleção dos elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");
const botaoClear = document.querySelector(".clear");
const botaoClearAll = document.querySelector(".clearAll");

// Variáveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funções
function insereNumero(evento){

  function atualizaDisplay() {
    display.value = operacaoAtual;
  }

  if(calculando) {
    operacaoAtual = evento.target.textContent;
    calculando = false;
  } else {
    operacaoAtual += evento.target.textContent;
  }

  atualizaDisplay();
}

function inserePonto() {
  function atualizaDisplay() {
    display.value = operacaoAtual;
  }

  if(operacaoAtual.indexOf(".") === -1) {
    operacaoAtual += ".";
    atualizaDisplay();
  }
}

function insereOperador(evento) {
  if(operacaoAtual !== "") {
    if(!calculando) {
      if(operador !== null) {
        calculando();
      }
      valorAnterior = operacaoAtual;
      operacaoAtual = "";
    }
    operador = evento.target.textContent;
  }
}

function calcula() {

  function atualizaDisplay() {
    display.value = operacaoAtual;
  }

  let resultado = null;
  const operandoAnterior = parseFloat(valorAnterior);
  const operandoAtual = parseFloat(operacaoAtual);

  switch(operador) {
    case "+":
      resultado = operandoAnterior + operandoAtual;
      break;
    case "-":
      resultado = operandoAnterior - operandoAtual;
      break;
    case "*":
      resultado = operandoAnterior * operandoAtual;
      break;
    case "/":
      resultado = operandoAnterior / operandoAtual;
      break;
  }

  operacaoAtual = String(resultado);
  valorAnterior = operacaoAtual;
  calculando = true;
  atualizaDisplay();
}

function limpaDisplay() {
  display.value = "";
  operacaoAtual = "";
}

function zeraTudo() {
  limpaDisplay();
  valorAnterior = "";
  operador = null;
  calculando = false;
}

// Eventos
botaoPonto.addEventListener("click", inserePonto);
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));
botoesOperadores.forEach((botao) => botao.addEventListener("click", insereOperador));
botaoIgual.addEventListener("click", calcula);
botaoClear.addEventListener("click", limpaDisplay);
botaoClearAll.addEventListener("click", zeraTudo);