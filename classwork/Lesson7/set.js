// set це унікальний набір

// let set = new Set();
// set.add('asd'); // наповнюється за допомогою add
// set.add('qwe');
// set.add('asd');
// set.add('xxx');
//
// console.log(set); // виведе тільки унікальні значення які не повторювалися
//
// //можна перевірити чи наявний той чи інший обєкт
// console.log(set.has('asd')); // return true or false
//
// set.delete('xxx');
// console.log(set);
//
// console.log(set.size); // кількість обєктів в середині
//
// // можна проітерувати його за допомогою forEach + callback функція
// set.forEach(value => console.log(value));
//
// //можна з цього обєкту створити масив
// let fromArray = Array.from(set); // Array це клас
// console.log(fromArray);

let set = new Set([11, 22, 33, 44, 11, 22, 55,]);
console.log(set);
let fromArray = Array.from(set);
console.log(fromArray);

