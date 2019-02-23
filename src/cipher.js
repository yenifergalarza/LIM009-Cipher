window.cipher = {
  encode: (offset,string) => {
    offset=offset%65;
    let asciiLetter ="";
    for( let i =  0  ; i< string.length;i++){
      //console.log(string[i]);
     let LetterToAscii= string[i].toUpperCase();

    asciiLetter +=  String.fromCharCode((LetterToAscii.charCodeAt(0)-65+offset)%26+65);
      //palabramostrada.innerhtml 
    }
    return  asciiLetter.toLowerCase()  ;
  },
  decode: (offset,string) => {
    offset=offset%65;
    let asciiLetter ="";
    for( let i =  0  ; i< string.length;i++){
      //console.log(string[i]);
     let LetterToAscii= string[i].toUpperCase();
    asciiLetter +=  String.fromCharCode((LetterToAscii.charCodeAt(0)+65-offset)%26+65);
    //palabramostrada.innerhtml 
    }
    return  asciiLetter.toLowerCase()  ;
  }
};

