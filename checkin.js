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
document.getElementById("pases").innerText = data.pases;

const boton = document.getElementById("btnConfirmar");

// 🔥 AQUI ESTA LA MAGIA
if(data.usado === "SI"){
  boton.innerText = "⚠ Ya utilizado";
  boton.disabled = true;
  boton.classList.add("confirmado");
}

}

window.addEventListener("load", cargarInvitado);

const params = new URLSearchParams(window.location.search);
const id = params.get("inv");

if(invitados[id]){

document.getElementById("nombre").innerText = invitados[id].nombre;

}

function confirmar(){

const boton = document.getElementById("btnConfirmar");

if(boton.disabled) return;

boton.disabled = true; // 🔥 bloquea inmediatamente

const url = "https://script.google.com/macros/s/AKfycbwOMQdjOy9Sa2AwWFbUznqti9u9Pac_qHn-zzZeeJOc9oXlPWV7DEKeHrukbTFalxGZ/exec?inv=" + id;

fetch(url)
.then(res => res.text())
.then(data => {

  if(data.includes("duplicado")){
    boton.innerText = "⚠ Ya utilizado";
    boton.classList.add("confirmado");
    return;
  }

  boton.innerText = "✔ Entrada registrada";
  boton.classList.add("confirmado");

})
.catch((err)=>{
  console.error(err);
  alert("Error enviando datos");
  boton.disabled = false; // 🔥 reactivar si falla
});

}