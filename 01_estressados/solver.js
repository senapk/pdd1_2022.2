
function existe(lista, elem) {
    for (let i = 0; i < lista.length; i++)
        if (lista[i] == elem)
            return true;        
    return false;
}

lista = [1, 4, 3, 2, 5, 6, 7, 8]
resp = lista.indexOf(9) // a posição ou -1
if (resp == -1)
    console.log("nao existe")
else
    console.log("existe")

