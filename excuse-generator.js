#!/usr/bin/env node

const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car", "my shoes"];
const when = ["before class", "when I was sleeping", "while I was exercising", "during my lunch"];

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateExcuse() {
  return `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(what)} ${getRandomItem(when)}.`;
}

console.log(generateExcuse());
