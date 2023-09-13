//Trabalho Feito por Fabrício Vecchi Panisson, Bruno Marcos Simon, Jean de Cesare
var dataAtual = new Date();
var ano = dataAtual.getFullYear();
function calculaIdade(a, b) {
  if (b >= a) {
    return b - a;
  } else if (b == null && ano >= a) {
    return ano - a;
  } else {
    return "O nascimento deve ser menor que o ano!";
  }
}
console.log(calculaIdade(2005, 2022));
