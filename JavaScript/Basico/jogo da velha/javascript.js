//const casas = window.document.getElementsByClassName('casa');
const casas = document.querySelectorAll('.casa');
//primeira linha
let A1 = document.getElementById('A1');
let A2 = document.getElementById('A2');
let A3 = document.getElementById('A3');
//segunda linha
let B1 = document.getElementById('B1');
let B2 = document.getElementById('B2');
let B3 = document.getElementById('B3');
//terceira linha
let C1 = document.getElementById('C1');
let C2 = document.getElementById('C2');
let C3 = document.getElementById('C3');
 
let jogadas = 1;
let jogoAcabou = false; 

function win(){
  //verificaçãod e linha

  //X
  if (A1.textContent === "X" && A2.textContent === "X" && A3.textContent === "X"){
    document.getElementById("comentario").textContent = "X ganhou na linha 1";
    jogoAcabou = true;
    return
  }

  if (B1.textContent === "X" && B2.textContent === "X" && B3.textContent === "X"){
    document.getElementById("comentario").textContent = "X ganhou na linha 2";
    jogoAcabou = true;
    return
  }

  if (C1.textContent === "X" && C2.textContent === "X" && C3.textContent === "X"){
    document.getElementById("comentario").textContent = "X ganhou na linha 3";
    jogoAcabou = true;
    return
  }

  //O
  if (A1.textContent === "O" && A2.textContent === "O" && A3.textContent === "O"){
    document.getElementById("comentario").textContent = "O ganhou na linha 1";
    jogoAcabou = true;
    return
  }

  if (B1.textContent === "O" && B2.textContent === "O" && B3.textContent === "O"){
    document.getElementById("comentario").textContentL = "O ganhou na linha 2";
    jogoAcabou = true;
    return
  }

  if (C1.textContent === "O" && C2.textContent === "O" && C3.textContent === "O"){
    document.getElementById("comentario").textContent = "O ganhou na linha 3";
    jogoAcabou = true;
    return
  }    


//verificação coluna
//X
  if(A1.textContent === "X" && B1.textContent === "X" && C1.textContent === "X"){
    document.getElementById("comentario").textContent = "X ganhou na coluna 1";
    jogoAcabou = true;
    return
  }

  if(A2.textContent === "X" && B2.textContent === "X" && C2.textContent === "X"){
    document.getElementById("comentario").textContent = "X ganhou na coluna 2";
    jogoAcabou = true;
    return;
  }

  if(A3.textContent === "X" && B3.textContent === "X" && C3.textContent === "X"){
    document.getElementById("comentario").textContent = "X ganhou na coluna 3";
    jogoAcabou = true;
    return
  }

//O
  if(A1.textContent === "O" && B1.textContent === "O" && C1.textContent === "O"){
    document.getElementById("comentario").textContent = "O ganhou na coluna 1";
    jogoAcabou = true;
    return
  }

  if(A2.textContent === "O" && B2.textContent === "O" && C2.textContent === "O"){
    document.getElementById("comentario").textContent = "O ganhou na coluna 2";
    jogoAcabou = true;
    return;
  }

  if(A3.textContent === "O" && B3.textContent === "O" && C3.textContent === "O"){
    document.getElementById("comentario").textContent = "O ganhou na coluna 3";
    jogoAcabou = true;
    return
  }

//diagonal principal
//X
  if(A1.textContent === "X" && B2.textContent === "X" && C3.textContent === "X"){
    document.getElementById("comentario").textContent = "X ganhou na diagonal principal";
    jogoAcabou = true;
    return
  }
//O
  if(A1.textContent === "O" && B2.textContent === "O" && C3.textContent === "O"){
    document.getElementById("comentario").textContent = "O ganhou na diagonal principal";
    jogoAcabou = true;
    return
  }
//diagonal secundaria
//X
  if(A3.textContent === "X" && B2.textContent === "X" && C1.textContent === "X"){
    document.getElementById("comentario").textContent= "X ganhou na diagonal secundária";
    jogoAcabou = true;
    return
  }
//O
  if(A3.textContent === "O" && B2.textContent === "O" && C1.textContent === "O"){
    document.getElementById("comentario").textContent = "O ganhou na diagonal secundária";
    jogoAcabou = true;
    return
  }

  if(jogadas === 10){
    document.getElementById("comentario").textContent = "Deu velha"
    jogoAcabou = true
    return
  }
}

//restart
function restart(){
  casas.forEach((casa) =>{
    casa.textContent = ""
  })
  jogadas = 1
  jogoAcabou = false
  document.getElementById("comentario").textContent = ""
}

casas.forEach(function(casa) {
  casa.addEventListener('click', function(event) {
    let id = event.target.id;
//validações pré jogo
    if(jogoAcabou === true){
      return
    }

    if(event.target.textContent !== ""){
      document.getElementById("comentario").textContent = "casa ja preenchida";
      return;
    }
//jogo    
    if(jogadas % 2 === 0){
        event.target.textContent = "O"
        jogadas++
        console.log(`clicou ${id}`);
    }
    else {
        event.target.textContent = "X"
        jogadas++
        console.log(`clicou ${id}`);

    }
    win();
    console.log(jogadas);
  });
});