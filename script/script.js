function prueba(){
	let random = Math.random();	
	document.getElementById('resultado').innerHTML = random.toFixed(4);
}

// Registro del Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("serviceworker.js");
}

// Para el botón de Instalar
let bipEvent = null;
window.addEventListener("beforeinstallprompt", event => {
    bipEvent = event;
    console.log("BIP");
    document.querySelector("#instalar").style.display = "block";
});
function instalar() {
    if (bipEvent) bipEvent.prompt();
}