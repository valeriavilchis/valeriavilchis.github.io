import {containerInit,imagePerfil,containerDetails} from "./variables.js";

document.getElementById("about-me").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("dando click al acerca de ")
    containerInit.remove();
    imagePerfil.remove();

    fetch('../data/perfil.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
});