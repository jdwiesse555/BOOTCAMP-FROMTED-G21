const obj_usuarios = {
    usuario  :[ {    user : "jwiesse",
           pass : "1234",
           nombre : "javier wiesse"},
           {    user : "oanton",
            pass : "1234",
            nombre : "Oscar Anton"},
            {    user : "lrevolledo",
                pass : "1234",
                nombre : "Lincol Revolledo"},
 
       ],    
       encontrar_user: function(user) {
           return this.usuario.filter(function(userpass ){
               return userpass.user === user 
           })
       }   
   
   }
   



function login() {
    
    const user  = document.getElementById("user");
    const pass = document.getElementById("pass");
 
    let datos = obj_usuarios.encontrar_user(user.value);
    if (datos.length > 0) {
        if (datos[0].pass===pass.value) {
            console.log(datos)
            window.alert("Bienvenido a nuestro sitio web " + datos[0].nombre );
            return true;
  

        } else {
            window.alert("Usuario o contraseña invalido ");
            return false
        } 

    } else {
        window.alert("Usuario o contraseña invalido ");
            return false
    }

    
        
}
   

