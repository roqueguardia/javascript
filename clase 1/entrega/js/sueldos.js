console.log("Liquidación de sueldos");
const legajo= prompt("Legajo Nro");
let ht= Number(prompt("Horas trabajadas"));
let vh= Number(prompt("Valor por hora"));
let sueldo=(ht*vh);
let aumento1=((ht*vh)+500);
let aumento2=((ht*vh)+1500);
if(ht<40&&vh<400){
    console.log("Las horas trabajadas deben ser mayores a 40.");
    console.log("El sueldo del colaborador debe ser mayor a $400");
    let ht= Number(prompt("Ingrese horas trabajadas nuevamente"));
    let vh= Number(prompt("Ingrese valor por hora nuevamente"));
    let sueldo=(ht*vh);
    alert("El sueldo del colaborador de legajo "+legajo+" es $"+sueldo);
}else{
    if(ht>40&&vh<400){
        console.log("El valor por hora debe ser superior a $400");
        let vh= Number(prompt("Ingrese valor por hora nuevamente"));
        let sueldo=(ht*vh);
        alert("El sueldo del colaborador de legajo "+legajo+" es $"+sueldo);
    }else{
        if(ht<40&&vh>400){
        console.log("Las horas trabajadas deben ser mayores a 40.");
        let ht=Number(prompt("Ingrese horas trabajadas"));
        let sueldo=(ht*vh);
        alert("El sueldo del colaborador de legajo "+legajo+" es $"+sueldo);
        }else{
            if(ht>40&&ht<50&&vh>400){
            alert("El sueldo del colaborador de legajo "+legajo+" es $"+sueldo);
            }else{
                if(ht>50)
                alert("El sueldo del colaborador de legajo "+legajo+" es $"+aumento1);
                else
                alert("El sueldo del colaborador de legajo "+legajo+" es $"+aumento2);
            }
        }
    }
}


