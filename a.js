/*Servicios ofrecidos*/

const servicios = [ {id:1, servicio:"Clases personalizadas"},
                    {id:2, servicio:"Regularización"},
                    {id:3, servicio:"Español para extranjeros"},
                    {id:4, servicio:"Grupos de conversación"}]

/*Seleccion de servicio por el usuario*/
let id = prompt ("Ingrese servicio de interes: \n1. Clases Personalizadas \n2. Regularización \n3. Español para extranjeros \n4. Grupos de conversación \nPresione ESC para salir");

/*Seleccion de numero de sesiones solicitadas*/
if (id<= 4 && id != "esc" && id != "ESC") {
    let solicitud = prompt ("Ingrese la cantidad de sesiones que desea")
    let costo = 200
    if (solicitud > 0) {
        alert ("Su total a pagar es de:" +(parseInt(solicitud)*costo)) /*total a pagar*/
    } else {
        alert("introduzca ESC para salir")
    }
    alert ("Sus sesiones han sido confirmadas")
} else {
    /*Confirmar selección*/
    let id = prompt("Confirme el servicio de su interes \n 1.Clases personalizadas\n 2.Regularización \n 3.Español para extranjeros \n 4.Grupos de conversación \n O presione ESC para salir");
    }
alert ("Gracias por visitarnos")

