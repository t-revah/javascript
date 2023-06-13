let numero = prompt("Ingrese un nûmero");
let divisionx3 = numero % 3;
let divisionx5 = numero % 5;

if (divisionx3 === 0 && divisionx5 === 0){
    alert ("Divisible por ambos");
} else if (divisionx3 === 0){
    alert ("Divisible por 3");
} else if (divisionx5 === 0){
    alert ("Divisible por 5");
} else {
    alert (numero);
}