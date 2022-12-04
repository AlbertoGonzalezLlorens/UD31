function valorRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);}

let dado1;
let dado2;
let suma;
const numsuma =[];
const valsuma = [];

for (let i=0; i<12;i++){
    numsuma[i]=i+1;
    valsuma[i]=0;
}

for (let i=0; i<3600;i++){
    dado1=valorRandom(1,6 );
    dado2=valorRandom(1,6);
    suma = dado1+dado2;
    valsuma[suma-1]+=1;
}

console.log(numsuma);
console.log(valsuma);