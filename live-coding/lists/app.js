// let name = "Henrik";
// let years = 27;
// let pet = "cat";

// console.log(`${name} ${years} years, owns a ${pet}`);

// name = "Gertrude";
// years = 19;
// pet = "parrot";

// console.log(`${name} ${years} years, owns a ${pet}`);

// name = "Bertil";
// years = 25;
// pet = "goldfish";

// console.log(`${name} ${years} years, owns a ${pet}`);

// name = "Yves";
// years = 35;
// pet = "cat";

// console.log(`${name} ${years} years, owns a ${pet}`);

//console.log("Gertrude 19 years, owns a parrot");
//console.log("Bertil 25 years, owns a goldfish");
//console.log("Yves 35 years, owns a cat");

let name = 'Henrik';
let name1 = 'Gertrude';
let name37 = 'Fredrik';

// Alla "element" (sak) har en index (position)
let names = ['Henrik', 'Gertrude', 'Bertil', 'Yves']; //indexerad lista med namn
let ages = [27, 19, 25, 35];
let pets = ['cat', 'parrot', 'goldfish', 'cat']; //cat, parrot, goldfish, cat

//console.log(names[0]);

//console.log(names.length);

for (let i = 0; i < names.length; i++) { //fori (for-index)
  //console.log(`${names[i]} ${ages[i]} years, owns a ${pets[i]}`);
}

console.log('\n-------\n');

let shoppingList = [
  'Kaffe', 'Glass', 'Mjölk', 'Kebabpizza', 'Smör', 'Falukorv', 'Ägg', 'Häcksax', 'Twin Turbo',
];



// CRUD - Create, Read, Update, Delete


// Read operation
for (let item of shoppingList) { //for-each
  //console.log(item);
}

// console.log('\n-------\n');

// console.log(shoppingList[4]);
// console.log(shoppingList[3]);
// console.log(shoppingList[6]); // "Ägg"

// console.log('\n-------\n');

for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1} - ${shoppingList[i]}`);
  /* Gör så att for loopen skapar följande utskrift
    1 - Kaffe
    2 - Glass
    3 - Mjölk
    ...
    9 - Twin Turbo
  */
}


// Create operation
// let fruit = "Apple";
// fruit = fruit.replace("A", "Ä"); Texter behöver tilldelas!
// console.log(fruit);

shoppingList.push("Chips!!!!"); // immutability


// Update operation
console.log(shoppingList[2]); // Mjölk
console.log(shoppingList[9]); // Chips!!!

// Byta plats på två värden
let temp = shoppingList[2]; // Behöver komma en av sakerna (den som skrivs över först)
shoppingList[2] = shoppingList[9]; // Här hamnar Chips!!! på både index 2 och 9
shoppingList[9] = temp;


// Delete operation
let fruit = "Apple";
console.log(fruit.indexOf("p"));

let indexOfSax = shoppingList.indexOf("Häcksax"); // tar index värdet för ett element
let removeCount = 1;
shoppingList.splice(indexOfSax, removeCount); // från position index, ta bort "removeCount" element


console.log(fruit.includes("A"));
console.log(shoppingList.includes("Tea"));


console.log("\n---Final result---")
for (let item of shoppingList) { //for-each
  console.log(item);
}





let query = "mjö";
shoppingList = [
  'Kaffe', 'Glass', 'Mjölk', 'Kebabpizza', 'Smör', 'Falukorv', 'Ägg', 'Häcksax', 'Twin Turbo',
];

// Skriva en loop som söker igenom listan tills att den hittar en träff (ej case sensitive)

let itemFound = false;
let index = 0; // i-värdet
let matchedItem = undefined;

query = query.toLowerCase();

while (!itemFound && index < shoppingList.length) {
  matchedItem = shoppingList[index];

  matchedItem = matchedItem.toLowerCase();

  if (matchedItem.includes(query)) {
    itemFound = true;
  } else {
    index++;
  }
}

if (itemFound) {
  console.log(`On index ${index} we found ${matchedItem} with the query ${query}`);
} else {
  console.log("Could not find item with the query " + query);
}