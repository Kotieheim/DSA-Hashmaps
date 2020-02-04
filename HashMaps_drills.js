const HashMap = require("./hasMap");
MAX_LOAD_RATIO = 0.5;
SIZE_RATIO = 3;

function main() {
  const lotr = new HashMap();
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandolf");
  lotr.set("Human", "Aragon");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  // length is 9, I have 11 items set, I'm missing the duplicates such as {"Hobbit", "Bilbo" or "Maiar", "The Necromancer"}  and also a slot is "undefined".
  console.log(lotr.get("Hobbit"));
  console.log(lotr.get("Maiar"));
  // there is a discrepancy, I'm assuming there was collision and they were placed elswhere, in another key, using open addressing
  console.log(lotr._capacity);
  // capacity is still 8 which is our default, not totally sure why is hasn't changed seeing as none of them are marked deleted.
  //IDK
  WhatDoesThisDo();
}

// looks like it is adding a key of "Hello World" with numbers as values? but overcomplicating it.
const WhatDoesThisDo = function() {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};
main();

function duplicates(string) {
  const dupes = new HashMap();
  for (let i = 0; i < string.length; i++) {
    dupes.set(string[i], string[i]);
  }
  console.log(dupes);
  let newWord = "";
  dupes._hashTable.forEach(letter => {
    newWord += letter.value;
  });
  console.log(newWord);
}
const string = "google all that you think can think of";
const string2 = "google";
duplicates(string);
duplicates(string2);

function palindrome(string) {
  const palindromeMap = new Map();
  let odd = 0;
  for (let i = 0; i < string.length; i++) {
    if (palindromeMap.get(string[i]) === undefined) {
      palindromeMap.set(string[i], 1);
    } else {
      let char = palindromeMap.get(string[i]);
      palindromeMap.set(string[i], (char += 1));
    }
  }
  for (let i = 0; i < palindromeMap.size; i++) {
    if (palindromeMap.get(string[i]) % 2 !== 0) {
      odd++;
      console.log("odd", odd);
    }
    if (odd > 1) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("strang"));
