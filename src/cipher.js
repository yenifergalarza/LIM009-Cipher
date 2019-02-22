window.cipher = {
  encode: (offset,string) => {
    offset=offset%65;
    let asciiLetter ="";
    for( let i =  0  ; i< string.length;i++){
      //console.log(string[i]);
     let LetterToAscii= string[i].charCodeAt(0);
    asciiLetter +=  String.fromCharCode((LetterToAscii-65+offset)%26+65);
      //palabramostrada.innerhtml 
    }
    return  asciiLetter  ;
  },
  decode: (offset,string) => {
    offset=offset%65;
    let asciiLetter ="";
    for( let i =  0  ; i< string.length;i++){
      //console.log(string[i]);
     let LetterToAscii= string[i].charCodeAt(0);
    asciiLetter +=  String.fromCharCode((LetterToAscii+65-offset)%26+65);
    //palabramostrada.innerhtml 
    }
    return  asciiLetter  ;
  }
};

