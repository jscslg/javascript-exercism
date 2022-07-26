//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (x) => {
  let y='';
  for (let index = 0; index < x.length; index++) {
    if(x[index]==='G') y+='C';
    if(x[index]==='C') y+= 'G';
    if(x[index]==='T') y+= 'A';
    if(x[index]==='A') y+= 'U';
  }
  return y;
};
