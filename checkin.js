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

alert("Entrada confirmada ✔");

}

function confirmar(){

fetch("https://script.google.com/macros/s/AKfycbwqPnp9tfafogr7n4mZuK286UCDE7uPG5EsQ0eWfjbkimL_v8nsdNRUF2s9nSQ7aN3-/exec",{

method:"POST",

body:JSON.stringify({
id:id
})

})

.then(()=>{

alert("Entrada confirmada ✔");

});

}