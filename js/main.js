function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
}
function redirecionar(){
    window.open("https://www.google.com.br");
    window.location.href = "https://www.youtube.com"
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}
function load(){
    alert("pagina carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
//-------------------FUNÇÕES-------------------------//
/*function soma(n1,n2){
    return n1+n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)

let validar //GLOBAL
function validaIdade(idade){
    let validar; //LOCAL
    if(idade >=18){
    validar = true;
    }else{
        validar = false;
    }
    return validar;
}
let idade = prompt("qual sua idade");
alert(validaIdade(idade));

alert(soma(5,10));
//alert(setReplace("teste japao", "japao", "Brasil"))

*/
//--------------------DATAS--------------------------//
/*let d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));
*/

//--------------LAÇOS DE REPETIÇÃO-------------------//
//----------FOR-----------//
/*
for(let count = 0; count <=5; count++){
    alert(count);
}*/
//----------WHILE--------//
/*let count = 0;
while(count <=5){
    console.log(count);
    count++;
}*/
//------------CONDICIONAIS(IF ELSE)------------------//
/*let idade = prompt("Qual sua idade: ");
if(idade >=18){
    alert("voce tem "+idade+" anos portanto é maior de idade");
}else{
    alert("voce tem "+idade+" anos portanto é menor de idade");
}*/

//----------LISTA DE DICIONARIOS -----------//
/*let frutas = [{nome:"maca", cor:"vermelho"}, {nome:"pera", cor:"verde"}];
console.log(frutas);
alert(frutas[1].nome);
*/
//------------DICIONARIO--------------------//
/*let fruta = {nome: "maca", cor:"vermelho"};
console.log(fruta.nome);
console.log(fruta.cor);
*/

// -------------ARRAY ----------------------//
/*
let lista = ["maça", "pera", "laranja"];
lista.push("uva");//ADICIONAR ELEMENTO NA LISTA
console.log(lista[0]);
console.log(lista[3]);
lista.pop(); //REMOVER ULTIMO ELEMENTO DA LISTA
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
*/

//-----------BASICO DE JAVASCRIPT------------//
/*let nome = "Emerson Henrique";
let idade = 30;
let idade2 = 10;
let frase = "Japao teste de frase";
//alert(nome + " tem "+idade+ " anos")
//alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japao", "Brasil").toUpperCase());
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());*/