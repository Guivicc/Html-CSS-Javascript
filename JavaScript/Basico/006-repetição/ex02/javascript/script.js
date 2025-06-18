function calc(){
    let tab = document.getElementById('tabuada').value.trim()
    let res = document.getElementById('msg')
    let resposta = ""
    //valindaod espaço vazio
    if(tab === ""){
        res.innerHTML = "digite qual tabuada deseja saber"
        return
    }
    //calc 

    for(let i = 0; i <= 10 ; i++){
        let mult = i * tab
        resposta += `${tab} x ${i} = ${mult} <br>`
    } 

    res.innerHTML = resposta
}
