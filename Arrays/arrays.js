// // // ARRAYS
// // let lista = ["persona","mascota","numero", 22,1212,true,false,{ nombre: 'gabriel', apellido: 'guardia'},['fac0',200]];
// // for(let i=0;i<lista.length;i++)
// // {
// //     console.log(lista[i]);
// // }
// let ferreteria = ["tornillos", "madera"]
// let superMercado=["pera", "manzana", "cerveza", "vino", "agua", "leche"];

// // push() agrega un elemento al array
// superMercado.push("kilo de pan");

// // superMercado.sort(); acomoda alfabeticamente

// superMercado.sort();

// // superMercado.unshift("tomate"); agrega un elemento alprincipio de la lista
// superMercado.unshift("tomate");

// superMercado[4] = "vino tinto";

// console.log(superMercado);

// // MEZCLA DOS LISTA
// let listaDefinitiva= superMercado.concat(ferreteria); 
// // MEZCLA DOS LISTA

// console.log(listaDefinitiva);

// // CORTA UNA LISTA
// let listaReducida= listaDefinitiva.slice(2,6);

// console.log(listaReducida);

class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}


let listaSupermercado = [];


listaSupermercado.push(new Producto ("Tornillo",100));
listaSupermercado.push(new Producto ("Jamon",10000));
listaSupermercado.push(new Producto ("Casa",600000000000));

const agregarProductosALaLista = () => {
    let nombre = prompt("Nombre del producto");
    let precio = Number(prompt("Precio del producto"));
    let producto = new Producto(nombre, precio);
    listaSupermercado.push(producto)
}

listaSupermercado.sort()


console.log(listaSupermercado);


// METODOS PARA MRECORRER UN ARRAY

for( let i=0; i< listaSupermercado.length;i++)
{
    console.log(listaSupermercado[i]);
}

// for of

for(const objeto of listaSupermercado){
    console.log(objeto.precio);
}

let objeto = { nombre: "tomate", precio:400}

// for in
for(const prop in objeto)
{
    console.log(prop);
}

// for each()
 listaSupermercado.forEach(objeto => {
     console.log(objeto.prop);
 })


// let search =prompt("que queres buscar");
// let buscadorUnico= listaSupermercado.find(objeto => objeto.nombre == search);
// console.log(buscadorUnico);

// FIND ME TRAE 1 OBJETO

// Filter me trae una coleccion de objetos
let search =prompt("que queres buscar");
let buscadorMultiple= listaSupermercado.filter(objeto => objeto.nombre == search);
console.log(buscadorUnico);

let texto= "hola mundo soy gaby"
console.log(texto.length)





