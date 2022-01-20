"use strict";

const inputPounds = document.getElementById("inputPounds");
const inputKilograms = document.getElementById("inputKilograms");
const inputGrams = document.getElementById("inputGrams");
const inputOunces = document.getElementById("inputOunces");
const inputStones = document.getElementById("inputStones");

function poundConverter(value) {
  inputKilograms.value = (value / 2.2046).toFixed(2); // kg=lb/2.2046
  inputGrams.value = (value / 0.0022046).toFixed(0); // g=lb/0.0022046
  inputOunces.value = (value * 16).toFixed(2); // oz=lb*16
  inputStones.value = (value * 0.071429).toFixed(3); // st=lb*0.071429
}

function kilogramConverter(value) {
  inputPounds.value = (value * 2.2046).toFixed(2); // lb=kg*2.2046
  inputGrams.value = (value * 1000).toFixed(0); // g=kg*1000
  inputOunces.value = (value * 35.274).toFixed(2); // oz=kg*35.274
  inputStones.value = (value * 0.1574).toFixed(3); // st=kg*0.1574
}

function ounceConverter(value) {
  inputPounds.value = (value * 0.0625).toFixed(4); // lb=oz*0.0625
  inputGrams.value = (value / 0.035274).toFixed(1); // g=oz/0.035274
  inputKilograms.value = (value / 35.274).toFixed(4); // kg=oz/35.274
  inputStones.value = (value * 0.0044643).toFixed(4); // st=oz*0.0044643
}

function gramConverter(value) {
  inputPounds.value = (value * 0.0022046).toFixed(4); // lb=g*0.0022046
  inputOunces.value = (value * 0.035274).toFixed(3); // oz=g*0.035274
  inputKilograms.value = (value / 1000).toFixed(4); // kg=g/1000
  inputStones.value = (value * 0.00015747).toFixed(5); // st=g*0.00015747
}

function stoneConverter(value) {
  inputPounds.value = (value * 14).toFixed(1); // lb=st*14
  inputOunces.value = (value * 224).toFixed(0); // oz=st*224
  inputKilograms.value = (value / 0.15747).toFixed(1); // kg=st/0.15747
  inputGrams.value = (value / 0.00015747).toFixed(0); // g=st/0.00015747
}
