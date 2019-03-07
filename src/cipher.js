window.cipher = {
  encode: (offset, string) => {
    string = (string.toUpperCase()).split('')
    const arrayT = string.filter(letra => letra.charCodeAt() >= 65 && letra.charCodeAt() <= 90)
      .map(letra => String.fromCharCode((letra.charCodeAt(0) + 65 - (offset % 65)) % 26 + 65));
    return arrayT.join('').toString().toLowerCase();

  },
  decode: (offset, string) => {
    string = (string.toUpperCase()).split('')
    const arrayT = string.filter(letra => letra.charCodeAt() >= 65 && letra.charCodeAt() <= 90)
      .map(letra => String.fromCharCode((letra.charCodeAt(0) - 65 + (offset % 65)) % 26 + 65));
    return arrayT.join('').toString().toLowerCase();

  }
};
