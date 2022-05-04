var kaina = parseFloat(prompt("Kokia prekės kaina?"));

while( isNaN(kaina) ){
    kaina = parseFloat(prompt("Įvestas ne skaičius. Kokia prekės kaina?"));
}

var pvm = 0.21;
var kainaPvm = (kaina * pvm);
var kainaSuPvm = kainaPvm + kaina;
kainaPvm = Number(kainaPvm).toFixed(2);
kaina = Number(kaina).toFixed(2);

console.log("Prekės kaina su PVM: " + kainaSuPvm  + "€");
console.log("PVM: " + kainaPvm  + "€");
console.log("Prekės kaina be PVM: " + kaina + "€");
