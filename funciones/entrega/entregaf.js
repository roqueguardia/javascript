let a = Number(prompt("Ingrese un número"));
let b = Number(prompt("Ingrese otro número"));

// FUNCION PARA SUMAR
function sumaNumeros(a,b){
    let suma="La suma de los números es "+(a+b);
    console.log(suma);
}

// FUNCION PARA RESTAR
function restaNumeros(a,b){
    let resta="La resta de los números es "+(a-b);
    console.log(resta);
}

// FUNCION PARA MULTIPLICAR
function MultiplicacionDeNumeros(a,b){
    let por="La multiplicación de los números es "+(a*b);
    console.log(por);
}

// FUNCION PARA DIVIDIR
function divisionDeNumeros(a,b){
    let div="La división de los números es "+(a/b);
    console.log(div);
}

// FUNCION PARA MOSTRAR MENU
function mostrarTabla(a,b){
    console.log(`Menú de opciones\n ----------------\n Numero 1: ${a} Numero 2: ${b}\n 1) Sumar\n 2) Restar\n 3) Multiplicar\n 4) Dividir\n 5) Ingresar nuevos números\n 6) Salir`)
    let codigo = Number(prompt("Nro de opción:"));
    switch(codigo)
    {
        case 1:
            sumaNumeros(a,b);
            break;
        case 2:
            restaNumeros(a,b);
            break;
        case 3:
            MultiplicacionDeNumeros(a,b);
            break;
        case 4:
            divisionDeNumeros(a,b);
            break;
        case 5:
                let c = Number(prompt("Ingrese un número"));
                let d = Number(prompt("Ingrese otro número"));
                mostrarTabla(c,d);
            break;
        case 6:
            console.log("Fin.");
            break;
        default:
                console.log("Valor inválido");
                let e = Number(prompt("Ingrese un número"));
                let f = Number(prompt("Ingrese otro número"));
                mostrarTabla(e,f);
            break;
    }
}
mostrarTabla(a,b);




