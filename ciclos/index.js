// ciclo por conteo

// for(inicio;condicion;iteracion){
//     sentencia
// }
// cuando se suma uno a uno se pone ++
// cuando se resta de a 1 se pone --


// let num=0;
// for(0;num<10;num=num+1)
// {
//     console.log("hola mundo");
// }

// for(let manjar=0;manjar<7;manjar++){
//     console.log("facundo quiroga");
// }

// for(let i=0;i<10;i++){
//     console.log(i);
// }


// CICLO POR CONDICIÓN
// while(condicion){
// sentencia;
// }


// let num=0;
// while(num<10){
//     console.log("george");
//     num++;
// }

// do{
//     sentencia
// }while(condincion)

// let num=Number(prompt("ingresa un num"));

// for(let i=1;i<=num;i++)
// {
//     if(i%2==0){
//         console.log("numero par"+i);
//     }else{
//         console.log("impares"+i);
//     }
// }


// continue/break
// continue

// frena la iteracion pero el ciclo continua, SALTEA

// break

// me frena el ciclo

// switch(condicion){
//     case 2:
//         console.log("El num ingresado es 4");
//         break;
//     case 5:
//         console.log("Num es 5");
//         break;
//     default:
//         console.log("facundo");
//         break;

// }


let pass="12";
let dato=Number(prompt("contraseña"));
let intentos=5;

while(dato !=pass && intentos>0){
    alert("Te equivocaste, te quedan "+intentos+"intentos");
    intentos--;
    dato= Number(prompt("ingresa contraseña"));

    let validar =confirm("deseas cambiar la contraseña?");
    
    if(validar=true){
        let passOld= prompt("Ingresa contraseña vieja");

        if(passOld==pass){
            pass=Number(prompt("Ingresar nueva contraseña"));
        }
    }
}