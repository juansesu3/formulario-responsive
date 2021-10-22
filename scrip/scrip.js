/*function getData(){

    var name = document.getElementById("name").value;
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

   console.log(name+" "+user+" "+password)
}*/
//este es el array de todos los datos
var allDatos = [];
//almacenamos en el array allDatos los de bd local
allDatos.push(localStorage.getItem("frm"));
//mostramos los datos
//mostrar() 
function guardarDatos() {
  //validamos
  validar();
  //array de los datos
  datos = [];
  //agragamos valores a el array
  datos.push(document.getElementById("email").value);
  datos.push($("#name").val());
  datos.push($("#user").val());
  datos.push($("#password").val());
  //alacenando el array dentro del array allDatos
  allDatos.push(datos);
  //convertimos el array allDatos a un JSON
  arjson = JSON.stringify(allDatos);
  //alacenamos los datos en la base de datos
  localStorage.setItem("frm", arjson);
  //limpiamos el formulario
  borrarCampos();
  //mostramos  la iformacion
  //mostrar()
}
/*function mostrar() {
  //tomamos los valores almacenados en la bd local tambien decodificamos el array JSON
  campos = JSON.parse(localStorage.getItem("frm"));
  for (x = 0; x < campos.length; x++) {
    $("#table").append(
      "<tr> <td>" +
        campos[x][0] +
        "</td> <td>" +
        campos[x][1] +
        "</td> <td>" +
        campos[x][2] +
        "</td> <td>" +
        campos[x][3] +
        "</td> </tr>"
    );
  }
}*/
//validamos los datos y borramos la informacion
function validar() {
  //todos los campos
  emails = $("#email").val();
  names = $("#name").val();
  users = $("#user").val();
  passwords = $("#password").val();

  //validamos el email
  if (emails.length < 5) {
    alert("Falta el email");
    return false;
  }
  //validamos el names
  if (names.length < 2) {
    alert("Falta el nombre");
    return false;
  }
  if (users.length < 4) {
    alert("Falta el usuario");
    return false;
  }
  if (passwords.length < 5) {
    alert("Falta el password");
    return false;
  }
}
function borrarCampos() {
  $("#email").val("");
  $("#name").val("");
  $("#user").val("");
  $("#password").val("");
}
