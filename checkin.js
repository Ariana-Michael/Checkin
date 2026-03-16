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

fetch("TU_SCRIPT_URL",{

method:"POST",

body:JSON.stringify({
id:id
})

})
.then(res=>res.json())
.then(data=>{

if(data.status=="ok"){
alert("Entrada confirmada ✔");
}

if(data.status=="duplicado"){
alert("⚠️ Este QR ya fue usado");
}

if(data.status=="noexiste"){
alert("QR inválido");
}

});

}