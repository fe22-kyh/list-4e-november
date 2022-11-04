//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

let current = 0;
let next = 1;

let n = 5;
let sum = 0;

//Fib - summan av de två förgående talen skapar nästa tal i serien
//Gör så att for loopen tar fram den "n-th" fib talet, ex. så är n = 5 talet 3
for (let i = 0; i < n; i++) {
  //console.log(i + "-th - " + current);

  sum = current + next;

  current = next;
  next = sum;
}



// for (let i = 0; i < 10; i++) {
//   console.log(i + "-th multiplication table");

//   for (let j = 0; j < 20; j++) {
//     console.log(i * j);
//   }

// }


let symbol = "*";
let shape = "*";

for (let i = 0; i < 5; i++) {
  console.log(shape);

  for (let j = 0; j < 3; j++) {
    shape = shape + " - ";
    console.log(shape);
  }

  shape = symbol;
}



// A - Kalle ska städa upp hela gården, alla löv ska bort

// B - Gertrude ska köpa de alla varor som finns på köplistan

// Skriva i chatten, ex. "A - While, B - while"

let randomNumber = Math.floor(Math.random() * 10);

for (let i = 0; i < randomNumber; i++) {
  console.log(i);
}