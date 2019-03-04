window.cipher = {
  encode: (offset,string) => {
    string = (string.toUpperCase()).split("");
    let arrayT = string.map(function(letra) {
    let trans = String.fromCharCode(( letra.charCodeAt(0)-65+(offset%65))%26+65);
    return trans; 
    });
    arrayT = ((arrayT.join('')).toString()).toLowerCase();
    return arrayT;
  }, 
  decode: (offset,string) => {
    string = (string.toUpperCase()).split("");
    let arrayT = string.map(function(letra) {
    let trans = String.fromCharCode(( letra.charCodeAt(0)+65-(offset%65))%26+65);
    return trans; 
    });
    arrayT = ((arrayT.join('')).toString()).toLowerCase();
    return arrayT;
  }
};

