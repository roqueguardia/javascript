// // Numeros  pares del 100 al 500
// for(let i=100; i<=500;i++)
// {
//     if(i%2==0){
//         console.log(i);
//     }
// }
// // Confeccionar un programa para calcular el valor de la suma siguiente: 100+95-90..+50.
// let cont=0;
// for(let i=50;i<=100;i++)
// {
//     if(i%5==0)
//     {
//         cont=cont+i;
//         console.log(cont);
//     }
// }
// // Se ingresan 50 números enteros. Determinar el promedio de los números pares
// let acu=0;
// let cont=0;
// for(let i=0;i<=10;i++)
// {
//     let num= Number(prompt("Ingresá un número"));
//     if(num%2==0)
//     {
//         cont++;
//         acu=(num+acu);
//     }
// }
// console.log(acu/cont);
// // Se ingresan 100 letras. determinar la cantidad de vocales
// let cont=0;
// for(let i=0;i<=10;i++)
// {
//     let letra=prompt("Ingresá una letra");
//     if(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u")
//     {
//         cont++;
//     }
// }
// console.log("Se ingresaron "+cont+" vocales");

// // Confeccionar un programa para calcular la suma de los primeros n numeros naturales. n lo solicita el programa
// let cantNum = Number(prompt("¿Cuántos números vas a ingresar?"));
// let suma = 0;
// for(let i = 0;i<=cantNum;i++)
// {
//     let num = Number(prompt("Ingresá el número"));
//     suma = (suma + num);
// }
// alert("La suma es "+ suma);

// // Ingresar N y N números naturales. Determinar e Informar
// //     a La sumatoria de los valores de múltiplos de 4
// //     b la cantidad de valores multiplos de 5
// //     c la sumatoria de los valores que se ingresan en orden par

// let cantV = Number(prompt("Cantidad de valores a ingresar"));
// let m4 = 0;
// let m5=0;
// let m2=0;
// for( let i=0;i<=cantV;i++)
// {
//     let valor = Number(prompt("Numero a sumar"));
//     if(valor%4==0)
//     {
//         m4 = m4+valor;
//     }
//     else
//     {
//         if(valor%5==0)
//         {
//             m5++;
//         }
//         else
//         {
//             if(valor%2==0)
//             {
//                 m2=m2+valor;
//             }
//         }
        
//     }
// }
// console.log("Suma de los q4 " +m4+" Contador de multi q5 "+m5+ " Suma de q2 "+m2);


// // Dadas 20 notas y legajos de alumnos de un curso. Determinar
// // a) cantidad de alumnos aplazados
// // b) cuando la nota sea mayor a 7, mostrar el mensaje. "el alumno con legajo XXX ha promocionado"
// for(let i=0;i<=10;i++)
// {
//     let legajo = Number(prompt("Nro legajo"));
//     let nota = Number(prompt("Nota"));
//     if(nota>10)
//     {
//         console.log("Las notas deben estar correspondidas en el rango 1 a 10");
//     }
//     else
//     {
//     if(nota>=7)
//         {
//         console.log(`El alumno con legajo ${legajo} ha promocionado`);
//         }else
//         console.log(`El alumno con legajo ${legajo} ha desaprobado`);
//     }
// }

// // Dadas las edades y estaturas de 10 alumnos. determinar
// // Edad promedio
// // estarura promedio 
// // cantidad de mayores de 10 años
// // cantidad de alimnos que miden mas de 1.4

// let sumaEdad=0;
// let sumaEstatura=0;
// let cant10=0;
// let cantEst=0;
// for(let i=1;i<=10;i++)
// {
//     let edad=Number(prompt(`Ingrese la edad del alumno nro ${i}`));
//     sumaEdad= sumaEdad+edad;
//     let estatura= Number(prompt(`Ingrese la estatura del alumno nro ${i}`));
//     sumaEstatura= sumaEstatura+estatura;
//     if(edad>10)
//     {
//         cant10++;
//     }
//     if(estatura>1.4)
//     {
//         cantEst++;
//     }
// }
// let promEdad= (sumaEdad/10);
// let promEst= (sumaEstatura/10)
// console.log(`La edad promedio del curso es ${promEdad}. La estatura promedio es ${promEst}. La cantidad de mayores de 10 años es ${cant10}. La cantidad con estatura mayor a 1.4 es ${cantEst}`);

// Ingresar 18 valores de temperatura distintos de CredentialsContainer. se pide determinar e informar cuantas ternas de valores positivos y cuantas negativos hay.
// let ban=0;
// let banNegativo=0;
// let cantTerna=0;
// let cantTernasNegativas=0;
// for(let i=0;i<=10;i++)
// {
//     let temp= Number(prompt("Ingresá 10 valores de temperatura distintos de cero"));
//     if(temp>0)
//     {
//         ban++;
//             if(ban==3)
//             {
//                 ban=0;
//                 cantTerna++;
//             }
//     }
//     else
//     {
//         if(temp<0)
//         {
//             ban=0;
//             banNegativo++;
//             if(banNegativo==3)
//             {
//                 cantTernasNegativas++;
//             }
//         }
//     }
// }
// // ESCRITURA DE CONDICIONES EN PLURAL O SINGULAR
// if(cantTerna==1)
//     {
//         console.log(`Hay ${cantTerna} terna positiva`);
//     }
//     else
//     {
//         console.log(`Hay ${cantTerna} ternas positivas`);
//     }

//     if(cantTernasNegativas==1)
//     {
//         console.log(`Hay ${cantTernasNegativas} terna negativa`);
//     }
//     else
//     {
//         console.log(`Hay ${cantTernasNegativas} ternas negativas`);
//     }
// Averiguar el factorial de un número
// let num=Number(prompt("Ingresa un número"));
// let factorial=1;
// for(let i=1;i<=num;i++)
// {
//     factorial=i*factorial;
// }
// console.log(`El factorial de ${num} es ${factorial}`);
// Numeros del 1 al 100
// for(let i=1;i<=100;i++)
// {
//     console.log(i);
// }

