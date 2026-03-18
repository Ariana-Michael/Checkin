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

fetch("https://script.google.com/macros/s/AKfycbwOMQdjOy9Sa2AwWFbUznqti9u9Pac_qHn-zzZeeJOc9oXlPWV7DEKeHrukbTFalxGZ/exec",{

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