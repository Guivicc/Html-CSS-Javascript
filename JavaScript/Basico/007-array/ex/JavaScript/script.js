let lista = []
let msg = document.getElementById("list")
let tam = document.getElementById("tammax")
let max = document.getElementById("valormax")
let min = document.getElementById("valormin")
let soma = document.getElementById("soma")

function adicionar(){
    let add = (document.getElementById("entrada").value)

    if(add == ""){
        alert("Preencha o campo com um numero")
        return
    }

    add = Number(document.getElementById("entrada").value)
    
    

    if(add <= 0){
        alert("Digite um numero maior que 0")
        return
    }

    if(add > 100){
        alert("Digite um numero ate 100")
        return
    }

    if(lista.indexOf(add) != -1){
        alert("numero repetido")
        return
    }    
    
    lista.push(add)
    msg.innerHTML = `${lista.join("<br>")}`

    tam.innerHTML = ``
    min.innerHTML = ``
    max.innerHTML = ``
    soma.innerHTML = ``
}

function chamada() {
    let ultimo = lista.length - 1
    let total = 0
    lista.sort()

    for(let i = 0; i<= ultimo; i++){
        total += lista[i]
    }

    tam.innerHTML = `a lista tem ${lista.length} numeros`
    min.innerHTML = `o menor valor da lista é ${lista[0]}`
    max.innerHTML = `o maior valor da lista é ${lista[ultimo]}`
    soma.innerHTML = `a soma de todos os numero da lista é ${total}`

    lista.length = 0
}