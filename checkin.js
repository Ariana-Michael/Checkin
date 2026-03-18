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

// 🔥 usamos GET en lugar de POST
const url = "https://script.google.com/macros/s/AKfycbwOMQdjOy9Sa2AwWFbUznqti9u9Pac_qHn-zzZeeJOc9oXlPWV7DEKeHrukbTFalxGZ/exec" + id;

fetch(url)
.then(()=>{

boton.innerText = "✔ Entrada registrada";
boton.classList.add("confirmado");
boton.disabled = true;

})
.catch(()=>{
alert("Error enviando datos");
});

}