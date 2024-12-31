import { read } from "fs";

import * as hi from "./helper2.js";
import yo from "./helper.cjs";

class Human {
  constructor() {}
}

console.log(yo);
console.log(hi);

let n = 10;
for (let i = 0; i < 10; i++) {
  n += i;
}

console.log(n);

const sampleObject = {
  a: () => {},
  b: function sampleFunc() {},
};

const animal = {
  dna: "ATCG",
};

const dog = {
  facd: "🐺",
};

Object.setPrototypeOf(dog, animal);
console.log(Object.getPrototypeOf(dog) === animal); // true
Object.getPrototypeOf(animal) === Object.prototype; // true

// The end of this chain is called the null prototype.
Object.getPrototypeOf(Object.prototype) === null; // true
