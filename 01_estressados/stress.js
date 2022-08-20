
function existe(vet, value) {
    for (let elem of vet)
        if (elem === value)
            return true;
    return false;
}

function indexOf(vet, value) {
    for (let i = 0; i < vet.length; i++)
        if (vet[i] == value)
            return i;
    return -1;
}

function get_pos_neg(vet) {
    for (let i = 0; i < vet.length; i++)
        if (vet[i] < 0)
            return i;
    return -1;
}

let v = [10, 11, 12, 14, 15, 17]
console.log(existe(v, 13))