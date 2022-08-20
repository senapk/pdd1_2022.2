// terminal -> programa (gnome-terminal, ou cmd)
// shell -> cmd, powershell, bash, zsh, 
// programas -> cd, ls, gcc, node, programa

function obter_faixa2(idade) {
    let faixa = "";
    if (idade < 12) {
        faixa = "crianca";
    } else if (idade < 18) {
        faixa = "adolescente";
    } else if (idade < 65) {
        faixa = "adulto";
    } else {
        faixa = "idoso";
    }    
    return faixa;
}

function obter_faixa(idade) {   //SEMPRIIIIIIIIIIIIIIIIIIIIIIIII
    if (idade < 12)
        return "crianca";
    if (idade < 18)
        return "adolescente";
    if (idade < 65)
        return "adulto";
    return "idoso";    //EHHHH MUITO IMPORTANTIIIIIIIIIIIIIIIIII
}

let eh_primo = (value) => {
    for (let i = 2; i < value; i++)
        if (value % i == 0)
            return false;
    return true;
}




