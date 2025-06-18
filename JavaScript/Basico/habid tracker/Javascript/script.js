let habitos = JSON.parse(localStorage.getItem("habitos")) || [];
const entrada = document.getElementById("adicionar_habito")
let hoje = new Date();
let diaDaSemana = hoje.getDay()
diaDaSemana = diaDaSemana === 0 ? 6 : diaDaSemana - 1;
let trArrastado = null;
let ListaTam = 0;
let ListaTamCompleted = 0

function criar(){
    erro.innerHTML = "";
    if(entrada.value.length > 23){
      erro.innerHTML = "hábito muito grande";
      return;
    }
    if(entrada.value.trim() !== ""){
        const novo_habito = {
        nome: entrada.value.trim(),
        dias: [false, false, false, false, false, false, false]
        };
        habitos.push(novo_habito);
        
    }
    //salvar no localstorage
    localStorage.setItem("habitos", JSON.stringify(habitos));
    mostrar_habitos();
    
}

function remover_all(){

    habitos = [];

    localStorage.removeItem("habitos");

    mostrar_habitos();
}

function remover(index) {
  habitos.splice(index, 1);
  localStorage.setItem("habitos", JSON.stringify(habitos));
  mostrar_habitos();
}

function mover(de, para){
  //valida o destino
  if(para < 0 || para >= habitos.length)
    return;

  const temp = habitos[de];
  habitos[de] = habitos[para];
  habitos[para] = temp;

  //atualiza localstorage
  localStorage.setItem("habitos", JSON.stringify(habitos));
  mostrar_habitos();
}

function mostrar_habitos() {
  const container = document.getElementById("tabela_habitos");
  container.innerHTML = "";
  ListaTam = 0
  

  habitos.forEach((habito, index) => {
    const linha = document.createElement("tr");
    
    ListaTam++;
    //drag and drop
    linha.setAttribute("draggable", "true");

    linha.addEventListener("dragstart", () => {  //ativa quando começa a arrastar o objeto
      trArrastado = index;
      linha.classList.add("destaqueFix");

    });

    linha.addEventListener("dragover", (e) => {  // Disparado enquanto o item arrastado está passando por cima desta linha
      e.preventDefault();// Necessário para permitir o drop
      linha.classList.add("destaque");
    });

    linha.addEventListener("dragleave", () => {  // Disparado quando o item arrastado sai de cima desta linha
      linha.classList.remove("destaque");
    });

    linha.addEventListener("drop", () => {  // Disparado quando o item é solto sobre esta linha
      linha.classList.remove("destaque")
      if (trArrastado !== null && trArrastado !== index) {
        mover(trArrastado, index);
      }
      else
        linha.classList.remove("destaqueFix")
    })

    
    //drag and drop

    // Coluna do nome
    const tdnome = document.createElement("td");
    tdnome.textContent = habito.nome;
    linha.appendChild(tdnome);
    

    // Colunas dos dias
    for (let i = 0; i < 7; i++) {
      const tdDia = document.createElement("td");
      const checkbox = document.createElement("input");

      checkbox.type = "checkbox";
      checkbox.checked = habito.dias[i];
      checkbox.addEventListener("change", () => {
        habito.dias[i] = checkbox.checked;
        localStorage.setItem("habitos", JSON.stringify(habitos));
      });

      tdDia.appendChild(checkbox);
      linha.appendChild(tdDia);
    }

    //coluna ações
    //botão remover
    const tdAcoes = document.createElement("td");
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", () => remover(index));
    tdAcoes.appendChild(botaoRemover);
    

    //botão concluir
    const botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "Concluir";
    //ações do botão
    botaoConcluir.addEventListener("click", () => {
      habito.dias[diaDaSemana] = true;
      localStorage.setItem("habitos", JSON.stringify(habitos));
      mostrar_habitos();
    })
    tdAcoes.appendChild(botaoConcluir);

    //botão de subir
    const botaoSubir = document.createElement("button");
    botaoSubir.textContent = "🔼";
    botaoSubir.disabled = index === 0;
    botaoSubir.addEventListener("click", () => mover(index, index - 1));
    tdAcoes.appendChild(botaoSubir);
    //botão de descer
    const botaoDescer = document.createElement("button");
    botaoDescer.textContent = "🔽";
    botaoDescer.disabled = index === habitos.length - 1;
    botaoDescer.addEventListener("click", () => mover(index, index + 1));
    tdAcoes.appendChild(botaoDescer);
    
    linha.appendChild(tdAcoes);
    // Adiciona a linha completa à tabela
    container.appendChild(linha);
  });

  displayBarHTML() ;
  displayBarJavascript();
}

//sidebar

 function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
      
    }


/*modo escuro*/

function toggleTheme() {
    document.body.classList.toggle("dark");
  }


/*barra de progresso html */

function ocultBarProgressHTML(){
  const barra = document.getElementById("barProgressHTML");
  barra.classList.toggle("ocult");
}

function attProgress(){
  habitos.forEach(h =>{
    if(h.dias[diaDaSemana]){
      ListaTamCompleted++;
    }
  })

  
}

function displayBarHTML(){
  let barHTML = document.getElementById("barhtml");
  attProgress();
  barHTML.value = ListaTamCompleted
  barHTML.max = ListaTam
  ListaTamCompleted = 0
}
 
//barrade progresso javascript

function displayBarJavascript(){

  const barraContainer = document.querySelector(".barProgresJavascript");
  const barraPreenchimento = barraContainer.querySelector(".preenchimento");

  attProgress();

  if(ListaTam === 0){
    barraPreenchimento.style.width = "0%";
    return
  }

  let percentual = (ListaTamCompleted / ListaTam) * 100;

  barraPreenchimento.style.width = percentual + "%";
  ListaTamCompleted = 0
}

function ocultBarProgressJavascript(){
  const barra = document.getElementById("barJavascript");
  barra.classList.toggle("ocult");

  console.log(barra.classList)
}


document.body.addEventListener('change', function(e) {
  if (e.target.type === 'checkbox') {
    mostrar_habitos();
  }
});