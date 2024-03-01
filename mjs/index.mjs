// .js -> Por defecto uitilizaa Common js
// .mjs -> Utiliza el modulo de ES6
// .cjs -> Utiliza el modulo de Common js

import { sum, rest, mult } from "./sum.mjs";

console.log(sum(2, 3));
console.log(rest(2, 3));
console.log(mult(2, 3));
