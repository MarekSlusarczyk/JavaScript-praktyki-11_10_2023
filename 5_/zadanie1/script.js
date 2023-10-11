const a = 5;
const b = 6;
const c = 7;

let polowaObwodu = 1/2 * (a + b + c);

let poleTrojkata = Math.sqrt(polowaObwodu * (polowaObwodu - a) * (polowaObwodu - b) * (polowaObwodu - c))

console.log("Pole tórjkąta o bokach: " + a + ", " + b + ", " + c + " wynosi: " + poleTrojkata)