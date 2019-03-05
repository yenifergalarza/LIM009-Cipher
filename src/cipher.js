window.cipher = {
  encode: (offset,string) => {
    string = (string.toUpperCase()).split('');
    let array1 = [];
    let arrayT = string.map(function(letra) { 
      if(letra.charCodeAt()>= 65 && letra.charCodeAt()<=90){
    let trans = String.fromCharCode((letra.charCodeAt(0)-65+(offset%65))%26+65);
    return trans; }
    else{array1.push(letra)}
    }); 
    arrayT = arrayT.join('').toString().toLowerCase();
    return arrayT;
    }, 
  decode: (offset,string) => {
    string = (string.toUpperCase()).split('');
    let array1 = [];
    let arrayT = string.map(function(letra) { 
      if(letra.charCodeAt()>= 65 && letra.charCodeAt()<=90){
        let trans = String.fromCharCode((letra.charCodeAt(0)+65-(offset%65))%26+65);
    return trans; }
    else{array1.push(letra)}
    }); 
    arrayT = arrayT.join('').toString().toLowerCase();
    return arrayT;
    }
};


