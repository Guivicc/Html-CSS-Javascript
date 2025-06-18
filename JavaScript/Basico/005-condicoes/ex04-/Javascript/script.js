function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const mes = data.getMonth()
    const dia = data.getDate()
    const res = document.getElementById('msg')
    const dataUSER = document.getElementById('nasci')
    

    //vereficando se o campo esta preenchido
    if(!dataUSER.value){
        res.innerHTML = "preencha o campo com a data de nascimento"
        return
    }

    //extraindo o ano do formulario
    const anoNascimento = new Date(dataUSER.value).getFullYear()  
    const mesNascimento = new Date(dataUSER.value).getMonth()
    const diaNascimento = new Date(dataUSER.value).getDate()

        
    
    //verifica se o ano informando é valido
    if(anoNascimento > ano){
        res.innerHTML = "ano invalido"
        return
    }

    //definindo a idade 
    let idade = ano - anoNascimento

    //valindando sexo
    const sexoFemino = document.getElementById('fem').checked
    const sexoMasculino = document.getElementById('mas').checked
    let genero = ''

    if(sexoFemino) {
        genero = 'Feminino'
    }
    else if(sexoMasculino) {
        genero = 'Masculino'
    }
    else {
        res.innerHTML = "escolha um sexo"
        return
    }
    //validando o aniversario do usuario

    if(mesNascimento < mes){
        res.innerHTML = `Você tem ${idade} anos e é do sexo ${genero}`
    }
    else if(mesNascimento > mes){
        res.innerHTML = `Você tem ${--idade} anos e é do sexo ${genero}`
    }
    else if(mesNascimento == mes){
        if(diaNascimento <= dia){
            res.innerHTML = `Você tem ${idade} anos e é do sexo ${genero}`
        }
        else{
            res.innerHTML = `Você tem ${--idade} anos e é do sexo ${genero}`
        }
    }



}