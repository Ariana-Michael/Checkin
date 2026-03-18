const invitados = {

michael:{
nombre:"Michael López",
mesa:"8"
},

ana:{
nombre:"Ana Torres",
mesa:"4"
}

};

const params = new URLSearchParams(window.location.search);
const id = params.get("inv");

if(invitados[id]){

document.getElementById("nombre").innerText = invitados[id].nombre;
document.getElementById("mesa").innerText = invitados[id].mesa;

}

function confirmar(){

const boton = document.getElementById("btnConfirmar");

if(boton.disabled) return;

const formData = new FormData();
formData.append("id", id);

fetch("https://script.google.com/macros/s/AKfycbwqPnp9tfafogr7n4mZuK286UCDE7uPG5EsQ0eWfjbkimL_v8nsdNRUF2s9nSQ7aN3-/exec",{

method:"POST",
body: formData

})
.then(()=>{

// Como Google no responde bien, asumimos éxito visual
boton.innerText = "✔ Entrada registrada";
boton.classList.add("confirmado");
boton.disabled = true;

})
.catch(()=>{
alert("Error enviando datos");
});

}