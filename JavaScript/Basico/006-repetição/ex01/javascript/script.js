function validandosinal(valor){
    const sinais = (valor.match(/[+-]/g) || []).length
    return sinais > 1
}

function contar(){
    const seta = "\u{27A1}"
    const fim = "\u{1F3C1}"
    let comeco = document.getElementById('inicio').value.trim()
    let final = document.getElementById('quantidade').value.trim()
    let pular = document.getElementById('pula').value.trim()
    let res = document.getElementById('msg')
    let resultado = ""
    
    
    
    //validando campo vazio
    if(comeco === ""  || final === "" || pular === ""){
        res.innerHTML = "Preencha todos os campos"
        return
    }


    //valindado maximo
    if(final <= 0){
        res.innerHTML = "digite um numero acima de 0 no campo Maximo"
        return
    }


    //convertendo para num

    comeco = Number(comeco)
    final = Number(final)
    pular = Number(pular)
    let multi = comeco
    resultado += `${multi} ${seta} `


    //soma
    for( let i = 1; i <= final; i++){
        multi = multi + pular 
        resultado += `${multi} ${seta} `
    }

    resultado += fim
    res.innerHTML = resultado

    
          
}
