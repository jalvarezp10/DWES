
const $FORM = document.getElementById('form');
const $DNI = document.getElementById('dni');
const $NAME = document.getElementById('name');
const $SURNAME = document.getElementById('surname');
const $DATE=document.getElementById('fecha');
const $EMAIL = document.getElementById('email');
const $PASSWORD = document.getElementById('password');
const $WEB=document.getElementById('web');



function validarForm(e){
    e.preventDefault();


    const name=$NAME.value;
    const dni=$DNI.value;
    const surname=$SURNAME.value;
    const date=$DATE.value;
    const email=$EMAIL.value;
    const password=$PASSWORD.value;
    const web =$WEB.value;

    if(name==false|| isValidName(name)==false|| name==""){
        alert("El nombre no tiene un valor valido");

    } else if ((surname==false|| isValidName(surname)==false|| surname=="")){
        alert("Los apellidos no tienen un valor valido");
    }else if(dni==false|| isValidDni(dni)==false||dni==""){
        alert("El dni introducido no tiene un valor valido");

    }else if(password==false||isValidPassword(password)||password==""){
        alert("La contraseña no es valida")

    }else if(email==false|| isValidEmail(email)==false||email==""){
        alert("El dni introducido no tiene un valor valido");

    }else if(dni==false|| isValidDni(dni)==false||dni==""){
        alert("El dni introducido no tiene un valor valido");

    }//else if(date==false||validarFormatoFecha(date)==false||date==""){
       // alert("La fecha introducida no tiene un valor valido");

   else if(web==false||isValidWeb(web)==false||web==""){
        alert("La web introducida no tiene un valor valido");
    } else{
        var regUsuario={dni:dni,name:name,surname:surname,email:email,web:web,password:password}
        console.log(regUsuario);
        var newUser=JSON.stringify(regUsuario);
        console.log(newUser);
    }

    






}
function isValidDni(dni){
    const validacion=/^\d{8}[a-zA-Z]$/;
    
    return validacion.test(dni);

}

function isValidName(name){
    const validacion= /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    return validacion.test(name);
   
}


function isValidEmail(email){
    const validacion = /^(.+\@.+\..+)$/;
    return validacion.test(email);
}

function isValidPassword(password){
    const validacion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/;
    return validacion.test(password);
}

function validarFormatoFecha(date) {
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((date.match(RegExPattern)) && (date!='')) {
          return true;
    } else {
          return false;
    }
}
function isValidWeb(web){
    const validacion=/^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/;
    return validacion.test(web);
}
 
$FORM.addEventListener('submit',validarForm);