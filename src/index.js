
const offsetNumber = document.getElementById("offset");

const buttonCipher = document.getElementById("cipherButton");
const  replaceTextjs = ()=>{
const textAreaCipher = document.getElementById("cipher");
const textCipherReplace = document.getElementById("cipherText");
    textCipherReplace.innerHTML = "";
    textCipherReplace.innerHTML  += cipher.encode( offsetNumber.value,textAreaCipher.value);
};
buttonCipher.addEventListener("click", replaceTextjs);

const buttonDecipher = document.getElementById("decipherButton");
const replaceTextjsD= ()=>{
    const textDecipherReplace = document.getElementById("decipherText");
    const textAreaDecipher = document.getElementById("decipher");
    textDecipherReplace.innerHTML = "";
    textDecipherReplace.innerHTML  += cipher.decode( offsetNumber.value,textAreaDecipher.value);
}
buttonDecipher.addEventListener("click", replaceTextjsD);