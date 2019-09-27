/*global window */
import {typingSpeed,typeEffect} from "./mod1.js";
typeEffect(typingSpeed);


const alertDoc = function(){
    window.alert("here is the alert");
};
const clear=function(){

};


window.onload = function () {
    const clearButton = document.getElementById('clrBtn');
    const alertButton = document.getElementById('altBtn');
    if (clearButton !== null) {
        clearButton.onclick = clear;
    }
    if (alertButton !== null) {
        alertButton.onclick = alertDoc;
    }
};