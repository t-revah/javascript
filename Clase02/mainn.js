/*let verdad = true; Si es true muestra ambas filas
let verdad2 = true; Si alguno es false muestra el true

if(verdad){
    console.log ("verdad")
}

if(verdad2){
    console.log ("verdad2")
}*/ 



/*let numero  = 5; Se puede jugar con == , != y los estricamente = o !=.

if (numero == 5){
    console.log ("El numero es 5")
}

if (numero!= 5){
    console.log ("El numero no es 5")
}*/



/*let numero1 = 5; El === es estrictamente, el numero1 tiene que ser igual al numero2, con el == puede ser igual el numero1=5 a la decripcion del numero2 = "5"
let numero2 = "5";

if (numero1 === numero2){ 
    console.log ("es verdadero");
} */






/*let numero1 = Number(prompt("Ingrese un numero")); //conel Number lo transformas, como con float
let numero2 = Number(prompt("Ingrese otro numero"));

if (numero1 > numero2){ 
    console.log (`${numero1} es mayor que ${numero2}`);
} 

else{
    console.log (`${numero1} no es mayor que ${numero2}`)
} */


let edad = prompt("Ingrese la edad");

if(edad > 18){
    console.log(`Es mayor de edad`);
} else if (edad<18){
        console.log(`Es menor de edad`);
    } else {
        console.log (`Tiene 18`);
    }

    
