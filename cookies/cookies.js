function setCookie() {
    let username=prompt("Introduce tu nombre");
    if (username != "" && username != null) {
        const d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie =  "username=" + username + ";" + expires + ";path=/";
        console.log(document.cookie);
    
      }
   
    
  }

  function getCookie() {
    let name ="username=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        console.log("fjsd")
        return c.substring(name.length, c.length);
        
      }
    }
    return "";
    
  }

  function consultarCookie(){
    var value=getCookie();
    if(value != ""){
        alert("El valor de la cookie es "+value);
    }
    console.log(value);
  }
  
