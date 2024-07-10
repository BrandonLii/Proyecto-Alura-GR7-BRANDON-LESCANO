const vocalA = "ai"     //valor string vocal a
const vocalE = "enter"  //valor string vocal e
const vocalI = "imes"   //valor string vocal i
const vocalO = "ober"   //valor string vocal o
const vocalU = "ufat"   //valor string vocal u



let palabraSalida = ""      // almacena palabra de salida


function encriptar_palabra(){
     
    let palabraEntrada = document.getElementById('ingreso-de-texto').value
        
        if (palabraEntrada == ""){                                        //condiciono que si o si el usuario ingrese una palabra    
                alert("Ingresa una palabra")
                return;                                                   //no podra seguir el cogigo hasta que eingrese una palabra 
            }
             
        palabraEntrada = palabraEntrada.toLowerCase ()                    // transforma la palabra de entrada a minusculas
        
        for( let i=0; i < palabraEntrada.length; i++){                    /*realizo una iteracion mientras sea menor al tamaño de la palabra ingresada
                                                                          va a recorrero cada letra de la palabra y la va a almacenar en la variable posicion*/ 
            let posicion = palabraEntrada[i]

            if (posicion == 'a'){                                         //por cada posicion que recorra va a verificar si la letra de dicha posicion coincida con una vocal
                
                posicion = posicion.replace("a",vocalA)                   //y si es asi las va a reemplzar (.replce)  por las constantes declaradas con         
            }
            // <input type="text" id="ingreso-de-texto">
            if (posicion == 'e'){
                posicion = posicion.replace("e",vocalE)
            }

            if (posicion == 'i'){
                posicion = posicion.replace("i",vocalI)
            }
            if (posicion == 'o'){
                posicion = posicion.replace("o",vocalO)
            }
            if (posicion == 'u'){
                posicion = posicion.replace("u",vocalU)
            }

            palabraSalida = palabraSalida + posicion                    // la palara de salida va a ser igual a la suma de la posicon de las vocales ya reemplzadas
            }                                                           // se almacena y se va a sumar a la palabra formada anteiormente para obtener la plabra final 
                                                                        //una vez terminada la iteracion i

        
        document.getElementById('palabra-de-salida').innerHTML = palabraSalida //modifico el DOM para guardar mi palabra de salida en el span
        palabraSalida = ""   
                                                         // vacio mi palabra de slaida para evitar errores
}   

function desencriptar_palabra(){
          
    const palabraEntrada = document.getElementById('ingreso-de-texto').value;   //traigo el valor de mi palabra de entrada
    let palabraDesencriptada = palabraEntrada                               //almaceno mi pabra de entrada en una variable
                
        .replace(/ai/g, 'a')                    // reemplazo cada equivalencia de manera global (g) por las respectivas vocales
        .replace(/enter/g,'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')

    document.getElementById('palabra-de-salida').innerText = palabraDesencriptada;  //traigo el valor de mi palabra de salida y la guardo en mi variable creada
    palabraSalida = ""  
      
}
    
function copiar_palabra(){
    
    const salida = document.getElementById('palabra-de-salida').innerText           //guardo en una cosnante el valor del span manipulado el DOM
    navigator.clipboard.writeText(salida).then(() => {
        alert('El Texto se ha copiado correctamente');
    }).catch(err => {
        alert('Error al copiar el texto: ', err);
    });
    
       
}

