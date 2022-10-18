const $FORM=document.getElementById('form');
const $DNI=document.getElementById('dni');
const $NAME=document.getElementById('name');
const $SURNAME=document.getElementById('surname');
const $COMENT=document.getElementById('coment');
const $TELEFONO=document.getElementById('tlf');
/**
 * 
 * @param {SubmitEvent} e 
 */

function validar(){

    e.preventDefault();

    const name=$NAME.value;
    const surname=$SURNAME.value;
    const dni=$DNI.value;
    const tlf=$TELEFONO.value;
    const coment=$COMENT.value;

    if(name==false || isValidName(name)==false){
        alert("El nombre introducido no corresponde con el valor indicado");
    } else if(surname==false || isValidName(surname)==false){
        alert("El apellido introducido no corresponde con el valor indicado");
    }else if(dni==false|| isValidDni(dni)==false){
        alert("El DNI introducido no corresponde con el valor indicado");
    } else if(tlf==false || isValidTlf(tlf)==false){
        alert("El Telefono introducido no corresponde con el valor indicado");
    }else if(coment==false || isValidName(coment)==false){
        alert("El comentario introducido no corresponde con el valor indicado");
    }else{
        var regUsuario={dni:dni, name:name,surname:surname,tlf:tlf,coment:coment};
        console.log(regUsuario);
        var newUser=JSON.stringify(regUsuario);
        console.log(newUser);
    }


}


function isValidName(name){

    const validacion =
    /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    return validacion.test(name);
        
}
function isValidTlf(tlf){
    const validacion=
    /^\+\d{2,3}\d{9}$/;
    return validacion.test(tlf);

}
function isValidDni(dni){
    const validacion=
    /^\d{8}[a-zA-Z]$/;
    return validacion.test(dni);
}

function isValidComent(comentario) {
    const validacion = /^[\s\S]{0,250}$/;
    return validacion.test(comentario);
} 

$FORM.addEventListener('submit',validar);