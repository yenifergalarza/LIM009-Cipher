//import { createCipher } from "crypto";

/* Acá va tu código */
const textAreaDecipher = document.getElementById("decipher");
const buttonDecipher = document.getElementById("decipherButton");
const textDecipherReplace = document.getElementById("decipherText");
const offsetNumber = document.getElementById("offset");
//let add = () => document.getElementById("firstText").innerHTML = ` ${} `;
const textAreaCipher = document.getElementById("cipher");
const buttonCipher = document.getElementById("cipherButton");
const textCipherReplace = document.getElementById("cipherText");

buttonCipher.addEventListener("click", replaceTextjs);
function replaceTextjs(){
    //textCipherReplace.innerHTML  += cipher.encode(offsetNumber,textAreaDecipher);
    //console.log(`${offsetNumber}`)
    textCipherReplace.innerHTML = "";
    textCipherReplace.innerHTML  += cipher.encode( offsetNumber.value,textAreaCipher.value);
}

buttonDecipher.addEventListener("click", replaceTextjsD);
function replaceTextjsD(){
    //textCipherReplace.innerHTML  += cipher.encode(offsetNumber,textAreaDecipher);
    textDecipherReplace.innerHTML = "";
    textDecipherReplace.innerHTML  += cipher.decode( offsetNumber.value,textAreaDecipher.value);
}







