


function validar(){
    let domCpf = document.getElementById("CPF")
    let domResultado = document.getElementById("resultado") 
    let CPF = domCpf.value
    let soma = 0
    let totalSoma = 0
    let validador1
    let validador2
    console.log(CPF)

    if(CPF.length > 11){
        domResultado.innerText = "CPF invalido tem mais de 11 números"
        return
    }
    
    if(CPF.length < 11){
        domResultado.innerText = "CPF invalido tem menos de 11 números"
        return
    }

    for(let i = 0, multiplo = 10; i <= 8; i++, multiplo--){
        
        soma = CPF[i] * multiplo 
        totalSoma = Number(totalSoma) + Number(soma)
        console.log('soma', soma , 'numeroCPF', CPF[i],'multiplo',multiplo, 'total' ,totalSoma)
    }

    let resto = totalSoma % 11

    if(resto == 0 || resto === 1){
        validador1 = 0
    }
    else{
        validador1 = 11 - resto
    }

    totalSoma = 0

    for(let i = 0, multiplo = 11; i <= 9; i++, multiplo--){
        
        if(i === 9){
            soma = validador1 * multiplo
        }
        else{
            soma = CPF[i] * multiplo 
        }
        totalSoma = Number(totalSoma) + Number(soma)
        console.log('soma', soma , 'numeroCPF', CPF[i],'multiplo',multiplo, 'total' ,totalSoma)
    }
    resto = totalSoma % 11


    if(resto === 1 || resto === 0){
        validador2 = 0
    }
    else{
        validador2 = 11 - resto
    }

    console.log("resultado", validador1, validador2)
    console.log("validadores informados", CPF[9], CPF[10])
    if(validador1 == CPF[9] && validador2 == CPF[10]){
         domResultado.innerText = "CPF Valido"
    }
    else{
         domResultado.innerText = "CPF INVALIDO numeros validadores não correspondem"
    }
}