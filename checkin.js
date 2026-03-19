async function obtenerInvitado(id){

const url = "https://script.google.com/macros/s/AKfycbwOMQdjOy9Sa2AwWFbUznqti9u9Pac_qHn-zzZeeJOc9oXlPWV7DEKeHrukbTFalxGZ/exec?inv=" + id + "&tipo=consulta";

const res = await fetch(url);
const data = await res.json();

return data;

}

async function cargarInvitado(){

const params = new URLSearchParams(window.location.search);
const id = params.get("inv");

if(!id) return;

const data = await obtenerInvitado(id);

document.getElementById("nombre").innerText = data.nombre;
document.getElementById("mesa").innerText = data.mesa;

}

window.addEventListener("load", cargarInvitado);

const params = new URLSearchParams(window.location.search);
const id = params.get("inv");

if(invitados[id]){

document.getElementById("nombre").innerText = invitados[id].nombre;
document.getElementById("mesa").innerText = invitados[id].mesa;

}

function confirmar(){

const boton = document.getElementById("btnConfirmar");

if(boton.disabled) return;

// 🔥 usamos GET en lugar de POST
const url = "https://script.google.com/macros/s/AKfycbwOMQdjOy9Sa2AwWFbUznqti9u9Pac_qHn-zzZeeJOc9oXlPWV7DEKeHrukbTFalxGZ/exec?inv=" + id;

fetch(url)
.then(res => res.text())
.then(data => {
  console.log(data);

  boton.innerText = "✔ Entrada registrada";
  boton.classList.add("confirmado");
  boton.disabled = true;
})
.catch((err)=>{
  console.error(err);
  alert("Error enviando datos");
});

}