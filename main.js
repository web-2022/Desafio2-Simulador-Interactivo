function comprar(precio, descuento, lugar, disponibilidad) {
    if (disponibilidad == "disponible") {
        descuento = precio * descuento / 100
        precioFinal = precio - descuento        
        alert(`Seleccionó el Tour: ${lugar}. Tiene un descuento de: ${descuento} USD`);
        alert('El precio final es de' + `: ${precioFinal} USD`);

    } else{
        alert("No tenemos disponible por el momento este tour");
        mensaje ();

    }


}

function mensaje (){
    let numero = prompt("Deseas que te avisemos cuando tegamos el tour disponible, escribe tu número de celular");
    numero = parseInt(numero);
    if ( numero > 899000000){
    alert("Te avisaremos en cuanto tengamos el tour disponible")
} else{
    alert("No ingresaste un número de celular válido") 
}
}