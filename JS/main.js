
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";    
    //console.log(document.getElementById("agradecimento"));
//alert("Obrigado por clicar");
}


function redirecionar(){
window.open("https://www.google.com.br/"); //abre em outra aba
//window.location.href = "https://www.google.com.br/"; //abre na mesma janela
}

function trocar (elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaIdade(idade){
   var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
var d= new Date();
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=1; count <=5; count++){
    alert(count);
};
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
        alert("menor de idade");
}
*/


//var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);



//var fruta = {nome: "maçã", cor: "vermelha"};
//console.log(fruta.nome);
//alert(fruta.cor);



//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva")
//lista.pop();
//console.log(lista.toString());
//console.log(lista.join(" - "))


//var nome = "Simone Alves";
//var idade = 33;
//var n1 = 5;
//var n2 = 3; 
//var frase = "Hoje é o melhor dia da minha vida!"
//alert(nome + " tem " + idade + " anos de idade ");
//console.log(nome);
//console.log(n1*n2);
//console.log(frase.replace("minha", "sua"));
//console.log(frase.toLowerCase());

