// const lista = document.getElementById('lista');
// const frutas =["maça", "uva", "melancia", "laranja"];

// for(let i=0; i < frutas.length; i++){
//     lista.innerHTML += frutas[i] + '<br>';
// }
// const somar= document.getElementById('somar');
// const notas = [8, 5, 4, 3];
// let soma= 0;

// for(let i=0; i < notas.length; i++) {
//     soma += notas[i];
//     somar.innerHTML = soma;
// }

// const media = soma / notas.length;
// somar.innerHTML = `Soma: ${soma} <br> Média: ${media}`;

//  const somar =document.getElementById('somar');
// const numeros= [100, 90, 200, 60, 70];

//   let maior = numeros[0];

//   for(let i=0; i> numeros.length; i++){
//     if(numeros[0] > maior){
//         maior=numeros[i];

//     }
//   }
//   somar.innerHTML = maior;

//   const somar =document.getElementById('somar');
// const numeros= [100, 90, 200, 60, 70];

//   let menor = numeros[0];

//   for(let i=0; i< numeros.length; i++){
//     if(numeros[i] < menor){
//         menor=numeros[i];

//     }
//   }
//   somar.innerHTML = menor;

// const texto = document.getElementById("texto");
// const nomes = ["Jessica", "Caio", "Ozório", "Alberto"];
// const idade = [20, 30, 4, 15];
// const imagem = ["Imagem1.jpg", "Imagem2.jpg", "imagem3.jpg", "imagem4.jpg"];

// for(let i=0; i < nomes.length; i++){
//     texto.innerHTML += `<div class="caixa"> Nome: ${nomes[i]} <br> Idade: ${idade[i]}<br>  <img class="img" src="${imagem[i]}" alt=""> </div>`;
// }

 const texto = document.getElementById("texto"); 
    const nomes = ["Jessica", "Caio", "Ozório", "Alberto"];
    const idade = [20, 30, 4, 15];
    const imagem = ["Imagem1.jpg", "Imagem2.jpg", "Imagem3.jpg", "Imagem4.jpg"];

    for(let i = 0; i < nomes.length; i++){
      texto.innerHTML += `
        <div class="caixa">
          <img class="img" src="${imagem[i]}" alt="${nomes[i]}">
          <div class="nome">${nomes[i]}</div>
          <div class="idade">Idade: ${idade[i]}</div>
        </div>`;
    }