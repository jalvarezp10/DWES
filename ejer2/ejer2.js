



const $FORM=document.getElementById('ej2');
const $NAME=document.getElementById('name');
const $SURNAME=document.getElementById('surname');
const $EMAIL=document.getElementById('email');
const $WEB=document.getElementById('web');





function validarFormulario(e){
    
   e.preventDefault();

    const name=$NAME.value;
    const surname=$SURNAME.value;
    const email=$EMAIL.value;
    const web=$WEB.value;
    

    if (name==false||isValidName(name)==false){
        alert('El nombre debe ser un valor valido');
        return false;

    }else if(surname==false|| isValidName(surname)==false){
        alert('El apellido debe ser un valor valido');
        return false;
        
    }else if(email==false||isValidEmail(email)==false){
        alert('El email debe ser un valor valido');
        return false;

    
    }//else if(web==false||isValidWeb(web)){
        //alert('La web debe ser un valor valido');
        //return false;


    else{
        var regUsuario={nombre:name,apellido:surname,email:email,web:web}
        console.log(regUsuario);
        var newUser=JSON.stringify(regUsuario);
        console.log(newUser);

    }




}

function isValidName(name) {
    const validacion =
   /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    return validacion.test(name);
}

function isValidEmail(email) {
    const validacion = /^(.+\@.+\..+)$/;
    return validacion.test(email);
}
function isValidWeb(web){
    const validacion=/^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/;
    return validacion.test(web);

}
$FORM.addEventListener('submit',validarFormulario);



