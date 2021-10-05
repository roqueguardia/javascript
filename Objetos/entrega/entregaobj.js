console.log("PARA CHUPARSE LOS DEDOS");
class ordenesRestaurante{
    constructor(nombre, pago, pastas, postre){
        this.nombre=nombre;
        this.pago=pago;
        this.pastas=pastas;
        this.postre=postre;
    }
    ordernarPlato() {
        console.log(`¡Bienvenido ${this.nombre} a la app de PCLD!\nTu plato principal es ${this.pastas} y el postre es ${this.postre}`);
    }
    pagarPlato() {
        console.log(`El costo es $${this.pago}\nMuchas gracias por tu compra, ${this.nombre}`);
    }
}

const nuevaOrden = new ordenesRestaurante("Gabriel",500,"Ñoquis","Frutillas a la crema");
nuevaOrden.ordernarPlato();
nuevaOrden.pagarPlato();