// // OBJETOS
// // las claves del objeto se llaman propiedades
// let gabriel = {
//     nombre : "gabriel",
//     apellido : "guardia",
//     edad : 21,
//     comida : {
//         chatarra: "pizza",
//         sana: "choclo",
//     }
// }
// console.log(gabriel);
// console.log(gabriel.edad);
// console.log(gabriel.comida.sana)



class personas {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    hablar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
    caminar() {
        console.log(`Hoy caminé ${this.edad*4}`);
    }
    entrenar(time) {
        let tiempo= time*10;
        this.experiencia= this.experiencia+tiempo;
        console.log(`Ganaste ${this.experiencia} esperiencia`);
    }

}

const gabriel= new personas("gabriel", "guardia", 21);