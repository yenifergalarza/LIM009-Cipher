window.cipher = {
  encode: (offset,string) => {
    offset=offset%65;
    let asciiLetter ="";
    for( let i =  0  ; i< string.length;i++){
      //console.log(string[i]);
     let letterToAscii= string[i].toUpperCase();

    asciiLetter +=  String.fromCharCode((letterToAscii.charCodeAt(0)-65+offset)%26+65);
      //palabramostrada.innerhtml 
    }
    return  asciiLetter.toLowerCase()  ;
  },
  decode: (offset,string) => {
    offset=offset%65;
    let asciiLetter ="";
    for( let i =  0  ; i< string.length;i++){
      //console.log(string[i]);
     let letterToAscii= string[i].toUpperCase();
    asciiLetter +=  String.fromCharCode((letterToAscii.charCodeAt(0)+65-offset)%26+65);
    //palabramostrada.innerhtml 
    }
    return  asciiLetter.toLowerCase()  ;
  }
};

