import {containerInit,containerAfterInit} from "./variables.js";

document.getElementById("yes-music").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Con música.")
    containerInit.hidden = true;
    containerAfterInit.hidden = false;
});

document.getElementById("not-music").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Sin música.")
    containerInit.hidden = true;
    containerAfterInit.hidden = false;
});