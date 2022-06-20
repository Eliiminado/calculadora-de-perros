/*const edad = prompt("Introduce aqui los años de tu perro:");
const edahumano = (edad * 7);
alert(`Tu perro tiene ${edahumano} si fuera un humano`);
alert(`Tienes ${edad} años`)*/
function Calcular() {

    const EdadDog = document.querySelector("#EdadDog").value

    if (!isNaN(EdadDog)) {

        const EdadHuman = EdadDog * 7;
        const NameDog = document.querySelector("#NameDog").value
        document.querySelector("#EdadFinal").innerHTML = `<div class="alert alert-info" role="alert"> La edad de ${NameDog} es ${EdadHuman}</div>`

    }
    else {
        document.querySelector("#EdadFinal").innerHTML = `<div>Introduce datos validos!</div>`
    }


}
document.querySelector("#Calcular").addEventListener("click", Calcular);